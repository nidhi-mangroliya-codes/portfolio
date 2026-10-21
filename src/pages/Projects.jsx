
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: "jobtrack",
    number: "01",
    title: "JobTrack",
    description:
      "A career dashboard to organize job applications and track your progress.",
    tech: ["React", "CSS", "LocalStorage"],
    image: "/images/jobtrack-dashboard.png",
    theme: "jobtrack",
  },
  {
    id: "mini-pagecraft",
    number: "02",
    title: "PageCraft",
    description:
      "A modern website-building concept with a clean editor interface.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/images/pagecraft-home.png",
    theme: "pagecraft",
  },
  {
    id: "shoppilot",
    number: "03",
    title: "ShopPilot",
    description:
      "An e-commerce dashboard for managing products, orders and analytics.",
    tech: ["React", "JavaScript", "CSS"],
    image: "/images/shoppilot-dashboard.png",
    theme: "shoppilot",
  },
  {
    id: "bugatti-chiron",
    number: "04",
    title: "Bugatti Chiron",
    description:
      "A premium automotive showcase featuring an elegant car website design.",
    tech: ["React", "CSS", "JavaScript"],
    image: "/images/bugatti-home.png",
    theme: "bugatti",
  },
];

export default function Projects() {
  return (
    <main className="container projects-page">
      <header className="projects-heading">
        <p className="eyebrow">MY PORTFOLIO / SELECTED WORK</p>

        <h1>
          Projects I've <span>built.</span>
        </h1>

        <p className="projects-subtitle">
          A selection of projects showcasing my creativity
          and growth as a React developer.
        </p>
      </header>

      <section className="portfolio-projects-grid">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            className={`portfolio-project-card ${project.theme}`}
            key={project.id}
          >
            <div className="portfolio-project-image">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />

              <div className="project-image-fallback">
                <span>{project.title}</span>
                <small>Screenshot PNG not found</small>
              </div>

              <span className="portfolio-project-number">
                {project.number}
              </span>

              <span className="portfolio-project-open">
                <ArrowUpRight size={21} />
              </span>
            </div>

            <div className="portfolio-project-info">
              <div className="portfolio-project-title-row">
                <h2>{project.title}</h2>
                <ArrowUpRight
                  className="portfolio-title-arrow"
                  size={20}
                />
              </div>

              <p>{project.description}</p>

              <div className="portfolio-project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>

      <p className="projects-footer-note">
        More ideas, more learning, more projects.
      </p>
    </main>
  );
}
