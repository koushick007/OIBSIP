'use client'

import { useState } from 'react'

const skills = [
  'Python', 'TypeScript', 'FastAPI', 'LangChain', 'LangGraph', 'RAG',
  'Prompt Engineering', 'AI Agents', 'MCP', 'React', 'MongoDB', 'ChromaDB',
  'OpenAI', 'Gemini', 'Claude', 'n8n', 'Make.com', 'Git & GitHub',
]

const projects = [
  {
    number: '01',
    title: 'Research Paper Assistant',
    description: 'An AI-powered research companion that turns uploaded papers into source-cited, conversational knowledge using an end-to-end RAG pipeline.',
    stack: ['React', 'Python', 'FastAPI', 'MongoDB'],
  },
  {
    number: '02',
    title: 'Smart Workload Assessment',
    description: 'A real-time workload assessment system combining ECG signal analysis and image processing to estimate stress and employee workload.',
    stack: ['ECG Processing', 'Computer Vision', 'Python'],
  },
  {
    number: '03',
    title: 'Automatic RFID Billing',
    description: 'An embedded retail checkout system that automates product identification and accurate invoice generation through RFID tag detection.',
    stack: ['RFID', 'Embedded Systems', 'IoT'],
  },
]

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const email = 'koushik1122004@gmail.com'

  function copyEmail() {
    navigator.clipboard?.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Koushick D home">KD<span>.</span></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? 'Close' : 'Menu'}</span><i aria-hidden="true">{menuOpen ? '×' : '☰'}</i>
        </button>
        <nav id="main-nav" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight /></a>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
          <h1>Building intelligent<br /><em>things</em> for the<br /><strong>real world.</strong></h1>
          <p className="hero-intro">I&apos;m Koushick D — a Gen AI Engineer and Python Developer focused on turning complex ideas into practical, production-ready AI systems.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View my work <ArrowUpRight /></a>
            <a className="text-link" href="#about">More about me <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="hero-note"><span>01</span><p>Curious by nature.<br />Precise by craft.</p></div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><i aria-hidden="true">↓</i></div>
      </section>

      <section id="about" className="about section-shell section-divider">
        <div className="section-label"><span>01</span><span>About me</span></div>
        <div className="about-content"><h2>Where engineering<br /><em>meets imagination.</em></h2><div className="about-text"><p>I&apos;m an aspiring Gen AI Engineer currently pursuing Electronics and Communication Engineering at S.A. Engineering College. My work lives at the intersection of strong technical foundations and an endless curiosity for what AI can make possible.</p><p>From retrieval-augmented generation to agent workflows and automation, I enjoy building systems that are not only intelligent, but genuinely useful.</p><a className="text-link" href="mailto:koushik1122004@gmail.com">Get in touch <ArrowUpRight /></a></div></div>
      </section>

      <section id="skills" className="skills section-shell section-divider">
        <div className="section-label"><span>02</span><span>Toolkit</span></div>
        <div className="skills-content"><h2>The tools I use<br /><em>to make things happen.</em></h2><div className="skill-grid">{skills.map((skill, index) => <span key={skill} className={index < 4 ? 'skill featured' : 'skill'}>{skill}</span>)}</div></div>
      </section>

      <section id="projects" className="projects section-shell section-divider">
        <div className="section-label"><span>03</span><span>Selected work</span></div>
        <div className="projects-content"><div className="projects-heading"><h2>Ideas turned<br /><em>into reality.</em></h2><p>A few projects from my journey so far — each one a chance to learn, experiment, and build something meaningful.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-meta"><span>{project.number}</span><a href="https://github.com" target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub <ArrowUpRight /></a></div><h3>{project.title}</h3><p>{project.description}</p><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div>
      </section>

      <section className="education section-shell section-divider"><div className="section-label"><span>04</span><span>Background</span></div><div className="education-content"><div><h2>Still learning.<br /><em>Always building.</em></h2><p>Bachelor of Engineering<br />Electronics &amp; Communication Engineering<br /><strong>S.A. Engineering College</strong> · Expected 2026</p></div><div className="certs"><p className="small-label">CERTIFICATIONS</p><p>Honours Diploma in Computer Application (Grade A)</p><p>IoT &amp; IIoT Technology · RFID &amp; NFC Technology</p><p>LabVIEW Basic Training</p></div></div></section>

      <section id="contact" className="contact section-shell"><div className="contact-top"><p className="eyebrow"><span className="status-dot" /> Have a project in mind?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2></div><div className="contact-bottom"><button className="email-button" type="button" onClick={copyEmail} aria-label="Copy email address">{copied ? 'Email copied' : email} <ArrowUpRight /></button><div className="contact-links"><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><a href="tel:+917395922095">+91 73959 22095</a></div></div></section>

      <footer className="site-footer section-shell"><span>© 2026 Koushick D</span><span>Designed &amp; built with intention.</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
