import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  generateRobots,
  generateSitemap,
  renderDocument,
  routes,
} from "../dist/server/entry-server.js";

const rootDir = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const distDir = join(rootDir, "dist");
const template = await readFile(join(distDir, "index.html"), "utf8");
const assetTags = Array.from(
  template.matchAll(/<link[^>]+\/assets\/[^>]+>/g),
)
  .map((match) => match[0])
  .join("\n");

await rm(join(distDir, "server"), { recursive: true, force: true });

for (const route of routes) {
  const document = renderDocument(route.path, assetTags);
  const outputPath =
    route.path === "/"
      ? join(distDir, "index.html")
      : join(distDir, route.path.replace(/^\//, ""), "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, document);

  if (route.path !== "/") {
    const cleanUrlPath = join(distDir, `${route.path.replace(/^\//, "")}.html`);
    await mkdir(dirname(cleanUrlPath), { recursive: true });
    await writeFile(cleanUrlPath, document);
  }
}

await writeFile(join(distDir, "sitemap.xml"), generateSitemap());
await writeFile(join(distDir, "robots.txt"), generateRobots());
await writeFile(join(distDir, "404.html"), renderDocument("/404", assetTags));

const assetsDir = join(distDir, "assets");
const assetFiles = await readdir(assetsDir).catch(() => []);
await Promise.all(
  assetFiles
    .filter((file) => file.endsWith(".js") || file.endsWith(".js.map"))
    .map((file) => rm(join(assetsDir, file), { force: true })),
);
