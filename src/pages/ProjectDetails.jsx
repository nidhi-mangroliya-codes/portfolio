
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import "./ProjectDetails.css";

const projects = {
  jobtrack: {
    title: "JobTrack",
    category: "Career Dashboard",
    year: "2026",
    description:
      "A smarter way to organize job applications, monitor progress, and manage your career journey.",
    about:
      "JobTrack is a career management dashboard designed to bring job applications and career planning into one organized workspace. Its clean interface helps users review application details and follow their progress.",
    features:
      "The project showcases a dashboard, application tracking, analytics, calendar, and settings interfaces.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    screenshots: [
      { src: "/images/jobtrack-dashboard.png", title: "Dashboard" },
      { src: "/images/jobtrack-applications.png", title: "Applications" },
      { src: "/images/jobtrack-analytics.png", title: "Analytics" },
      { src: "/images/jobtrack-calendar.png", title: "Calendar" },
      { src: "/images/jobtrack-settings.png", title: "Settings" },
    ],
  },

  "mini-pagecraft": {
    title: "PageCraft",
    category: "Website Builder",
    year: "2026",
    description:
      "A modern website-building concept focused on a clean interface and visual editing experience.",
    about:
      "PageCraft explores how website creation tools can be presented through a simple, organized interface. The project focuses on presenting a website preview and editing workspace in a clear visual hierarchy.",
    features:
      "The showcased screens include the website homepage and editor interface, with an emphasis on layout, usability, and visual consistency.",
    tech: ["React", "JavaScript", "CSS"],
    screenshots: [
      { src: "/images/pagecraft-home.png", title: "Website Preview" },
      { src: "/images/pagecraft-editor.png", title: "Editor" },
    ],
  },

  shoppilot: {
    title: "ShopPilot",
    category: "E-commerce Dashboard",
    year: "2026",
    description:
      "A store management dashboard concept bringing products, orders, customers, and business insights together.",
    about:
      "ShopPilot presents e-commerce management through a structured dashboard. Its interface organizes important store sections so that information is easy to browse and understand.",
    features:
      "The project showcases product management, orders, customer information, analytics, reports, and settings screens.",
    tech: ["React", "JavaScript", "CSS"],
    screenshots: [
      { src: "/images/shoppilot-dashboard.png", title: "Dashboard" },
      { src: "/images/shoppilot-products.png", title: "Products" },
      { src: "/images/shoppilot-orders.png", title: "Orders" },
      { src: "/images/shoppilot-customers.png", title: "Customers" },
      { src: "/images/shoppilot-analytics.png", title: "Analytics" },
      { src: "/images/shoppilot-reports.png", title: "Reports" },
      { src: "/images/shoppilot-settings.png", title: "Settings" },
    ],
  },

  "bugatti-chiron": {
    title: "Bugatti Chiron",
    category: "Automotive Website",
    year: "2026",
    description:
      "A luxury automotive showcase inspired by bold design, exceptional performance, and refined presentation.",
    about:
      "The Bugatti Chiron project explores a premium automotive website experience. It uses dedicated sections to present the vehicle and create a visually engaging browsing experience.",
    features:
      "The showcased pages include the home page, about section, services, collection, and contact page.",
    tech: ["React", "JavaScript", "CSS"],
    screenshots: [
      { src: "/images/bugatti-home.png", title: "Home" },
      { src: "/images/bugatti-about.png", title: "About" },
      { src: "/images/bugatti-services.png", title: "Services" },
      { src: "/images/bugatti-collection.png", title: "Collection" },
      { src: "/images/bugatti-contact.png", title: "Contact" },
    ],
  },
};

function Screenshot({ screen, large = false }) {
  return (
    <div
      className={`detail-image ${
        large ? "detail-image-large" : ""
      }`}
    >
      <img
        src={screen.src}
        alt={screen.title}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          event.currentTarget.nextElementSibling.style.display = "flex";
        }}
      />

      <div className="detail-image-fallback">
        <span>{screen.title}</span>
        <small>Check the image in public/images</small>
      </div>
    </div>
  );
}

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects[projectId];

  if (!project) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <Link to="/projects" className="detail-back">
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <h1>Project not found</h1>
          <p>Please select a project from the Projects page.</p>
        </div>
      </main>
    );
  }

  const [hero, ...remainingScreens] = project.screenshots;
  const aboutScreens = remainingScreens.slice(0, 2);
  const featureScreens = remainingScreens.slice(2);

  const moreProjects = Object.entries(projects).filter(
    ([id]) => id !== projectId
  );

  return (
    <main className="detail-page">
      <article className="detail-container">
        <header className="detail-topbar">
          <Link to="/projects" className="detail-back">
            <ArrowLeft size={17} />
            <span>All Projects</span>
          </Link>

          <Link to="/projects" className="detail-brand">
            N<span>.</span>
          </Link>
        </header>

        <section className="detail-intro">
          <span className="detail-eyebrow">PROJECT / 2026</span>

          <h1>{project.title}</h1>

          <p className="detail-lead">{project.description}</p>

          <div className="detail-meta">
            <div>
              <span className="detail-label">Category</span>
              <p>{project.category}</p>
            </div>

            <div>
              <span className="detail-label">Year</span>
              <p>{project.year}</p>
            </div>

            <div>
              <span className="detail-label">Built with</span>
              <p>{project.tech.slice(0, 2).join(" · ")}</p>
            </div>
          </div>

          <div className="detail-tags">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>

        <section className="detail-hero-image">
          <Screenshot screen={hero} large />
        </section>

        <section className="detail-content-section detail-about">
          <div className="detail-section-heading">
            <span className="detail-number">01</span>
            <h2>Project Overview</h2>
          </div>

          <div className="detail-about-grid">
            <h3>
              Designed with purpose.
              <br />
              Built with React.
            </h3>

            <p>{project.about}</p>
          </div>

          {aboutScreens.length > 0 && (
            <div className="detail-gallery detail-gallery-two">
              {aboutScreens.map((screen) => (
                <figure key={screen.src}>
                  <Screenshot screen={screen} />
                  <figcaption>{screen.title}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>

        <section className="detail-content-section detail-features">
          <div className="detail-section-heading">
            <span className="detail-number">02</span>
            <h2>Inside the Project</h2>
          </div>

          <p className="detail-features-description">
            {project.features}
          </p>

          {featureScreens.length > 0 && (
            <div className="detail-gallery detail-gallery-features">
              {featureScreens.map((screen) => (
                <figure key={screen.src}>
                  <Screenshot screen={screen} large />
                  <figcaption>{screen.title}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>

        <section className="detail-tech-section">
          <div>
            <span className="detail-eyebrow">THE TOOLKIT</span>
            <h2>Technologies used</h2>
          </div>

          <div className="detail-tech-list">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>

        <section className="detail-more">
          <div className="detail-more-heading">
            <div>
              <span className="detail-eyebrow">EXPLORE MORE</span>
              <h2>More Projects</h2>
              <p>More work from my development portfolio.</p>
            </div>

            <Link to="/projects" className="detail-all-link">
              View all <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="detail-more-grid">
            {moreProjects.map(([id, item]) => (
              <Link
                to={`/projects/${id}`}
                className="detail-more-card"
                key={id}
              >
                <div className="detail-more-image">
                  <img
                    src={item.screenshots[0].src}
                    alt={`${item.title} preview`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />

                  <span className="detail-more-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <div className="detail-more-info">
                  <div className="detail-more-text">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <span className="detail-card-open">
                    View project <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="detail-footer">
          <Link to="/projects">
            <ArrowLeft size={16} />
            Back to all projects
          </Link>

          <span>Designed &amp; built with React</span>
        </footer>
      </article>
    </main>
  );
}
