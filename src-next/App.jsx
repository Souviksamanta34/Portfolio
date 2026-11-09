import React, { useEffect, useRef, useState } from "react";
import {
  profile,
  caseStudies,
  projects,
  capabilities,
  certifications,
} from "./content.js";

export function Arrow({ diagonal = false, ...props }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ExternalLink({ children, ...props }) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
const navigation = [
  ["work", "Selected work"],
  ["experience", "Experience"],
  ["about", "About"],
];

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef(null);
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  useEffect(() => {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-20% 0px -45% 0px" },
    );
    navigation.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Souvik Samanta, home"
        >
          <span className="monogram">
            s<span>.</span>
          </span>
          <span>
            Souvik Samanta
            <span className="brand-caption">SOFTWARE ENGINEER</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close menu" : "Open menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="primary-nav"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}

function SystemIllustration() {
  return (
    <div
      className="system-art"
      role="img"
      aria-label="Conceptual AI workflow: signals and context connect through an agent to a human-reviewed outcome."
    >
      <div className="art-top">
        <span>
          <i /> SYSTEMS WITH INTENT
        </span>
      </div>
      <div className="orbit orbit-outer" />
      <div className="orbit orbit-inner" />
      <svg
        className="system-lines"
        viewBox="0 0 480 420"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M110 128 240 210 376 110M240 210 367 311M240 210 95 303"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="175" cy="169" r="3" fill="currentColor" />
        <circle cx="310" cy="158" r="3" fill="currentColor" />
        <circle cx="306" cy="262" r="3" fill="currentColor" />
      </svg>
      <div className="system-core">
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="1.3">
            <path d="m20 3 15 9v17l-15 8-15-8V12Zm0 0v34M5 12l30 17M35 12 5 29M5 12l15 9 15-9" />
          </g>
        </svg>
        <span>INTELLIGENCE</span>
      </div>
      <div className="system-node node-signals">
        <span className="node-icon">⌁</span>
        <strong>Signals</strong>
        <small>OBSERVE</small>
      </div>
      <div className="system-node node-context">
        <span className="node-icon">⌘</span>
        <strong>Context</strong>
        <small>UNDERSTAND</small>
      </div>
      <div className="system-node node-tools">
        <span className="node-icon">↗</span>
        <strong>Tools</strong>
        <small>ACT</small>
      </div>
      <div className="system-node node-review">
        <span className="node-icon">✓</span>
        <strong>Human review</strong>
        <small>VALIDATE</small>
      </div>
      <div className="art-bottom">
        <span>
          Grounded in evidence.
          <br />
          Designed for people.
        </span>
      </div>
    </div>
  );
}

function CaseVisual({ type }) {
  return type === "incident-remediation" ? (
    <div className="case-visual incident-visual" aria-hidden="true">
      <div className="visual-label">
        <span>INCIDENT → RESOLUTION</span>
        <span>01 / WORKFLOW</span>
      </div>
      <div className="pipeline">
        <div>
          <small>01</small>
          <b>Investigate</b>
          <span>Logs + evidence</span>
        </div>
        <i>→</i>
        <div className="pipeline-agent">
          <small>02</small>
          <b>Reason</b>
          <span>Agent coordination</span>
        </div>
        <i>→</i>
        <div>
          <small>03</small>
          <b>Remediate</b>
          <span>Reviewed pull request</span>
        </div>
      </div>
      <div className="visual-foot">
        <span className="status-dot" /> HUMAN IN THE LOOP
        <span>ADK + GEMINI</span>
      </div>
    </div>
  ) : (
    <div className="case-visual document-visual" aria-hidden="true">
      <div className="visual-label">
        <span>UNSTRUCTURED → UNDERSTOOD</span>
        <span>02 / INTELLIGENCE</span>
      </div>
      <div className="document-scene">
        <div className="paper paper-back" />
        <div className="paper">
          <div className="paper-title">
            Financial statement <span>↗</span>
          </div>
          <div className="paper-line" />
          <div className="paper-line short" />
          <div className="paper-grid">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="paper-highlight">Extract. Validate. Structure.</div>
        </div>
        <div className="data-tag">
          <span>✓</span> Context preserved
          <br />
          <small>Currency · Period · Relationships</small>
        </div>
      </div>
    </div>
  );
}

function ProfessionalCertifications() {
  return (
    <section className="professional-certifications" aria-labelledby="certifications-title">
      <div className="certifications-heading">
        <div>
          <p className="eyebrow">CONTINUING EDUCATION</p>
          <h3 id="certifications-title">Professional certifications.</h3>
        </div>
        <p>Machine learning, data engineering, and applied AI.</p>
      </div>
      <div className="certification-featured">
        {certifications.filter((item) => item.featured).map((item) => (
          <ExternalLink className="certification-card" href={item.url} key={item.name}>
            <span className="certification-issuer">{item.issuer}</span>
            <strong>{item.name}</strong>
            <span className="certification-dates">
              {item.date.split(" · ").map((date) => <span key={date}>{date}</span>)}
            </span>
            <span className="certification-action">View credential <Arrow diagonal /></span>
          </ExternalLink>
        ))}
      </div>
      <p className="certification-additional-label">Additional certifications</p>
      <div className="certification-secondary">
        {certifications.filter((item) => !item.featured).map((item) => (
          <ExternalLink className="certification-row" href={item.url} key={item.name}>
            <span className="certification-row-copy">
              <strong>{item.name}</strong>
              <span className="certification-dates">
                {item.date.split(" · ").map((date) => <span key={date}>{date}</span>)}
              </span>
            </span>
            <Arrow diagonal />
          </ExternalLink>
        ))}
      </div>
    </section>
  );
}

function CaseDialog({ study, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const el = dialog.current;
    el.showModal();
    const trapFocus = (event) => {
      if (event.key !== "Tab") return;
      const controls = [
        ...el.querySelectorAll(
          'button, a[href], input, select, textarea, [tabindex="0"]',
        ),
      ];
      const first = controls[0],
        last = controls.at(-1);
      if (!first) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    el.addEventListener("keydown", trapFocus);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      el.removeEventListener("keydown", trapFocus);
      document.body.style.overflow = original;
      if (el.open) el.close();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="case-dialog"
      aria-labelledby="case-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === dialog.current) {
          const r = e.currentTarget.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="dialog-close"
        aria-label="Close case study"
        onClick={onClose}
        autoFocus
      >
        Close <span aria-hidden="true">×</span>
      </button>
      <p className="eyebrow">{study.category}</p>
      <h2 id="case-title">{study.shortTitle}</h2>
      <p className="dialog-lead">{study.context}</p>
      <h3>My contribution</h3>
      <ul className="contribution-list">
        {study.contributions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>Engineering considerations</h3>
      <p>{study.engineering}</p>
      <div className="outcome">
        <h3>Outcome & evaluation</h3>
        <p>{study.outcome}</p>
      </div>
      <div className="tags">
        {study.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className="case-note">{study.note}</p>
    </dialog>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [copyState, setCopyState] = useState("");
  const caseTrigger = useRef(null);
  const copyTimer = useRef(null);
  useEffect(() => {
    const aliases = {
      "/": "home",
      "/home": "home",
      "/splash": "home",
      "/projects": "work",
      "/experience": "experience",
      "/education": "about",
      "/opensource": "projects",
      "/contact": "contact",
    };
    const redirect = () => {
      const id = aliases[window.location.hash.slice(1)];
      if (id) {
        window.history.replaceState(null, "", `#${id}`);
        document.getElementById(id)?.scrollIntoView();
      }
    };
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => {
      window.removeEventListener("hashchange", redirect);
      clearTimeout(copyTimer.current);
    };
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("Email copied");
    } catch {
      setCopyState("Copy unavailable. Use the email link to get in touch.");
    }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyState(""), 5000);
  }
  useEffect(() => {
    if (!selected) caseTrigger.current?.focus();
  }, [selected]);
  function closeCase() {
    setSelected(null);
  }
  const visibleProjects = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="accent-line" /> SOFTWARE ENGINEER · APPLIED AI
            </p>
            <h1 id="hero-title">
              AI systems.
              <br />
              <span>Built for real work.</span>
            </h1>
            <p className="hero-description">
              I’m Souvik, a software engineer at TCS. I build human-reviewed
              agent workflows for production incidents and document intelligence
              pipelines for complex financial data.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="button button-plain" href={profile.resume} download>
                Download résumé{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
            <div className="hero-meta">
              <span className="status-dot" />
              <span>
                Currently building at <strong>Tata Consultancy Services</strong>
              </span>
            </div>
          </div>
          <SystemIllustration />
        </section>
        <div className="proof-strip shell">
          <div>
            <strong>2 years</strong>
            <span>PROFESSIONAL EXPERIENCE</span>
          </div>
          <div>
            <strong>AI + cloud</strong>
            <span>ENGINEERING FOCUS</span>
          </div>
          <div>
            <strong>Top 10</strong>
            <span>TCS GOOGLE HACKATHON 2026</span>
          </div>
          <a href="#experience">
            A little context.
            <br />
            <span>
              A lot of hands-on work. <Arrow diagonal />
            </span>
          </a>
        </div>

        <section
          className="section shell"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Complex challenges.
                <br />
                <span>Thoughtful engineering.</span>
              </h2>
            </div>
            <p>
              A closer look at the systems I’ve worked on, the decisions behind
              them, and the outcomes that matter.
            </p>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article className="case-card" key={study.id}>
                <button
                  className="case-visual-button"
                  aria-label={`Read case study: ${study.shortTitle}`}
                  onClick={(e) => {
                    caseTrigger.current = e.currentTarget;
                    setSelected(study);
                  }}
                >
                  <CaseVisual type={study.id} />
                </button>
                <div className="case-body">
                  <p className="eyebrow">{study.category}</p>
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>
                  <p className="case-evidence">
                    <strong>Evidence</strong> {study.evidence}
                  </p>
                  <div className="tags">
                    {study.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="case-bottom">
                    <span>{study.recognition}</span>
                    <button
                      className="text-button"
                      onClick={(e) => {
                        caseTrigger.current = e.currentTarget;
                        setSelected(study);
                      }}
                      aria-label={`View ${study.shortTitle}`}
                    >
                      View case study <Arrow diagonal />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="projects-section shell"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="projects-heading">
            <div>
              <p className="eyebrow">BUILT IN THE OPEN</p>
              <h2 id="projects-title">More things I’ve made.</h2>
            </div>
            <div className="filters" role="group" aria-label="Filter projects">
              {["All", "Web", "Mobile", "ML"].map((value) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <p className="sr-only" role="status">
            {visibleProjects.length} projects shown
          </p>
          <div className="project-list">
            {visibleProjects.map((p) => (
              <article className="project-row" key={p.id}>
                <div className={`project-mark mark-${p.id}`} aria-hidden="true">
                  {p.symbol}
                  <span>↗</span>
                </div>
                <div className="project-description">
                  <p className="eyebrow">{p.type}</p>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <p className="project-detail">{p.buildDetail}</p>
                </div>
                <div className="project-end">
                  <div className="tags">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <ExternalLink
                    href={p.url}
                    className="text-link"
                    aria-label={`View ${p.name} on GitHub`}
                  >
                    View on GitHub <Arrow diagonal />
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>
          <ExternalLink
            className="text-link all-repositories"
            href={`${profile.github}?tab=repositories`}
          >
            Explore all public repositories <Arrow diagonal />
          </ExternalLink>
        </section>

        <section
          className="experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="shell experience-layout">
            <div className="experience-intro">
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2 id="experience-title">
                Built through
                <br />
                <span>real work.</span>
              </h2>
              <p>
                Two years of engineering at TCS, backed by a foundation in data,
                software, and a habit of learning by building.
              </p>
              <a href={profile.resume} download className="text-link">
                Get the full résumé <Arrow diagonal />
              </a>
            </div>
            <div className="timeline">
              <article className="timeline-item">
                <p className="timeline-date">
                  NOV 2024 — PRESENT <span>FULL-TIME</span>
                </p>
                <h3>System Engineer</h3>
                <p className="company">Tata Consultancy Services</p>
                <p>
                  Developing GenAI systems for incident investigation, code
                  remediation, and financial document intelligence.
                </p>
                <ul>
                  <li>
                    Multi-agent orchestration with Google ADK, Vertex AI, and
                    Gemini.
                  </li>
                  <li>
                    Financial extraction and validation using Azure Document
                    Intelligence and Azure OpenAI.
                  </li>
                  <li>
                    Human review, controlled tool execution, and enterprise
                    cloud integration.
                  </li>
                </ul>
                <div className="timeline-note">Winner · TCS AI Hackathon</div>
              </article>
              <article className="timeline-item">
                <p className="timeline-date">
                  MAY 2023 — JUL 2023 <span>INTERNSHIP</span>
                </p>
                <h3>Data Engineering Intern</h3>
                <p className="company">Celebal Technologies</p>
                <p>
                  Built API-to-data-lake pipelines with Azure Data Factory and
                  Azure Data Lake Storage, with Apache Spark transformations
                  that improved data quality.
                </p>
                <div className="timeline-note">
                  60% reduction in data retrieval time
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / HOW I WORK</p>
              <h2 id="about-title">
                Curiosity in the approach.
                <br />
                <span>Rigor in the execution.</span>
              </h2>
            </div>
            <p>
              I’m interested in AI that earns its place in a workflow. That
              means useful context, dependable software, and people who can
              understand and review the result.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability" key={item.number}>
                <span className="capability-number">{item.number} /</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="skill-list">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <ProfessionalCertifications />
          <div className="credentials">
            <div className="education">
              <p className="eyebrow">THE FOUNDATION</p>
              <h3>
                B.Tech, Computer Science
                <br />& Engineering
              </h3>
              <p>Techno Main Salt Lake · 2020–2024</p>
              <span className="education-grade">
                8.82 <small>/ 10 CGPA</small>
              </span>
            </div>
            <div className="recognition">
              <p className="eyebrow">RECOGNITION ALONG THE WAY</p>
              <div>
                <span>01</span>
                <p>
                  <strong>TCS AI Hackathon</strong>
                  <small>Winner</small>
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>TCS Google Hackathon</strong>
                  <small>Top 10 · 2026 · Presented to Google</small>
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>ACM India East Dissertation Award</strong>
                  <small>3rd place · 2024 · 200+ colleges</small>
                </p>
              </div>
              <div>
                <span>04</span>
                <p>
                  <strong>TCS CMI Unit CodeMaster</strong>
                  <small>3rd place</small>
                </p>
              </div>
              <p className="additional-recognition">
                Also selected for Amazon ML Summer School 2023.
              </p>
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell">
            <div className="contact-top">
              <p className="eyebrow">04 / WHAT’S NEXT</p>
              <span>GOOD WORK STARTS WITH A CONVERSATION.</span>
            </div>
            <div className="contact-content">
              <h2 id="contact-title">
                Have a meaningful
                <br />
                problem to <em>solve?</em>
              </h2>
              <div>
                <p>
                  Let’s talk about applied AI, thoughtful engineering, and the
                  next thing worth building.
                </p>
                <a
                  className="button button-light"
                  href={`mailto:${profile.email}`}
                >
                  Get in touch <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="contact-bottom">
              <div className="email-group">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <button onClick={copyEmail} aria-label="Copy email address">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="8"
                      y="8"
                      width="12"
                      height="12"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15 8V4H4v11h4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
                <span role="status" className="copy-status">
                  {copyState}
                </span>
              </div>
              <div className="social-links">
                <ExternalLink href={profile.github}>
                  GitHub <Arrow diagonal />
                </ExternalLink>
                <ExternalLink href={profile.linkedin}>
                  LinkedIn <Arrow diagonal />
                </ExternalLink>
                <a href={profile.resume} download>
                  Résumé <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <span>© {new Date().getFullYear()} Souvik Samanta</span>
        <span>Built with intention.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
      {selected && <CaseDialog study={selected} onClose={closeCase} />}
    </>
  );
}
