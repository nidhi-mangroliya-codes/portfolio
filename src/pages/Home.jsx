
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Palette,
  Layers,
  Monitor,
  Sparkles,
} from "lucide-react";
import "./Home.css";

const tools = [
  { name: "HTML", category: "Structure", icon: "5", color: "html" },
  { name: "CSS", category: "Styling", icon: "✳", color: "css" },
  { name: "JavaScript", category: "Programming", icon: "JS", color: "javascript" },
  { name: "React", category: "Frontend", icon: "⚛", color: "react" },
  { name: "GitHub", category: "Version control", icon: "⌘", color: "github" },
  { name: "VS Code", category: "Code editor", icon: "</>", color: "vscode" },
];

const projects = [
  {
    number: "01",
    title: "JobTrack",
    description:
      "A job application dashboard designed to organize applications and track career progress.",
    image: "/images/jobtrack-dashboard.png",
    tags: ["React", "JavaScript", "CSS"],
    link: "/projects/jobtrack",
    color: "blue",
  },
  {
    number: "02",
    title: "PageCraft",
    description:
      "A modern web design project focused on clean layouts and responsive user interfaces.",
    image: "/images/pagecraft-home.png",
    tags: ["React", "CSS", "Responsive UI"],
    link: "/projects/pagecraft",
    color: "purple",
  },
  {
    number: "03",
    title: "ShopPilot",
    description:
      "An e-commerce dashboard concept with a clean interface for managing an online store.",
    image: "/images/shoppilot-dashboard.png",
    tags: ["React", "Dashboard UI", "CSS"],
    link: "/projects/shoppilot",
    color: "orange",
  },
  {
    number: "04",
    title: "Bugatti Chiron",
    description:
      "A premium automotive showcase featuring elegant styling and a bold visual presentation.",
    image: "/images/bugatti-home.png",
    tags: ["React", "CSS", "Web Design"],
    link: "/projects/bugatti-chiron",
    color: "green",
  },
];

export default function Home() {
  return (
    <div className="nidhi-home">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-availability">
            <span className="availability-dot" />
            Open to opportunities
          </div>

          <p className="hero-eyebrow">HELLO, I'M NIDHI MANGROLIYA</p>

          <h1>
            Building digital
            <br />
            experiences that
            <br />
            <span className="hero-highlight">feel different.</span>
          </h1>

          <p className="hero-description">
            I'm a BCA graduate and aspiring Frontend Developer who enjoys
            transforming ideas into beautiful, responsive and user-friendly
            web experiences with React.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="hero-primary-btn">
              Explore My Projects <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="hero-secondary-btn">
              Let's Talk <ArrowRight size={17} />
            </Link>
          </div>

          <div className="hero-tech-note">
            <span className="hero-note-line" />
            Turning ideas into reality, one component at a time.
          </div>
        </div>

        {/* MINIMAL SQUARE + FLOATING CORNER PROFILE */}
        <div className="hero-visual">
          <div className="hero-bg-title" aria-hidden="true" />

          <span className="profile-corner profile-corner-tl" aria-hidden="true" />
          <span className="profile-corner profile-corner-tr" aria-hidden="true" />
          <span className="profile-corner profile-corner-bl" aria-hidden="true" />
          <span className="profile-corner profile-corner-br" aria-hidden="true" />

          <div className="hero-art-card hero-profile-card">
            <div className="hero-profile-photo">
              <img
                src="/images/profile.jpg"
                alt="Nidhi Mangroliya - React Developer"
                className="hero-profile-image"
              />

              <div className="hero-profile-tag">
                <span className="profile-status-dot" />
                REACT DEVELOPER
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="home-about" id="about">
        <div className="section-label">
          <span>01</span> A LITTLE ABOUT ME
        </div>

        <div className="about-layout">
          <div className="about-heading">
            <h2>
              Curious mind.
              <br />
              <span>Creative builder.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              I enjoy turning ideas into useful and visually appealing web
              applications. My focus is on learning modern frontend
              development and building projects that solve practical problems.
            </p>

            <p>
              From interactive dashboards to website showcases, every project
              helps me improve my coding, design and problem-solving skills.
            </p>

            <Link to="/about" className="text-link">
              More About Me <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="about-values">
          <div className="value-item">
            <span className="value-icon value-blue">
              <Code2 size={21} />
            </span>
            <div>
              <h3>Clean Code</h3>
              <p>Readable and organized components</p>
            </div>
          </div>

          <div className="value-item">
            <span className="value-icon value-pink">
              <Palette size={21} />
            </span>
            <div>
              <h3>Thoughtful Design</h3>
              <p>Clear layouts and visual details</p>
            </div>
          </div>

          <div className="value-item">
            <span className="value-icon value-green">
              <Layers size={21} />
            </span>
            <div>
              <h3>Continuous Learning</h3>
              <p>Growing through practical projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="home-toolkit">
        <div className="section-label">
          <span>02</span> MY TOOLKIT
        </div>

        <div className="toolkit-heading">
          <div>
            <h2>
              Tools I use to
              <br />
              <span>bring ideas to life.</span>
            </h2>
            <p>
              The technologies and tools I'm learning and using in my projects.
            </p>
          </div>

          <div className="toolkit-heading-icon">
            <Monitor size={30} />
          </div>
        </div>

        <div className="toolkit-grid">
          {tools.map((tool) => (
            <article className={`tool-card ${tool.color}`} key={tool.name}>
              <div className="tool-icon">{tool.icon}</div>

              <div className="tool-details">
                <h3>{tool.name}</h3>
                <p>{tool.category}</p>
              </div>

              <span className="tool-arrow">
                <ArrowUpRight size={17} />
              </span>
            </article>
          ))}
        </div>

        <div className="toolkit-note">
          <span className="note-sparkle">✦</span>
          <p>
            Always exploring, always improving — one project at a time.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="home-projects" id="projects">
        <div className="section-label">
          <span>03</span> SELECTED PROJECTS
        </div>

        <div className="projects-heading">
          <div>
            <h2>
              Things I've
              <br />
              <span>been building.</span>
            </h2>

            <p>
              A selection of my projects, experiments and practical frontend
              work.
            </p>
          </div>

          <Link to="/projects" className="all-projects-link">
            View All Projects <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="home-project-grid">
          {projects.map((project) => (
            <article
              className={`home-project-card project-${project.color}`}
              key={project.number}
            >
              <Link
                to={project.link}
                className="project-artwork"
                aria-label={`View ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="project-image"
                  loading="lazy"
                />

                <span className="project-number">{project.number}</span>

                <span className="project-image-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </Link>

              <div className="home-project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link to={project.link} className="project-open-link">
                  View Project <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-bottom-link">
          <Link to="/projects">
            Explore the complete project collection
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="home-cta">
        <div className="cta-sparkle">
          <Sparkles size={23} />
        </div>

        <p className="cta-eyebrow">HAVE A PROJECT IN MIND?</p>

        <h2>
          Let's build something
          <br />
          <span>meaningful together.</span>
        </h2>

        <p className="cta-description">
          I'm looking forward to learning, collaborating and creating great
          web experiences.
        </p>

        <Link to="/contact" className="cta-button">
          Get in Touch <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}
