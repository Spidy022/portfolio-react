export default function About() {
  return (
    <section id="about" className="site-section">
      <div data-reveal>
        <p className="section-label">Biography</p>
        <h2 className="section-title">About Thiru Dev</h2>
        <div className="section-rule"></div>
      </div>

      <div className="about-grid">
        <div className="glass-card about-badge-card" data-reveal>
          <span className="big">VIT</span>
          <span className="small">Integrated M.Tech<br />2028 Passout</span>
        </div>

        <div className="glass-card" data-reveal>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
            Engineering Full-Stack Web Solutions with Creative Precision
          </h3>
          <p style={{ color: '#334155', lineHeight: 1.65, marginBottom: 16, fontSize: '15px' }}>
            Hello! I'm <strong style={{ color: '#0f172a' }}>Thiru Dev</strong>, pursuing an integrated{' '}
            <strong style={{ color: '#0f172a' }}>M.Tech in Software Engineering at Vellore Institute of Technology (VIT)</strong>,
            aiming for graduation in <strong style={{ color: '#0f172a' }}>2028</strong>.
          </p>
          <p style={{ color: '#334155', lineHeight: 1.65, fontSize: '15px' }}>
            My mission is to master computer science fundamentals while creating slick digital
            experiences. From building database-backed web platforms to designing UI systems in
            Figma and editing media, I bring technical discipline and creative design together.
          </p>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Degree</span>
              <span className="value">M.Tech Software Engg</span>
            </div>
            <div className="info-item">
              <span className="label">Institution</span>
              <span className="value">VIT, Vellore</span>
            </div>
            <div className="info-item">
              <span className="label">Graduation</span>
              <span className="value">2028</span>
            </div>
            <div className="info-item">
              <span className="label">Location</span>
              <span className="value">India 🇮🇳</span>
            </div>
            <div className="info-item">
              <span className="label">Email</span>
              <span className="value">thirudev086@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="label">Status</span>
              <span className="value" style={{ color: '#10b981' }}>● Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
