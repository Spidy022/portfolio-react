const skills = [
  {
    title: 'Frontend Architecture',
    desc: 'HTML5, CSS3, JavaScript ES6+, React 19, Tailwind CSS, Flexbox & Grid, Responsive 3D Design.',
  },
  {
    title: 'Backend & Core Logic',
    desc: 'Python, C/C++, Data Structures, Algorithms, REST API integration, Node.js fundamentals.',
  },
  {
    title: 'UI/UX Design',
    desc: 'Figma prototyping, Wireframing, User-Centric Layouts, Dark/Light mode systems.',
  },
  {
    title: 'Media & Editing',
    desc: 'Adobe Premiere Pro, Photoshop, Post-production, Sound sync, Visual effects.',
  },
  {
    title: 'Databases & DevOps',
    desc: 'PostgreSQL, MySQL, Git version control, GitHub workflows, Command Line tooling.',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="site-section">
      <div data-reveal>
        <p className="section-label">My Toolkit</p>
        <h2 className="section-title">Skills &amp; Capabilities</h2>
        <div className="section-rule"></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {skills.map((s, i) => (
          <div className="glass-card" key={i}>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12, color: '#0f172a' }}>{s.title}</h3>
            <p style={{ fontSize: 14, color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
