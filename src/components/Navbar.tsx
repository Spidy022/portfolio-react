import { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenCV: () => void;
}

export default function Navbar({ onOpenCV }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '16px 24px', pointerEvents: 'none' }}>
      <nav className={`navbar-capsule ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <img
            src="/profile.jpg"
            alt="Thiru Dev Avatar"
            style={{ width: 34, height: 34, borderRadius: '50%', border: '2px solid #0284c7', objectFit: 'cover', aspectRatio: '1 / 1', flexShrink: 0 }}
          />
          THIRU <span>DEV</span>
        </a>

        <div className="nav-links">
          <span className="nav-link" onClick={() => scrollTo('about')}>About</span>
          <span className="nav-link" onClick={() => scrollTo('skills')}>Skills</span>
          <span className="nav-link" onClick={() => scrollTo('projects')}>Projects</span>
          <span className="nav-link" onClick={onOpenCV}>Resume</span>
          <span className="nav-link" onClick={() => scrollTo('contact')}>Contact</span>
        </div>
      </nav>
    </div>
  );
}
