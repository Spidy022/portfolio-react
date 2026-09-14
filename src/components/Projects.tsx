import { ExternalLink } from 'lucide-react';

const projects = [
  {
    tag: 'Deployed in 2026',
    status: 'Deployed',
    title: 'Sai Police Academy Platform',
    desc: 'Web management platform for police academy aspirants with interactive student modules and backend logic.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Backend Logic'],
    link: 'https://github.com/Spidy022/Sai-academy',
  },
  {
    tag: 'Web App · 2026',
    status: 'Live 3D',
    title: 'Interactive Cinematic 3D Portfolio',
    desc: 'High-performance single-page 3D portfolio with Three.js camera transitions, WebGL shaders, custom hooks, and Pearl Glass UI design system.',
    tech: ['React 19', 'TypeScript', 'Three.js / R3F', 'GSAP', 'Tailwind'],
    link: 'https://github.com/Spidy022',
  },
  {
    tag: 'In Development',
    status: 'Building',
    title: 'Smart Learning Portal 2.0',
    desc: 'Next-gen educational platform combining AI course recommendations with student analytics. Currently in development for VIT software lab.',
    tech: ['React', 'Python', 'PostgreSQL'],
    link: 'https://github.com/Spidy022',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="site-section">
      <div data-reveal>
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-rule"></div>
      </div>

      <div>
        {projects.map((p, i) => (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="glass-card project-item"
            key={i}
          >
            <div>
              <div className="project-meta">
                <span className="project-tag">{p.tag}</span>
                <span className="project-status-pill">{p.status}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="tech-chips">
                {p.tech.map((t, j) => <span className="tech-chip" key={j}>{t}</span>)}
              </div>
            </div>
            <ExternalLink size={20} color="#0284c7" />
          </a>
        ))}
      </div>
    </section>
  );
}
