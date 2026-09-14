import { useEffect, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { ExternalLink, ArrowDown } from 'lucide-react';
import ProfileParticleDissolve from './canvas/ProfileParticleDissolve';

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  const { displayed, done } = useTypewriter(
    "Building software, exploring 3D, and creating experiences that stand out. A developer focused on turning ideas into meaningful digital products.",
    38,
    500
  );
  const [showPills, setShowPills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPills(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('thirudev086@gmail.com');
    const btn = document.getElementById('copy-email-btn');
    if (btn) {
      btn.textContent = '✓ Copied!';
      setTimeout(() => {
        if (btn) btn.innerHTML = 'thirudev086@gmail.com &nbsp;<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
      }, 2000);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div>
          <div className="hero-label">
            Full-Stack Engineer · VIT M.Tech · India
          </div>

          <h1 className="hero-name">Thiru Dev</h1>

          <p className="hero-typewriter">
            {displayed}
            {!done && <span style={{ borderRight: '2px solid #06b6d4', marginLeft: 4 }} />}
          </p>

          <div className={`pill-row ${showPills ? 'visible' : ''}`}>
            <button className="pill pill-solid" onClick={() => scrollTo('projects')}>
              See Projects
            </button>
            <button className="pill pill-solid" onClick={() => scrollTo('skills')}>
              My Skills
            </button>
            <button className="pill pill-solid" onClick={onOpenCV}>
              View Resume
            </button>
            <button className="pill pill-outline" onClick={() => scrollTo('contact')}>
              Hire Me
            </button>
            <button
              id="copy-email-btn"
              className="pill pill-outline"
              onClick={handleCopyEmail}
            >
              thirudev086@gmail.com &nbsp;<ExternalLink size={14} />
            </button>
          </div>
        </div>

        {/* Hero Profile Picture with Dissolve Effect */}
        <ProfileParticleDissolve />
      </div>

      <div style={{ position: 'absolute', bottom: 40, left: '8%', display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600 }}>
        <span>Scroll to Explore 3D World</span>
        <ArrowDown size={14} color="#06b6d4" />
      </div>
    </section>
  );
}
