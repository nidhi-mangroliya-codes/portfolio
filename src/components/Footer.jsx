
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              NM<span>.</span>
            </Link>

            <h2>
              Building ideas.
              <br />
              <span>Creating experiences.</span>
            </h2>

            <p>
              I'm Nidhi, an aspiring React Developer
              passionate about creating modern web experiences.
            </p>

            <Link to="/contact" className="footer-cta">
              Let's work together
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="footer-navigation">
            <div className="footer-column">
              <h3>EXPLORE</h3>
              <Link to="/">Home</Link>
              <Link to="/about">About me</Link>
              <Link to="/projects">My projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <h3>CONNECT</h3>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={14} />
              </a>

              <Link to="/contact">
                Email me <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nidhi Mangroliya</p>

          <p className="footer-made">
            Designed with care <span>♥</span> Built with React
          </p>

          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
