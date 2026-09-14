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
    <div className="navbar-container" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, pointerEvents: 'none' }}>
      <nav className={`navbar-capsule ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          <img
            src="/profile.jpg"
            alt="Thiru Dev Avatar"
            className="nav-avatar-img"
          />
          <span className="nav-logo-text">THIRU <span>DEV</span></span>
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
