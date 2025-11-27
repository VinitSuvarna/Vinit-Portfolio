// src/App.js
import React, { useEffect } from "react";
import "./App.css";

// ---------------------------
// PROJECTS SECTION DATA
// ---------------------------
const projects = [
  {
    title: "Rental Marketplace",
    tech: "Django, Python, HTML, CSS, JavaScript, SQLite",
    description:
      "A rental marketplace platform to list, search, and manage rental items with user authentication and booking workflow.",
    highlights: [
      "Clean architecture with separate apps for core, items, rentals, and users.",
      "User authentication and role-based access.",
      "Item listing, rental booking flow, and dashboard pages."
    ],
    demoLink: "https://rental-marketplace.onrender.com/",
    codeLink: "https://github.com/VinitSuvarna/Rental-Marketplace"
  },

  {
    title: "AI Chatbot Assistant",
    tech: "Streamlit, Python, Pandas, Gemini API, PDF/Text Processing",
    description:
      "AI-powered chatbot analyzing CSV, PDF, and TXT files to generate root-cause insights using Gemini AI.",
    highlights: [
      "Loads and analyzes real datasets (CSV, TXT, PDF).",
      "Uses Gemini AI for context-aware answers.",
      "Clean Streamlit UI with chat interface.",
      "Fully deployed using Streamlit Cloud."
    ],
    demoLink: "https://ai-chatbot-j8uhhcqh9h8whbpfqvltvm.streamlit.app/",
    codeLink: "https://github.com/VinitSuvarna/AI-Chatbot"
  },

  {
    title: "Food App",
    tech: "Django, Python, Bootstrap, JavaScript, SQLite, PayPal API",
    description:
      "Multi-vendor food ordering app with restaurants, customers, and admin roles.",
    highlights: [
      "Role-based authentication.",
      "PayPal-integrated checkout system.",
      "Admin dashboard for orders and menus."
    ],
    demoLink: "",
    codeLink: ""
  },

  {
    title: "Travel Companion App",
    tech: "React.js, Django REST Framework, Python, JWT, Axios",
    description:
      "A travel planning app that helps users manage trips, budgets, and itineraries.",
    highlights: [
      "REST APIs for destinations and itineraries.",
      "JWT authentication for secure sessions.",
      "Responsive UI with search and filtering."
    ],
    demoLink: "",
    codeLink: ""
  },

  {
    title: "COVID-19 Data Dashboard",
    tech: "Tableau, Excel, Data Cleaning, Data Analysis",
    description:
      "Interactive dashboard showing global COVID-19 impacts with charts and KPIs.",
    highlights: [
      "Time-series analysis and geo-visualizations.",
      "Mortality rate, recovery rate KPIs.",
      "Trend comparison across countries."
    ],
    demoLink: "",
    codeLink: ""
  }
];

// ---------------------------
// SKILLS
// ---------------------------
const skills = [
  "JavaScript",
  "React",
  "HTML / CSS",
  "Python",
  "Django",
  "REST API",
  "Streamlit",
  "Tableau",
  "MongoDB",
  "Data Visualization",
  "SQL (Beginner)",
  "GitHub",
  "VS Code",
  "Excel"
];

// ---------------------------
// APP COMPONENT
// ---------------------------
function App() {
  // Neon cursor animation (only on devices with mouse / trackpad)
  useEffect(() => {
    if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
      return; // Skip on touch devices
    }

    const cursor = document.querySelector(".neon-cursor");
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="app">
      {/* Neon Cursor */}
      <div className="neon-cursor"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">VINIT.S</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-content">
          <p className="hero-pill">Full-Stack · AI · Data Analytics</p>

          <h1>
            Hi, I'm <span className="accent">Vinit Suvarna</span>
          </h1>

          <h2>Full-Stack Developer & AI Data Analyst</h2>

          <p className="hero-text">
            I build full-stack and AI-powered applications using React, Django,
            Python, Streamlit, and analytical tools.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href={`${process.env.PUBLIC_URL}/VINIT-SUVARNA-CV.pdf`}
              className="btn ghost-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-header">
          <h3>About Me</h3>
          <p>Who I am and what I do</p>
        </div>

        <div className="card about-card fade-in">
          <p>
            I am a B.Voc Data Analytics student specializing in web development
            and AI-based applications. I build real-world projects using Django,
            React, Python, and data analytics tools.
          </p>

          <p>
            Passionate about scaling practical solutions, improving user
            experience, and applying AI for automation and insights.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-header">
          <h3>Skills</h3>
          <p>Technologies I work with</p>
        </div>

        <div className="skills-grid fade-in">
          {skills.map((skill) => (
            <div key={skill} className="skill-pill">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-header">
          <h3>Projects</h3>
          <p>Selected work showcasing my capabilities</p>
        </div>

        <div className="projects-grid fade-in">
          {projects.map((project) => (
            <article key={project.title} className="project-card hover-lift">
              <h4>{project.title}</h4>

              <p className="project-tech">{project.tech}</p>

              <p className="project-description">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="btn primary-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}

                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="btn ghost-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-header">
          <h3>Experience</h3>
          <p>Industry exposure & roles</p>
        </div>

        <div className="timeline fade-in">
          <div className="timeline-item">
            <div className="timeline-dot" />

            <div className="timeline-content card">
              <h4>Research Intern (Incoming)</h4>
              <p className="timeline-company">
                Trexo Fintech Private Limited · Mumbai
              </p>
              <p className="timeline-period">Dec 2025 – Present</p>

              <p>
                Joining as a Research Intern focusing on AI-driven analytics,
                insights, and fintech solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-header">
          <h3>Education</h3>
          <p>My academic background</p>
        </div>

        <div className="card fade-in">
          <h4>B.Voc – Data Analytics</h4>

          <p className="timeline-company">
            Thakur College of Engineering & Technology
          </p>

          <p className="timeline-period">Ongoing · CGPA: 7.72</p>

          <p>
            Focused on web development, data analytics, AI, and real-world
            projects.
          </p>

          <hr className="card-divider" />

          <p>SSC: 79.4%</p>
        </div>
      </section>

      {/* RESUME SECTION */}
      <section className="section" id="resume">
        <div className="section-header">
          <h3>Resume</h3>
          <p>View or download my latest resume</p>
        </div>

        <div className="card fade-in">
          <div className="resume-actions">
            <a
              href={`${process.env.PUBLIC_URL}/VINIT-SUVARNA-CV.pdf`}
              className="btn primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Fullscreen
            </a>

            <a
              href={`${process.env.PUBLIC_URL}/VINIT-SUVARNA-CV.pdf`}
              className="btn ghost-btn"
              download
            >
              Download Resume
            </a>
          </div>

          <div className="resume-frame-wrapper">
            <iframe
              title="Vinit Suvarna Resume"
              src={`${process.env.PUBLIC_URL}/VINIT-SUVARNA-CV.pdf`}
              className="resume-frame"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-header">
          <h3>Contact</h3>
          <p>Let’s build something together</p>
        </div>

        <div className="card contact-card fade-in">
          <p>
            I am open to internships, full-time roles, and collaborative
            full-stack + AI projects.
          </p>

          <div className="contact-grid">
            <div>
              <h5>Email</h5>
              <a href="mailto:vinitsuvarna182@gmail.com">
                vinitsuvarna182@gmail.com
              </a>
            </div>

            <div>
              <h5>Phone</h5>
              <a href="tel:+917710959897">+91 7710959897</a>
            </div>

            <div>
              <h5>LinkedIn</h5>
              <a
                href="https://www.linkedin.com/in/vinit-suvarna-562076349"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/vinit-suvarna-562076349
              </a>
            </div>

            <div>
              <h5>Location</h5>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Vinit Suvarna · Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
