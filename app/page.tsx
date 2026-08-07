"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* =====================================================================
   DATA
   ===================================================================== */
const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Education",href: "#education"},
  { label: "Projects", href: "#projects" },
  { label: "Experience",href:"#experience"},
  { label: "Certs",    href: "#certs"    },
  { label: "Contact",  href: "#contact"  },
];

const TYPED_WORDS = [
  "Full Stack Developer",
  "Gen AI Enthusiast",
  "Java Developer",
  "Python Developer",
  "BCA → MCA Student",
];

const SKILLS = [
  {
    icon: "🌐",
    title: "Web Development",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "REST APIs"],
  },
  {
    icon: "☕",
    title: "Java",
    tags: ["Core Java", "OOP", "Data Structures", "Collections", "JDBC"],
  },
  {
    icon: "🐍",
    title: "Python",
    tags: ["Python 3", "Scripting", "Data Analysis", "NumPy", "Pandas"],
  },
  {
    icon: "🤖",
    title: "Generative AI",
    tags: ["LLMs", "Prompt Engineering", "LangChain", "RAG", "Hugging Face", "OpenAI API"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["SQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    icon: "🛠️",
    title: "DevOps & Tools",
    tags: ["Git", "GitHub", "VS Code", "Linux", "Docker (basics)", "CI/CD"],
  },
];

const EDUCATION = [
  {
    degree: "MCA — Generative AI",
    institute: "SRM Institute of Science and Technology, Kattankulathur",
    year: "2024 – Present",
    badge: "Current",
    tags: ["Generative AI", "Machine Learning", "Deep Learning", "NLP"],
    desc: "Specializing in Generative AI technologies including LLMs, multimodal systems, and AI product development.",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    institute: "Amity University, Patna",
    year: "2021 – 2024",
    badge: "8.17 CGPA",
    tags: ["Web Development", "Java", "Python", "DBMS", "Data Structures"],
    desc: "Graduated with 8.17 CGPA. Core focus on web technologies, object-oriented programming, and database management.",
  },
];

const PROJECTS = [
  {
    icon: "💡",
    title: "AI Resume Analyzer",
    desc: "A Gen AI-powered web app that parses resumes and generates personalized career advice, skill gap analysis, and job match scores using LLMs and LangChain.",
    tags: ["Next.js", "LangChain", "OpenAI API", "Python", "MongoDB"],
    github: "https://github.com/amanver02",
    demo: null,
  },
  {
    icon: "🌐",
    title: "Portfolio CMS",
    desc: "A dynamic portfolio content management system built with Next.js and Firebase, featuring real-time updates, admin dashboard, and responsive design.",
    tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/amanver02",
    demo: null,
  },
  {
    icon: "🐍",
    title: "Python Data Dashboard",
    desc: "An interactive data visualization dashboard built with Python and Streamlit, performing EDA on real-world datasets with charts, filters, and insights.",
    tags: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/amanver02",
    demo: null,
  },
];

const EXPERIENCE = [
  {
    icon: "💻",
    role: "Web Development Intern",
    company: "XYZ Corp",
    type: "Internship",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Developed responsive UI components using React and Tailwind CSS",
      "Integrated REST APIs and optimized frontend performance",
      "Collaborated with cross-functional teams using Git workflow",
      "Participated in Agile sprints and daily standups",
    ],
  },
];

const CERTS = [
  {
    icon: "🤖",
    title: "Generative AI Fundamentals",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    icon: "🌐",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2023",
  },
  {
    icon: "☕",
    title: "Java Programming Masterclass",
    issuer: "Udemy",
    year: "2023",
  },
  {
    icon: "🐍",
    title: "Python for Data Science",
    issuer: "IBM / Coursera",
    year: "2024",
  },
];

/* =====================================================================
   TYPED EFFECT HOOK
   ===================================================================== */
function useTypedText(words: string[], typingSpeed = 70, deletingSpeed = 40, pause = 1600) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } else {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length + 1));
        }, typingSpeed);
      }
    } else {
      if (displayed === "") {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setDisplayed(currentWord.slice(0, displayed.length - 1));
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

/* =====================================================================
   SCROLL REVEAL HOOK
   ===================================================================== */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* =====================================================================
   SVG ICONS
   ===================================================================== */
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

/* =====================================================================
   MAIN COMPONENT
   ===================================================================== */
export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const typedText = useTypedText(TYPED_WORDS);
  useScrollReveal();

  /* Dark mode */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  /* Navbar scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <a href="#hero" className="navbar-logo" onClick={(e) => handleNav(e, "#hero")}>
            AV<span style={{ color: "var(--text-muted)" }}>.</span>
          </a>

          <ul className="navbar-links" role="list">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleNav(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              id="theme-toggle-btn"
              className="theme-toggle"
              onClick={() => setIsDark((d) => !d)}
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="hamburger"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="menu">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} role="menuitem" onClick={(e) => handleNav(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>

      {/* ==================== HERO ==================== */}
      <section className="hero" id="hero" aria-label="Hero section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Open to opportunities
              </div>

              <h1 className="hero-name">Aman Verma</h1>

              <p className="hero-title">
                {typedText}
                <span className="cursor" aria-hidden="true" />
              </p>

              <p className="hero-bio">
                MCA student specializing in Generative AI at SRM KTR. BCA graduate
                from Amity Patna with 8.17 CGPA. I build clean web experiences,
                explore AI systems, and love turning ideas into working products.
              </p>

              <div className="hero-actions">
                <a className="btn-primary" href="#contact" onClick={(e) => handleNav(e, "#contact")}>
                  Get in Touch
                </a>
                <a
                  className="btn-secondary"
                  href="#"
                  id="download-resume-btn"
                  onClick={(e) => e.preventDefault()}
                  title="Resume coming soon"
                >
                  <DownloadIcon /> Resume
                </a>
              </div>

              <div className="hero-social">
                <a
                  href="https://github.com/amanver02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                  id="hero-github-link"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-verma-05b6312a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                  id="hero-linkedin-link"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:amanver055@gmail.com"
                  className="social-icon"
                  aria-label="Email"
                  id="hero-email-link"
                >
                  <EmailIcon />
                </a>
              </div>
            </div>

            <div className="hero-avatar-wrap">
              <div className="hero-avatar-ring" />
              <Image
                src="/avatar.png"
                alt="Aman Verma"
                width={240}
                height={240}
                className="hero-avatar"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section id="about" style={{ padding: "96px 0", background: "var(--bg-alt)" }} aria-label="About section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">Who I Am</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }} className="reveal reveal-delay-1">
            <div>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", marginBottom: "20px", color: "var(--text-secondary)" }}>
                Hi! I&apos;m <strong style={{ color: "var(--text-primary)" }}>Aman Verma</strong>, a passionate developer
                and tech enthusiast from India. I completed my BCA from{" "}
                <strong style={{ color: "var(--text-primary)" }}>Amity University, Patna</strong> with an impressive
                8.17 CGPA and am currently pursuing MCA with specialization in{" "}
                <strong style={{ color: "var(--text-primary)" }}>Generative AI</strong> at{" "}
                <strong style={{ color: "var(--text-primary)" }}>SRM Institute, Kattankulathur</strong>.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.85", color: "var(--text-secondary)" }}>
                My interests span across web development, AI/ML, and building tools that make
                life easier. I enjoy working on full-stack applications and exploring the frontier
                of large language models and generative AI technologies.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { label: "CGPA", value: "8.17" },
                { label: "Degree", value: "BCA + MCA" },
                { label: "Focus", value: "Gen AI" },
                { label: "Status", value: "Open to Work" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "24px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "4px" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section className="skills-section" id="skills" aria-label="Skills section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Tech Stack</span>
            <h2 className="section-title">Skills &amp; Technologies</h2>
          </div>
          <div className="skills-grid">
            {SKILLS.map((cat, i) => (
              <div
                key={cat.title}
                className={`skill-category reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="skill-category-icon">{cat.icon}</div>
                <div className="skill-category-title">{cat.title}</div>
                <div className="skill-tags">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EDUCATION ==================== */}
      <section id="education" aria-label="Education section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Education</span>
            <h2 className="section-title">Academic Journey</h2>
          </div>
          <div className="edu-timeline">
            {EDUCATION.map((edu, i) => (
              <div key={edu.degree} className={`edu-card reveal reveal-delay-${i + 1}`}>
                <div className="edu-dot" />
                <div className="edu-inner">
                  <div className="edu-meta">
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <span className="edu-badge">{edu.badge}</span>
                  </div>
                  <p className="edu-institute">{edu.institute}</p>
                  <p className="edu-year">{edu.year}</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                    {edu.desc}
                  </p>
                  <div className="edu-tags">
                    {edu.tags.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}
      <section className="projects-section" id="projects" aria-label="Projects section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Projects</span>
            <h2 className="section-title">Things I&apos;ve Built</h2>
          </div>
          <div className="projects-grid">
            {PROJECTS.map((p, i) => (
              <article
                key={p.title}
                className={`project-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <div className="project-icon">{p.icon}</div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    id={`project-github-${i}`}
                  >
                    <GitHubIcon /> Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLinkIcon /> Live Demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EXPERIENCE ==================== */}
      <section id="experience" aria-label="Experience section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Experience</span>
            <h2 className="section-title">Work History</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {EXPERIENCE.map((exp, i) => (
              <div key={exp.role} className={`exp-card reveal reveal-delay-${i + 1}`}>
                <div className="exp-logo">{exp.icon}</div>
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <div className="exp-meta">
                    <span className="exp-date">{exp.date}</span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                  <ul className="exp-points">
                    {exp.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CERTIFICATIONS ==================== */}
      <section className="certs-section" id="certs" aria-label="Certifications section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Certifications</span>
            <h2 className="section-title">Credentials</h2>
          </div>
          <div className="certs-grid">
            {CERTS.map((c, i) => (
              <div key={c.title} className={`cert-card reveal reveal-delay-${Math.min(i + 1, 4)}`}>
                <div className="cert-icon">{c.icon}</div>
                <div>
                  <h3 className="cert-title">{c.title}</h3>
                  <p className="cert-issuer">{c.issuer}</p>
                  <span className="cert-year">{c.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" aria-label="Contact section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p style={{ marginTop: "12px", maxWidth: "480px", fontSize: "0.95rem" }}>
              Whether you have an opportunity, a collaboration idea, or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info reveal">
              <a
                href="mailto:amanver055@gmail.com"
                className="contact-item"
                id="contact-email-primary"
              >
                <div className="contact-item-icon"><EmailIcon /></div>
                <div>
                  <p className="contact-item-label">Primary Email</p>
                  <p className="contact-item-value">amanver055@gmail.com</p>
                </div>
              </a>
              <a
                href="mailto:av0691@srmist.edu.in"
                className="contact-item"
                id="contact-email-college"
              >
                <div className="contact-item-icon"><EmailIcon /></div>
                <div>
                  <p className="contact-item-label">College Email</p>
                  <p className="contact-item-value">av0691@srmist.edu.in</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/aman-verma-05b6312a4"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                id="contact-linkedin"
              >
                <div className="contact-item-icon"><LinkedInIcon /></div>
                <div>
                  <p className="contact-item-label">LinkedIn</p>
                  <p className="contact-item-value">aman-verma-05b6312a4</p>
                </div>
              </a>
              <a
                href="https://github.com/amanver02"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                id="contact-github"
              >
                <div className="contact-item-icon"><GitHubIcon /></div>
                <div>
                  <p className="contact-item-label">GitHub</p>
                  <p className="contact-item-value">github.com/amanver02</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  className="form-input"
                  type="text"
                  placeholder="Let's work together!"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>
              <button
                type="submit"
                id="contact-submit-btn"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {formSent ? "✓ Message Sent!" : <><SendIcon /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p className="footer-text">
            Designed &amp; built by{" "}
            <strong style={{ color: "var(--text-primary)" }}>Aman Verma</strong> · 2025
          </p>
          <p className="footer-text" style={{ marginTop: "6px" }}>
            BCA · Amity Patna &nbsp;→&nbsp; MCA Gen AI · SRM KTR
          </p>
        </div>
      </footer>
    </>
  );
}
