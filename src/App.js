// src/App.js
import React, { useEffect } from "react";
import "./App.css";

const projects = [
  {
    title: "Food App",
    tech: "Django, Python, HTML, CSS, Bootstrap, JavaScript, SQLite, PayPal API",
    description:
      "Multi-vendor food ordering platform for restaurants, customers, and admins with secure online payments.",
    highlights: [
      "Role-based authentication for Admin, Restaurant, and Customer using Django ORM.",
      "Cart and checkout integrated with PayPal for real-time transactions.",
      "Admin dashboard to manage restaurants, menus, and orders efficiently."
    ]
  },
  {
    title: "Travel Companion App",
    tech: "React.js, Django REST Framework, Python, Axios, JWT, HTML, CSS, JavaScript",
    description:
      "Full-stack travel planning web app to help users plan budget-friendly trips and manage itineraries.",
    highlights: [
      "RESTful APIs with DRF for destinations, user profiles, and saved trips.",
      "JWT-based authentication for secure communication between frontend and backend.",
      "Search, filter, and sort experiences with a responsive, dynamic UI."
    ]
  },
  {
    title: "Data Insights Bot",
    tech: "Streamlit, Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, NLP",
    description:
      "AI-powered chatbot interface to analyze and visualize uploaded CSV datasets via natural language queries.",
    highlights: [
      "Interactive Streamlit interface for instant EDA on uploaded CSV files.",
      "Automated charts including bar plots, histograms, and correlation heatmaps.",
      "Natural language queries like “show top 5 highest sales regions”."
    ]
  },
  {
    title: "COVID-19 Data Visualization Dashboard",
    tech: "Tableau, Excel, Data Cleaning, Data Analysis",
    description:
      "Interactive dashboard to explore and analyze the global impact of COVID-19 using real-world datasets.",
    highlights: [
      "Cleaned and transformed global COVID datasets for analysis.",
      "Time-series graphs, heatmaps, and geo-visualizations for trend monitoring.",
      "KPIs like mortality rate, recovery rate, and case fatality ratio."
    ]
  }
];

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

function App() {
  // Neon cursor follow effect
  useEffect(() => {
    const cursor = document.querySelector(".neon-cursor");
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="app">
      {/* Neon cursor follower */}
      <div className="neon-cursor"></div>

      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="hero" id="top">
        <div className="hero-content">
          <p className="hero-pill">Full-Stack · AI · Data Analytics</p>
          <h1>
            Hi, I'm <span className="accent">Vinit Suvarna</span>
          </h1>
          <h2>Full-Stack Web Developer & AI-Driven Data Analyst</h2>
          <p className="hero-text">
            I build full-stack and AI-powered applications using React, Django,
            Python, and data analytics. I love turning real-world problems into
            scalable, data-driven solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>
            <a
              href="/VINIT-SUVARNA-CV.pdf"
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

      {/* About Section */}
      <section className="section" id="about">
        <div className="section-header">
          <h3>About Me</h3>
          <p>Who I am and what I do</p>
        </div>
        <div className="card about-card fade-in">
          <p>
            I am a B.Voc Data Analytics student specializing in Web Development,
            with hands-on experience building full-stack and AI-powered
            applications using React, Django, Python, and data visualization
            tools. I focus on creating practical, data-driven solutions and
            continuously sharpen my problem-solving and collaboration skills
            through real-world projects.
          </p>
          <p>
            Currently, I am preparing to join the industry as a developer and
            data professional, with strong foundations in backend APIs, frontend
            development, data analytics, and AI integrations.
          </p>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
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
            </article>
          ))}
        </div>
      </section>

      {/* Experience Section */}
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
                Joining as a Research Intern to contribute to data-driven
                insights, research, and fintech solutions, leveraging my skills
                in Python, analytics, and full-stack development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
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
            Specialization in AI, Data Analytics, and Web Development with a
            focus on real-world, project-based learning.
          </p>
          <hr className="card-divider" />
          <p>SSC: 79.4%</p>
        </div>
      </section>

      {/* Resume Section */}
      <section className="section" id="resume">
        <div className="section-header">
          <h3>Resume</h3>
          <p>View or download my latest resume</p>
        </div>
        <div className="card fade-in">
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              flexWrap: "wrap"
            }}
          >
            <a
              href="/VINIT-SUVARNA-CV.pdf"
              className="btn primary-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Fullscreen
            </a>
            <a
              href="/VINIT-SUVARNA-CV.pdf"
              className="btn ghost-btn"
              download
            >
              Download Resume
            </a>
          </div>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(148,163,184,0.35)"
            }}
          >
            <iframe
              title="Vinit Suvarna Resume"
              src="/VINIT-SUVARNA-CV.pdf"
              style={{ width: "100%", height: "600px", border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="section-header">
          <h3>Contact</h3>
          <p>Let’s build something together</p>
        </div>
        <div className="card contact-card fade-in">
          <p>
            I am open to internships, entry-level roles, and collaborative
            projects in full-stack development, data analytics, and AI-powered
            applications.
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

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Vinit Suvarna · Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
