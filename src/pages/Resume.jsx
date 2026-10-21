import React from "react";
import "./Resume.css";

const Resume = () => {
  const handleDownload = () => window.print();

  return (
    <main className="resume-page">
      <div className="resume-toolbar">
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleDownload}>
          Download / Save as PDF ↓
        </button>
      </div>

      <article className="resume-paper">
        <header className="resume-header">
          <span className="eyebrow">FRONTEND DEVELOPER</span>

          <h1>
            NIDHI <span>MANGROLIYA</span>
          </h1>

          <h2>React.js Developer | Frontend Developer</h2>

          <div className="contact-grid">
            <p>⌖ Chital, Amreli, Gujarat, India</p>
            <p>☎ 9327993977</p>
            <p>✉ nidhimangroliya10@gmail.com</p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/nidhi-mangroliya-codes"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub Profile
              </a>
            </p>

            <p>Portfolio: Add your live website link</p>
          </div>
        </header>

        <div className="resume-top-grid">
          <section className="resume-section summary-section">
            <h3>
              <span>01</span> PROFESSIONAL SUMMARY
            </h3>

            <p>
              BCA graduate seeking an entry-level Frontend Developer
              or React.js Developer role. Knowledge of HTML, CSS,
              JavaScript and React.js, with practical experience
              building personal projects. Interested in developing
              responsive, user-friendly web applications and growing
              as a software developer.
            </p>
          </section>

          <section className="resume-section skills-section">
            <h3>
              <span>02</span> TECHNICAL SKILLS
            </h3>

            <div className="skill-row">
              <strong>Languages</strong>
              <div className="skill-pills">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
              </div>
            </div>

            <div className="skill-row">
              <strong>Frontend</strong>
              <div className="skill-pills">
                <span>React.js</span>
                <span>React Hooks</span>
                <span>React Router</span>
              </div>
            </div>

            <div className="skill-row">
              <strong>UI Library</strong>
              <div className="skill-pills">
                <span>Material UI (MUI)</span>
              </div>
            </div>

            <div className="skill-row">
              <strong>Tools</strong>
              <div className="skill-pills">
                <span>VS Code</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>npm</span>
                <span>Vite</span>
              </div>
            </div>

            <div className="skill-row">
              <strong>Concepts</strong>
              <div className="skill-pills">
                <span>Responsive Design</span>
                <span>Components</span>
                <span>Props</span>
                <span>State</span>
              </div>
            </div>
          </section>
        </div>

        <div className="resume-bottom-grid">
          <section className="resume-section projects-section">
            <h3>
              <span>03</span> PROJECTS
            </h3>

            {/* Project 1: ShopPilot */}
            <div className="project-item">
              <div className="project-heading">
                <h4>ShopPilot</h4>
                <span className="project-tag">REACT PROJECT</span>
              </div>

              <p className="project-tech">
                React.js · JavaScript · CSS
              </p>

              <ul>
                <li>
                  Developed a shopping website project with a clean,
                  organized and user-friendly interface.
                </li>
                <li>
                  Focused on reusable React components and responsive
                  page design.
                </li>
              </ul>

              <p className="project-link">
                <strong>GitHub: </strong>
                <a
                  href="https://github.com/nidhi-mangroliya-codes/shoppilot"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code ↗
                </a>
              </p>
            </div>

            {/* Project 2: Car Showcase */}
            <div className="project-item">
              <div className="project-heading">
                <h4>Car Showcase</h4>
                <span className="project-tag">WEB PROJECT</span>
              </div>

              <p className="project-tech">
                React.js · JavaScript · CSS
              </p>

              <ul>
                <li>
                  Designed a car showcase website with a modern,
                  premium visual style.
                </li>
                <li>
                  Focused on page layout, styling and responsive
                  presentation.
                </li>
              </ul>

              <p className="project-link">
                <strong>GitHub: </strong>
                <a
                  href="https://github.com/nidhi-mangroliya-codes/bugatti-electric-blue"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code ↗
                </a>
              </p>
            </div>

            {/* Project 3: JobTrack Pro */}
            <div className="project-item">
              <div className="project-heading">
                <h4>JobTrack Pro</h4>
                <span className="project-tag">
                  DASHBOARD PROJECT
                </span>
              </div>

              <p className="project-tech">
                React.js · JavaScript · CSS
              </p>

              <ul>
                <li>
                  Created a dashboard to organize and track job
                  applications.
                </li>
                <li>
                  Designed job information and application status
                  sections.
                </li>
              </ul>

              <p className="project-link">
                <strong>GitHub: </strong>
                <a
                  href="https://github.com/nidhi-mangroliya-codes/jobtrack"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code ↗
                </a>
              </p>
            </div>
          </section>

          <aside className="resume-sidebar">
            <section className="resume-section">
              <h3>
                <span>04</span> EDUCATION
              </h3>

              <div className="info-card">
                <h4>Bachelor of Computer Applications (BCA)</h4>

                <p className="college-name">
                  Hariben Bhagvanji Lalji Tejura Mahila College,
                  Chalala, Gujarat
                </p>

                <div className="education-detail">
                  <span className="detail-icon">▦</span>
                  <span>Graduated: 2026</span>
                </div>

                <div className="education-detail">
                  <span className="detail-icon">%</span>
                  <span>84.21%</span>
                </div>

                <div className="education-detail">
                  <span className="detail-icon">★</span>
                  <span>CGPA 8.44/10</span>
                </div>

                <div className="education-detail">
                  <span className="detail-icon">✦</span>
                  <span>First Distinction</span>
                </div>
              </div>
            </section>

            <section className="resume-section additional-section">
              <h3>
                <span>05</span> ADDITIONAL INFO
              </h3>

              <div className="info-card">
                <strong>Career Level</strong>
                <p>Fresher</p>

                <strong>Languages</strong>
                <p>Gujarati, Hindi, English</p>
              </div>
            </section>
          </aside>
        </div>

        <footer className="resume-footer">
          NIDHI MANGROLIYA <span>•</span> FRONTEND DEVELOPER
        </footer>
      </article>
    </main>
  );
};

export default Resume;
