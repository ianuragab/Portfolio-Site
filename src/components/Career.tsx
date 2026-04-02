import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Mobiloitte Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Converted high-fidelity Figma designs into responsive React.js and Next.js interfaces while integrating JWT authentication and RESTful APIs using Node.js and MongoDB. Contributed to full-stack feature delivery across multiple client projects, resolving 15+ bugs through peer code reviews and improving overall module stability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Bijnis (Bizcrum InfoTech)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting and shipping frontend modules for a B2B e-commerce platform serving 5,000+ active retailer users, owning critical flows across product listing, search, and order placement. Focused on performance optimization, reusable component systems, and delivering pixel-perfect, production-ready UIs in React.js and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
