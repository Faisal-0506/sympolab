import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Asterisk, Braces, Check, ChevronDown,
  Code2, Layers3, Menu, MessageCircle, MonitorSmartphone, Network, Palette,
  Send, ShieldCheck, Sparkles, Workflow, X, Zap
} from 'lucide-react';
import { COMPANY, PROJECTS } from './config';
import './style.css';

const services = [
  { no: '01', icon: MonitorSmartphone, title: 'Web Application Development', text: 'Purpose-built web platforms that make complex workflows feel simple, fast and intuitive.', tags: ['Business platforms', 'Custom portals', 'E-commerce'] },
  { no: '02', icon: Layers3, title: 'Software & ERP Solutions', text: 'Connected systems that bring your operations, people and information into one clear workflow.', tags: ['ERP systems', 'Management tools', 'Automation'] },
  { no: '03', icon: Braces, title: 'API & Backend Engineering', text: 'Reliable foundations, thoughtful data models and APIs designed to grow with your product.', tags: ['REST APIs', 'Database design', 'Integrations'] },
  { no: '04', icon: MonitorSmartphone, title: 'Mobile App Development', text: 'Useful mobile experiences that keep your services close to the people who need them.', tags: ['Android', 'iOS', 'Cross-platform'] },
  { no: '05', icon: Palette, title: 'UI/UX Design', text: 'Clear, accessible interfaces shaped around real users, real tasks and measurable goals.', tags: ['Product design', 'Prototyping', 'Design systems'] },
  { no: '06', icon: Network, title: 'IT Consultancy', text: 'Practical technical guidance to help you choose the right tools, architecture and next steps.', tags: ['Tech strategy', 'Architecture', 'Digital transformation'] },
];

const process = [
  { no: '01', title: 'Understand', subtitle: 'Requirement analysis', text: 'We listen, ask the right questions and understand the people, problems and outcomes behind your idea.' },
  { no: '02', title: 'Plan', subtitle: 'Scope & strategy', text: 'We define priorities, map the experience and agree on a realistic scope, timeline and delivery plan.' },
  { no: '03', title: 'Build', subtitle: 'Design & engineering', text: 'We turn the plan into a working product through focused design, development and regular collaboration.' },
  { no: '04', title: 'Test', subtitle: 'Quality assurance', text: 'We test key journeys, resolve issues and refine the details before your product goes live.' },
  { no: '05', title: 'Improve', subtitle: 'Launch & updates', text: 'After launch, we help monitor, maintain and improve the product as your needs evolve.' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Services', '#services'], ['Projects', '#projects'], ['Process', '#process'], ['About', '#about']];
  return <header className="header"><a className="brand" href="#home" aria-label="Home"><span className="brand-mark"><Asterisk size={22}/></span><span>{COMPANY.name}<small>{COMPANY.descriptor}</small></span></a>
    <nav className={open ? 'nav nav-open' : 'nav'}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a></nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
  </header>;
}

function ProjectVisual({ type }) {
  return <div className={`project-visual ${type}`}>
    <div className="mock-top"><span/><span/><span/><i>workspace / overview</i></div>
    <div className="mock-body"><div className="mock-side"><b/><b/><b/><b/></div><div className="mock-content"><div className="mock-heading"/><div className="mock-stats"><b/><b/><b/></div><div className="mock-chart"><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="mock-lines"><i/><i/><i/></div></div></div>
    <div className="visual-glow"/>
  </div>;
}

function App() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Web application development', message: '' });
  const [menuOpen, setMenuOpen] = useState(false);
  const emailHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent('Project inquiry from ' + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nProject details:\n${form.message}`)}`;
  const submit = (e) => { e.preventDefault(); window.location.href = emailHref; };

  return <><Header/>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot"/> SOFTWARE DEVELOPMENT & DIGITAL SOLUTIONS</div>
          <h1>We turn complex ideas into <span className="gradient-text">clear digital experiences.</span></h1>
          <p className="hero-desc">We design and engineer thoughtful software that helps businesses work smarter, serve people better and move forward with confidence.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Start a conversation <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#services">Explore services <ArrowDown size={16}/></a></div>
          <div className="hero-note"><span className="note-line"/> Based in Bangladesh. Building for the world.</div>
        </div>
        <div className="hero-art" aria-label="Abstract software interface illustration"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-core"><div className="core-icon"><Code2 size={48}/></div><span>IDEAS → IMPACT</span></div><div className="float-card card-a"><span className="mini-icon"><Workflow size={17}/></span><div><b>Thoughtful systems</b><small>Built around your workflow</small></div><Check size={16} className="check"/></div><div className="float-card card-b"><span className="mini-icon purple"><Zap size={17}/></span><div><b>Made to scale</b><small>Ready for what's next</small></div></div><div className="art-cross cross-one">✳</div><div className="art-cross cross-two">+</div></div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="hero-bottom-line"/><span>01 — 06</span></div>
      </section>

      <section className="intro-strip"><div className="section-wrap intro-inner"><span className="section-kicker">WHAT WE DO</span><h2>Technology should move your business forward — <em>not get in its way.</em></h2><p>From the first conversation to launch and beyond, we bring strategy, design and engineering together to create software with a purpose.</p></div></section>

      <section className="section-wrap section-block" id="services"><div className="section-heading"><div><span className="section-kicker">01 / OUR SERVICES</span><h2>What we can <span className="gradient-text">build for you.</span></h2></div><p>Whether you're starting with an idea or improving an existing system, we help you find the right solution.</p></div>
        <div className="service-grid">{services.map(({no, icon: Icon, title, text, tags}) => <article className="service-card" key={no}><div className="service-top"><span className="service-icon"><Icon size={21}/></span><span className="service-no">{no}</span></div><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map(t => <span key={t}>{t}</span>)}</div><a href="#contact" className="text-link">Let's discuss <ArrowUpRight size={15}/></a></article>)}</div>
        <div className="build-cta"><div><span className="section-kicker">HAVE SOMETHING IN MIND?</span><h3>Let's build your next<br/><span className="gradient-text">great idea.</span></h3></div><a className="button button-primary" href="#contact">Tell us about it <ArrowUpRight size={17}/></a></div>
      </section>

      <section className="projects-section" id="projects"><div className="section-wrap section-block"><div className="section-heading"><div><span className="section-kicker">02 / SELECTED WORK</span><h2>Ideas made <span className="gradient-text">tangible.</span></h2></div><p>A look at the kind of digital products and systems we love to create. Demo concepts are labelled transparently.</p></div>
        <div className="project-grid">{PROJECTS.map(p => <article className="project-card" key={p.number}><ProjectVisual type={p.visual}/><div className="project-info"><div className="project-meta"><span>{p.category}</span><span>/{p.number}</span></div><h3>{p.name}</h3><p>{p.description}</p><div className="feature-list">{p.features.map(f => <span key={f}><Check size={13}/>{f}</span>)}</div><div className="project-foot"><div className="stack-list">{p.stack.map(s => <span key={s}>{s}</span>)}</div><a href={p.demo} className="text-link">Discuss a similar project <ArrowUpRight size={15}/></a></div></div></article>)}</div>
        <p className="demo-note"><Sparkles size={15}/> Portfolio entries above are starter demo concepts. Replace them with verified projects and working demo links before publishing.</p>
      </div></section>

      <section className="section-wrap section-block process-section" id="process"><div className="section-heading"><div><span className="section-kicker">03 / HOW WE WORK</span><h2>From first thought<br/>to <span className="gradient-text">what's next.</span></h2></div><p>Good products come from a clear process and open collaboration. Here's how we take an idea forward.</p></div>
        <div className="process-list">{process.map((p, i) => <article className="process-item" key={p.no}><div className="process-number">{p.no}</div><div className="process-title"><h3>{p.title}</h3><span>{p.subtitle}</span></div><p>{p.text}</p><div className="process-arrow">{i === process.length - 1 ? <Check size={18}/> : <ArrowDown size={18}/>}</div></article>)}</div>
      </section>

      <section className="about-section" id="about"><div className="section-wrap section-block about-grid"><div className="about-left"><span className="section-kicker">04 / A LITTLE ABOUT US</span><h2>We believe good engineering is <span className="gradient-text">a human thing.</span></h2><div className="about-stamp"><Asterisk size={30}/><span>CURIOUS<br/>BY DESIGN</span></div></div><div className="about-right"><div className="about-item"><span>01 / WHO WE ARE</span><h3>A small team with a thoughtful approach.</h3><p>We are a growing software team bringing together design thinking and practical engineering to solve meaningful problems. We work closely with clients and treat every project as a partnership.</p></div><div className="about-item"><span>02 / OUR PHILOSOPHY</span><h3>Useful beats complicated.</h3><p>We believe the best technology feels simple to use, solves a real problem and creates value long after launch.</p></div><div className="about-item"><span>03 / ENGINEERING MINDSET</span><h3>Build with care. Think long term.</h3><p>We value readable code, sensible architecture, security, testing and maintainability — not shortcuts that create tomorrow's problems.</p></div><div className="about-item"><span>04 / OUR APPROACH TO TECHNOLOGY</span><h3>Choose the right tool for the job.</h3><p>We stay curious about modern tools, but technology is never the goal by itself. We choose solutions based on your users, needs and future plans.</p></div></div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap section-block contact-grid"><div className="contact-copy"><span className="section-kicker">05 / START A CONVERSATION</span><h2>Have a challenge?<br/><span className="gradient-text">Let's talk.</span></h2><p>Tell us what you're thinking. A clear brief isn't required — just start with the problem you're trying to solve.</p><div className="contact-links"><a href={`mailto:${COMPANY.email}`}><span><Send size={17}/></span><div><small>EMAIL US</small><b>{COMPANY.email}</b></div><ArrowUpRight size={16}/></a><a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noreferrer"><span><MessageCircle size={17}/></span><div><small>WHATSAPP</small><b>Start a chat</b></div><ArrowUpRight size={16}/></a><a href={COMPANY.github} target="_blank" rel="noreferrer"><span><Code2 size={17}/></span><div><small>GITHUB</small><b>Explore our code</b></div><ArrowUpRight size={16}/></a><a href={COMPANY.linkedin} target="_blank" rel="noreferrer"><span><Network size={17}/></span><div><small>LINKEDIN</small><b>Connect with us</b></div><ArrowUpRight size={16}/></a></div></div>
        <form className="contact-form" onSubmit={submit}><div className="form-heading"><span>PROJECT INQUIRY</span><ShieldCheck size={19}/></div><label>Your name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="How should we call you?"/></label><label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@company.com"/></label><label>What do you need?<select value={form.service} onChange={e => setForm({...form, service:e.target.value})}><option>Web application development</option><option>Software / ERP solution</option><option>Mobile app development</option><option>UI/UX design</option><option>API & backend development</option><option>IT consultancy</option><option>Something else</option></select><ChevronDown className="select-chevron" size={15}/></label><label>Tell us a little about your project<textarea required rows="4" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="A few details about the challenge, idea or goal..."/></label><button className="button button-primary form-submit" type="submit">Send project inquiry <ArrowUpRight size={17}/></button><small className="form-note">This opens your email app with your message ready to send.</small></form>
      </div></section>
    </main>
    <footer className="footer"><div className="section-wrap footer-main"><a className="brand" href="#home"><span className="brand-mark"><Asterisk size={22}/></span><span>{COMPANY.name}<small>{COMPANY.descriptor}</small></span></a><p>Thoughtful software.<br/>Built for what's next.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={15}/></a></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} {COMPANY.name} {COMPANY.descriptor}. All rights reserved.</span><span>{COMPANY.location}</span><span>DESIGNED WITH INTENTION <Asterisk size={13}/></span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
