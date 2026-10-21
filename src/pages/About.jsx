import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  Monitor,
  Layers3,
  GitBranch,
  Github,
  Lightbulb,
  Target,
} from "lucide-react";
import "./About.css";

const skills = [
  { name: "HTML5", level: "Structure", icon: Code2 },
  { name: "CSS3", level: "Styling & Responsive UI", icon: Layers3 },
  { name: "JavaScript", level: "Programming", icon: Sparkles },
  { name: "React.js", level: "Frontend Development", icon: Monitor },
  { name: "Git & GitHub", level: "Version Control", icon: GitBranch },
];

const highlights = [
  {
    number: "01",
    title: "What I do",
    description:
      "I use HTML, CSS, JavaScript and React to build modern interfaces and practical web applications.",
    icon: Code2,
  },
  {
    number: "02",
    title: "My education",
    description:
      "I completed my Bachelor of Computer Applications (BCA) and continue to improve my development skills.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "My interests",
    description:
      "I enjoy frontend development, clean UI design, responsive layouts and learning new technologies.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "My goal",
    description:
      "I aim to grow as a frontend developer by building useful projects and writing better code.",
    icon: Target,
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <span className="about-label">A LITTLE ABOUT ME</span>

        <h1>
          Building for the web.
          <br />
          <span>Growing with every project.</span>
        </h1>

        <p>
          I'm Nidhi Mangroliya, a BCA graduate and aspiring
          frontend developer passionate about creating clean,
          responsive and user-friendly web experiences.
        </p>

        <div className="about-hero-actions">
          <Link to="/projects" className="about-link">
            Explore my work <ArrowUpRight size={17} />
          </Link>

          <Link to="/contact" className="about-secondary-link">
            Let's connect
          </Link>
        </div>

        <span className="about-index">01 / ABOUT</span>
        <span className="about-hero-decoration" aria-hidden="true">
          N.
        </span>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div className="about-section-heading">
          <span className="about-label">WHO I AM</span>
          <h2>
            Curious mind.
            <br />
            <span>Creative developer.</span>
          </h2>
        </div>

        <div className="about-intro-content">
          <p>
            I enjoy turning ideas into simple, attractive and
            easy-to-use web experiences. My focus is on building
            interfaces that look good and work smoothly across
            different screen sizes.
          </p>

          <p>
            I am continuously improving my frontend skills through
            practice and personal projects. Each project helps me
            understand development better and become more confident
            in solving problems.
          </p>
        </div>
      </section>

      {/* ABOUT DETAILS */}
      <section className="about-highlights">
        <div className="about-section-heading">
          <span className="about-label">A QUICK OVERVIEW</span>
          <h2>
            A little more
            <br />
            <span>about my work.</span>
          </h2>
        </div>

        <div className="about-details">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="about-detail" key={item.number}>
                <span className="detail-number">{item.number}</span>

                <div className="about-detail-icon">
                  <Icon size={21} />
                </div>

                <div className="about-detail-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <ArrowUpRight
                  className="about-detail-arrow"
                  size={17}
                />
              </article>
            );
          })}
        </div>
      </section>

     

      {/* JOURNEY */}
      <section className="about-journey">
        <div className="about-journey-icon">
          <BriefcaseBusiness size={25} />
        </div>

        <div className="about-journey-content">
          <span className="about-label">MY JOURNEY</span>
          <h2>
            Learning by doing.
            <br />
            <span>Improving every day.</span>
          </h2>

          <p>
            My journey combines my computer applications education
            with practical frontend development. Through projects
            like my Movies App and other web interfaces, I keep
            practising React, improving my UI skills and exploring
            better ways to build websites.
          </p>

          <Link to="/projects" className="about-link">
            See my projects <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* APPROACH */}
      <section className="about-bottom">
        <span className="about-label">MY APPROACH</span>

        <h2>
          Stay curious.
          <br />
          <span>Keep building.</span>
        </h2>

        <p>
          Every project is an opportunity to learn, solve problems
          and become a better developer. I believe in steady
          improvement, thoughtful design and writing code that
          is easy to understand and maintain.
        </p>
      </section>

      {/* CONTACT CTA */}
      <section className="about-contact">
        <div>
          <span className="about-label">HAVE A PROJECT IN MIND?</span>
          <h2>
            Let's create
            <br />
            <span>something meaningful.</span>
          </h2>
          <p>
            I'm excited to keep learning, collaborate and explore
            frontend development opportunities.
          </p>
        </div>

        <Link to="/contact" className="about-contact-button">
          Let's talk <ArrowUpRight size={18} />
        </Link>
      </section>
    </main>
  );
}