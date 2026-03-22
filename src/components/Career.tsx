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
                <h5>Object Infotech | Surat</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Developed and maintained RESTful APIs using Node.js and Express.js.
              Collaborated with frontend developers to deliver scalable web applications.
              Designed and optimized database schemas using PostgreSQL/MySQL.
              Integrated backend services with React.js frontend applications.
              Implemented authentication and authorization using JWT.
              Improved API performance and optimized database queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
