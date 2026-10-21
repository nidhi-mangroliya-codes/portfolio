
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Job opportunity",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((previousForm) => ({
      ...previousForm,
      [e.target.name]: e.target.value,
    }));
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("Sending your message...");

    try {
      await emailjs.send(
        "service_097vvsz",
        "template_7mu530p",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          title: form.subject,
        },
        {
          publicKey: "zFFX9CKnRiiHYQgEy",
        }
      );

      setStatus("Message sent successfully! Thank you for contacting me.");

      setForm({
        name: "",
        email: "",
        subject: "Job opportunity",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus(
        "Message could not be sent. Please check your setup and try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="pro-contact" id="top">
      <div className="pro-contact-inner">
        <div className="pro-contact-overline">
          <span>CONTACT / 04</span>
          <span>LET'S MAKE AN IMPACT</span>
        </div>

        <header className="pro-contact-header">
          <div>
            <p className="pro-contact-label">THE NEXT STEP STARTS HERE</p>
            <h1>
              Have something
              <br />
              <span>in mind?</span>
            </h1>
          </div>

          <p className="pro-contact-intro">
            New opportunities, interesting ideas, or just a hello.
            I'm always happy to connect with people who love
            building great things.
          </p>
        </header>

        <section className="pro-contact-layout">
          <aside className="pro-contact-panel">
            <div className="pro-panel-top">
              <span className="pro-panel-mark">n.</span>
              <span className="pro-panel-status">
                <span className="pro-status-dot"></span>
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            <div className="pro-panel-main">
              <p className="pro-panel-label">LET'S CONNECT</p>
              <h2>
                Good work
                <br />
                begins with
                <br />
                <span>a conversation.</span>
              </h2>
              <p className="pro-panel-description">
                I'm Nidhi Mangroliya, a BCA graduate focused on
                frontend development and building with React.
                Let's connect about opportunities and ideas.
              </p>
            </div>

            <div className="pro-panel-links">
              <a
                href="https://github.com/nidhimangroliya10-png"
                target="_blank"
                rel="noreferrer"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>

              <a href="mailto:nidhimangroliya10@gmail.com">
                <span>Email</span>
                <span>↗</span>
              </a>
            </div>

            <div className="pro-panel-bottom">
              <span>BASED IN GUJARAT, INDIA</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </aside>

          <section className="pro-form-section">
            <div className="pro-form-header">
              <span className="pro-form-step">01 — YOUR MESSAGE</span>
              <h2>Let's talk.</h2>
              <p>Share a little about what brings you here.</p>
            </div>

            <form className="pro-contact-form" onSubmit={handleSubmit}>
              <div className="pro-field">
                <label htmlFor="pro-name">YOUR NAME</label>
                <input
                  id="pro-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="pro-field">
                <label htmlFor="pro-email">EMAIL ADDRESS</label>
                <input
                  id="pro-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="pro-field">
                <label htmlFor="pro-subject">WHAT IS THIS ABOUT?</label>
                <select
                  id="pro-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>Job opportunity</option>
                  <option>Project collaboration</option>
                  <option>Freelance enquiry</option>
                  <option>Just saying hello</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="pro-field">
                <label htmlFor="pro-message">YOUR MESSAGE</label>
                <textarea
                  id="pro-message"
                  name="message"
                  rows="4"
                  placeholder="Tell me a little about your idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="pro-submit"
                type="submit"
                disabled={sending}
              >
                <span>{sending ? "Sending..." : "Send an enquiry"}</span>
                <span className="pro-submit-arrow">
                  {sending ? "…" : "↗"}
                </span>
              </button>

              {status && (
                <p className="pro-form-status" role="status">
                  {status}
                </p>
              )}

              <p className="pro-form-note">
                Your message will be sent directly to my inbox.
              </p>
            </form>
          </section>
        </section>

        <footer className="pro-contact-footer">
          <a href="/" className="pro-footer-logo">
            nidhi<span>.</span>
          </a>
          <p>Building skills. Creating possibilities.</p>
          <a href="#top" className="pro-footer-top">
            BACK TO TOP ↑
          </a>
        </footer>
      </div>
    </main>
  );
}
