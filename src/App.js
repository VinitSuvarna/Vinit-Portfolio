// src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";

// ---------------------------
// PROJECTS DATA
// ---------------------------
const projects = [
  {
    title: "Rental Marketplace",
    slug: "rental-marketplace",
    tech: "Django, Python, HTML, CSS, JavaScript, SQLite",
    techStack: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
    description:
      "A rental marketplace platform to list, search, and manage rental items with user authentication and booking workflow.",
    overview:
      "A full-stack rental marketplace where users can list items, browse rentals, and manage bookings with role-based access. Built with a modular Django architecture for scalability.",
    buildSteps: [
      "Set up a Django project with separate apps for core, items, rentals, and users.",
      "Designed models for User, Item, and Rental with clear relationships.",
      "Implemented authentication and role-based permissions (owner, renter).",
      "Built listing, detail, and booking views with templates and forms.",
      "Configured dashboards for users to track their rentals and listings."
    ],
    challenges: [
      "Structuring separate apps while keeping shared logic clean.",
      "Designing a booking flow that avoids double-booking conflicts.",
      "Handling authentication and permissions cleanly in views."
    ],
    learnings: [
      "Deeper understanding of Django app structure and reusable components.",
      "Practical experience with relational modeling and booking workflows.",
      "Improved debugging and deployment skills for Django apps."
    ],
    demoLink: "https://rental-marketplace.onrender.com/",
    codeLink: "https://github.com/VinitSuvarna/Rental-Marketplace"
  },
  {
    title: "AI Chatbot Assistant",
    slug: "ai-chatbot-assistant",
    tech: "Streamlit, Python, Pandas, Gemini API, PDF/Text Processing",
    techStack: [
      "Streamlit",
      "Python",
      "Pandas",
      "Gemini API",
      "CSV/PDF/TXT Parsing"
    ],
    description:
      "AI-powered chatbot analyzing CSV, PDF, and TXT files to generate root-cause insights using Gemini AI.",
    overview:
      "An AI assistant that accepts CSV, PDF, and TXT files, analyzes them, and answers questions using Gemini. Focused on root-cause analysis and actionable insights for datasets.",
    buildSteps: [
      "Created a Streamlit UI with file upload and chat-style interface.",
      "Wrote data loaders for CSV, TXT, and PDF files.",
      "Pre-processed data using Pandas for clean analysis.",
      "Integrated Gemini API for context-aware question answering.",
      "Wrapped everything into a conversational workflow inside Streamlit.",
      "Deployed using Streamlit Cloud for easy sharing."
    ],
    challenges: [
      "Handling different file formats reliably (CSV vs PDF vs TXT).",
      "Maintaining context between multiple user questions.",
      "Balancing performance with detailed responses on large datasets."
    ],
    learnings: [
      "Hands-on integration of LLM APIs into real data workflows.",
      "Experience designing chat UX for data analysis.",
      "Better understanding of prompt design and context management."
    ],
    demoLink:
      "https://ai-chatbot-j8uhhcqh9h8whbpfqvltvm.streamlit.app/",
    codeLink: "https://github.com/VinitSuvarna/AI-Chatbot"
  },
  {
    title: "BVOC Course Website",
    slug: "bvoc-course-website",
    tech: "HTML, CSS, JavaScript",
    techStack: ["HTML", "CSS", "JavaScript"],
    description:
      "A dedicated course website for the B.Voc program with multiple pages for courses, admissions, faculty, events, and more.",
    overview:
      "A responsive static website built for the B.Voc program, covering course details, growth & career paths, online application form, and multimedia sections.",
    buildSteps: [
      "Designed the overall information architecture for different B.Voc pages (courses, admissions, alumni, events, faculty, etc.).",
      "Implemented responsive layouts using HTML and CSS for desktop and mobile.",
      "Added JavaScript for navigation interactions and page-specific behaviors.",
      "Optimized images and content for better loading and readability."
    ],
    challenges: [
      "Keeping the design consistent across many separate HTML pages.",
      "Managing navigation and links between multiple course and info sections.",
      "Ensuring the layout works well on different screen sizes."
    ],
    learnings: [
      "Stronger understanding of multi-page site structure.",
      "Improved skills in clean, organized HTML/CSS.",
      "Experience building an academic / institutional site layout."
    ],
    demoLink: "https://VinitSuvarna.github.io/BVOC-Website/",
    codeLink: "https://github.com/VinitSuvarna/BVOC-Website"
  },
  {
    title: "Food App",
    slug: "food-app",
    tech: "Django, Python, Bootstrap, JavaScript, SQLite, PayPal API",
    techStack: [
      "Django",
      "Python",
      "Bootstrap",
      "JavaScript",
      "SQLite",
      "PayPal API"
    ],
    description:
      "Multi-vendor food ordering app with restaurants, customers, and admin roles.",
    overview:
      "A multi-role food ordering platform where restaurants can manage menus, customers can place orders, and admins can oversee the entire system including payments.",
    buildSteps: [
      "Modeled Restaurants, Menu Items, Orders, and Users in Django.",
      "Implemented restaurant dashboards to manage menus and orders.",
      "Built customer-facing flows for browsing menus and placing orders.",
      "Integrated PayPal for secure payment processing.",
      "Created admin views to monitor orders and user activity."
    ],
    challenges: [
      "Coordinating multiple user roles with different permissions.",
      "Handling order states (pending, accepted, delivered, cancelled).",
      "Integrating and testing payment flows with PayPal."
    ],
    learnings: [
      "Understanding of multi-role systems in real-world apps.",
      "Experience with payment gateway integration.",
      "Better design for order and status management."
    ],
    demoLink: "",
    codeLink: ""
  },
  {
    title: "Travel Companion App",
    slug: "travel-companion",
    tech: "React.js, Django REST Framework, Python, JWT, Axios",
    techStack: ["React", "Django REST Framework", "JWT", "Axios"],
    description:
      "A travel planning app that helps users manage trips, budgets, and itineraries.",
    overview:
      "A full-stack travel planner with a React frontend and Django REST backend. Users can manage destinations, budgets, and daily itineraries securely.",
    buildSteps: [
      "Designed REST APIs with Django REST Framework for trips and itineraries.",
      "Implemented JWT-based authentication for secure sessions.",
      "Built a React UI with views for trips, budget, and itinerary management.",
      "Used Axios to connect frontend with backend APIs.",
      "Added basic filtering and search for destinations."
    ],
    challenges: [
      "Designing clean API endpoints for nested itinerary data.",
      "Handling authentication and token refresh on the frontend.",
      "Keeping UI responsive and easy to use for multiple trips."
    ],
    learnings: [
      "Practical experience building a React + DRF stack.",
      "Improved understanding of JWT-based auth flows.",
      "Better frontend state management for API-heavy apps."
    ],
    demoLink: "",
    codeLink: ""
  },
  {
    title: "COVID-19 Data Dashboard",
    slug: "covid-dashboard",
    tech: "Tableau, Excel, Data Cleaning, Data Analysis",
    techStack: ["Tableau", "Excel", "Data Cleaning", "Data Visualization"],
    description:
      "Interactive dashboard showing global COVID-19 impacts with charts and KPIs.",
    overview:
      "An interactive Tableau dashboard analyzing COVID-19 data across countries with KPIs, time-series trends, and geo-visualizations.",
    buildSteps: [
      "Collected and cleaned COVID-19 case/death data using Excel.",
      "Prepared data for analysis (handling missing values, types, etc.).",
      "Designed KPIs such as mortality rate and recovery rate.",
      "Built interactive charts and maps in Tableau.",
      "Published the dashboard and tested different interaction flows."
    ],
    challenges: [
      "Dealing with noisy and incomplete real-world data.",
      "Designing a dashboard that is informative but not overwhelming.",
      "Balancing performance with complex visualizations."
    ],
    learnings: [
      "Improved data cleaning and wrangling skills.",
      "Experience designing analytical dashboards.",
      "Better understanding of storytelling with data."
    ],
    demoLink: "",
    codeLink: ""
  }
];

// ---------------------------
// SKILLS & CERTIFICATIONS
// ---------------------------

const skillGroups = [
  {
    category: "Languages & Core",
    items: ["Python", "JavaScript", "C", "SQL (Beginner)", "HTML / CSS"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Django", "REST API", "Streamlit"]
  },
  {
    category: "Data & Analytics",
    items: ["Tableau", "Power-BI", "Excel", "Pandas", "Matplotlib"]
  },
  {
    category: "Tools & Platforms",
    items: ["GitHub", "VS Code", "MongoDB"]
  }
];

const certifications = [
  {
    title: "Microsoft Excel 2019 Associate",
    issuer: "Microsoft"
  },
  {
    title: "NVIDIA Fundamentals of Deep Learning",
    issuer: "NVIDIA"
  },
  {
    title: "NVIDIA Natural Language Processing (NLP)",
    issuer: "NVIDIA"
  },
  {
    title: "NASSCOM Web Development (Awaiting Certificate)",
    issuer: "NASSCOM / FutureSkills Prime"
  }
];

// ---------------------------
// MODAL COMPONENT
// ---------------------------
function ProjectDetailsModal({ project, onClose }) {
  if (!project) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("project-modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="project-modal-overlay"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="project-modal">
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ✕
        </button>

        <h3 className="project-modal-title">{project.title}</h3>
        <p className="project-modal-tech">{project.tech}</p>

        <div className="project-modal-section">
          <h4>Overview</h4>
          <p>{project.overview}</p>
        </div>

        <div className="project-modal-columns">
          <div className="project-modal-section">
            <h4>Tech Stack</h4>
            <ul>
              {project.techStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project-modal-section">
            <h4>How I Built It</h4>
            <ul>
              {project.buildSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.challenges && project.challenges.length > 0 && (
          <div className="project-modal-section">
            <h4>Challenges &amp; Learnings</h4>
            <ul>
              {project.challenges.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-modal-actions">
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
      </div>
    </div>
  );
}

// ---------------------------
// APP COMPONENT
// ---------------------------
function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("top");
  const [showIntro, setShowIntro] = useState(true);

  const resumeUrl = `${process.env.PUBLIC_URL}/VINIT-SUVARNA-CV.pdf`;

  // Intro auto hide
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Focus cursor (desktop only)
  useEffect(() => {
    if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches) {
      return;
    }
    const cursor = document.querySelector(".focus-cursor");
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Scroll progress + active section
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop =
        window.pageYOffset || doc.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);

      const sectionIds = [
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "certifications",
        "contact"
      ];
      let current = "top";
      const viewportMiddle = scrollTop + window.innerHeight / 2;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + scrollTop;
          const elBottom = elTop + rect.height;
          if (viewportMiddle >= elTop && viewportMiddle <= elBottom) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESC to close modal / mobile nav
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setIsMobileNavOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleNavClick = (hash) => (e) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileNavOpen(false);
  };

  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
    setIsMobileNavOpen(false);
  };

  // Magnetic hover for project cards (desktop)
  const handleProjectMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = ((x - centerX) / centerX) * 10;
    const moveY = ((y - centerY) / centerY) * 10;

    card.style.setProperty("--magnet-x", `${moveX}px`);
    card.style.setProperty("--magnet-y", `${moveY}px`);
  };

  const handleProjectMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--magnet-x", `0px`);
    card.style.setProperty("--magnet-y", `0px`);
  };

  return (
    <div className="app">
      {/* Intro overlay */}
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-inner">
            <div className="intro-ring" />
            <h1 className="intro-main-text" data-text="VINIT SUVARNA">
              VINIT SUVARNA
            </h1>
            <p className="intro-subtext">
              Portfolio · Full-Stack Developer · AI &amp; Data Analytics
            </p>
            <div className="intro-tags">
              <span>React &amp; Django</span>
              <span>AI Chatbots</span>
              <span>Data Dashboards</span>
            </div>
          </div>
        </div>
      )}

      {/* Cursor */}
      <div className="focus-cursor" />

      {/* Background blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">VINIT.S</div>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          <a
            href="#about"
            onClick={handleNavClick("#about")}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={handleNavClick("#skills")}
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={handleNavClick("#projects")}
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={handleNavClick("#experience")}
            className={activeSection === "experience" ? "active" : ""}
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={handleNavClick("#education")}
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </a>
          <a
            href="#certifications"
            onClick={handleNavClick("#certifications")}
            className={activeSection === "certifications" ? "active" : ""}
          >
            Certifications
          </a>
          <a href={resumeUrl} onClick={handleResumeClick}>
            Resume
          </a>
          <a
            href="#contact"
            onClick={handleNavClick("#contact")}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`menu-toggle ${isMobileNavOpen ? "open" : ""}`}
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile side nav */}
      {isMobileNavOpen && (
        <div
          className="mobile-nav-overlay"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <aside
            className="mobile-nav"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mobile-nav-title">Navigate</p>
            <div className="mobile-nav-links">
              <a href="#about" onClick={handleNavClick("#about")}>
                About
              </a>
              <a href="#skills" onClick={handleNavClick("#skills")}>
                Skills
              </a>
              <a href="#projects" onClick={handleNavClick("#projects")}>
                Projects
              </a>
              <a href="#experience" onClick={handleNavClick("#experience")}>
                Experience
              </a>
              <a href="#education" onClick={handleNavClick("#education")}>
                Education
              </a>
              <a
                href="#certifications"
                onClick={handleNavClick("#certifications")}
              >
                Certifications
              </a>
              <a href={resumeUrl} onClick={handleResumeClick}>
                Resume
              </a>
              <a href="#contact" onClick={handleNavClick("#contact")}>
                Contact
              </a>
            </div>
          </aside>
        </div>
      )}

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-layout">
          <div className="hero-main">
            <p className="hero-pill">Full-Stack · AI · Data Analytics</p>
            <h1 className="section-heading">
              Hi, I&apos;m <span className="accent">Vinit Suvarna</span>
            </h1>
            <h2 className="hero-sub">
              Full-Stack Developer &amp; AI Data Analyst
            </h2>
            <p className="hero-text">
              I build full-stack and AI-powered applications using React,
              Django, Python, Streamlit, and modern data analytics tools.
            </p>
            <p className="hero-availability">
              Actively seeking internship and entry-level roles in Full-Stack
              Development, Backend Development, and Data Analytics.
            </p>
            <div className="hero-actions">
              <button
                className="btn primary-btn"
                onClick={handleNavClick("#projects")}
              >
                View Projects
              </button>

              <a
                href={resumeUrl}
                className="btn ghost-btn"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-stats-card">
              <p className="hero-tag">
                <span className="hero-dot" />
                Turning ideas into shipped products
              </p>
              <div className="hero-stats-grid">
                <div className="hero-stat">
                  <span>4+</span>
                  <small>Full-stack &amp; AI projects</small>
                </div>
                <div className="hero-stat">
                  <span>Data</span>
                  <small>Analytics &amp; dashboards</small>
                </div>
                <div className="hero-stat">
                  <span>Ready</span>
                  <small>For internships &amp; roles</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-header">
          <h3 className="section-title">About Me</h3>
          <p>Who I am and what I focus on</p>
        </div>

        <div className="card about-card about-layout">
          <div className="about-text">
            <p>
              I am a B.Voc Data Analytics student specializing in web development
              and AI-based applications. I build real-world projects using
              Django, React, Python, and data analytics tools.
            </p>
            <p>
              With a strong foundation from my B.Voc program, I&apos;ve built a
              portfolio of full-stack and AI-powered applications using
              technologies like React, Django, and Python. I&apos;m actively
              deepening my expertise in Data Analytics and Web Development,
              focusing on creating data-driven solutions and improving
              problem-solving and collaboration through continuous project work.
            </p>
            <p className="about-availability">
              I&apos;m now looking for an internship or entry-level role where I
              can apply my development skills to contribute to impactful
              projects, grow with a team, and gain hands-on industry experience
              in an innovative environment.
            </p>
          </div>

          <div className="about-avatar-wrapper">
            <div className="about-avatar-circle">
              <span>VS</span>
            </div>
            <p className="about-avatar-caption">
              Avatar placeholder – will be replaced with a profile photo soon.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-header">
          <h3 className="section-title">Skills</h3>
          <p>Technologies I work with</p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <h4 className="skill-group-title">{group.category}</h4>
              <div className="skills-grid">
                {group.items.map((skill) => (
                  <div key={skill} className="skill-pill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-header">
          <h3 className="section-title">Projects</h3>
          <p>Selected work showcasing my capabilities</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const shapeClass = `shape-${(index % 4) + 1}`;
            const initial = project.title.charAt(0).toUpperCase();
            return (
              <article
                key={project.slug}
                className={`project-card ${shapeClass} project-animated`}
                style={{ animationDelay: `${index * 0.07 + 0.05}s` }}
                onMouseMove={handleProjectMouseMove}
                onMouseLeave={handleProjectMouseLeave}
              >
                <div className="project-card-inner">
                  <div className="project-header">
                    <div className="project-icon">{initial}</div>
                    <span className="project-label">Project</span>
                  </div>

                  <h4>{project.title}</h4>
                  <p className="project-tech">{project.tech}</p>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <ul className="project-highlights">
                    {project.buildSteps.slice(0, 3).map((item, idx) => (
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
                    <button
                      className="btn subtle-btn"
                      type="button"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details
                    </button>
                  </div>
                </div>
                <div className="project-shine" />
              </article>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-header">
          <h3 className="section-title">Experience</h3>
          <p>Industry exposure &amp; roles</p>
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
              <ul className="timeline-bullets">
                <li>
                  Exploring AI and data-driven approaches to solve fintech
                  problems.
                </li>
                <li>
                  Contributing to experiments, analysis, and internal tools
                  under mentorship.
                </li>
                <li>
                  Strengthening my practical understanding of analytics,
                  automation, and product thinking.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-header">
          <h3 className="section-title">Education</h3>
          <p>My academic background</p>
        </div>

        <div className="card fade-in">
          <h4>B.Voc – Data Analytics</h4>
          <p className="timeline-company">
            Thakur College of Engineering &amp; Technology
          </p>
          <p className="timeline-period">Ongoing · CGPA: 7.72</p>
          <p>
            Specializing in web development, data analytics, AI, and
            project-based learning.
          </p>
          <hr className="card-divider" />
          <p>SSC: 79.4%</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" id="certifications">
        <div className="section-header">
          <h3 className="section-title">Certifications</h3>
          <p>Verified skills &amp; continuous learning</p>
        </div>

        <div className="certs-grid fade-in">
          {certifications.map((cert) => (
            <article key={cert.title} className="cert-card">
              <span className="cert-pill" />
              <div>
                <p className="cert-title">{cert.title}</p>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="section-header">
          <h3 className="section-title">Contact</h3>
          <p>Let&apos;s build something together</p>
        </div>

        <div className="card contact-card">
          <p className="contact-intro">
            I am open to internships, full-time roles, and collaborative
            full-stack + AI projects. Based in Mumbai, India, and happy to work
            on remote or on-site opportunities.
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
              <h5>GitHub</h5>
              <a
                href="https://github.com/VinitSuvarna"
                target="_blank"
                rel="noreferrer"
              >
                github.com/VinitSuvarna
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

      {/* PROJECT DETAILS MODAL */}
      <ProjectDetailsModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
