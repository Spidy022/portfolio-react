import { useEffect } from 'react';
import { X, Download, Mail, MapPin, Award, BookOpen } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box executive-resume-box" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <p className="section-label" style={{ marginBottom: 4, color: '#0284c7' }}>Curriculum Vitae</p>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: '#0f172a' }}>Thiru Dev</h2>
            <p style={{ fontSize: 14, color: '#0284c7', fontWeight: 700 }}>
              Integrated M.Tech Software Engineering Scholar | VIT (2023 - 2028 Passout)
            </p>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={24} color="#0f172a" />
          </button>
        </div>

        {/* Scrollable Complete Resume Content */}
        <div className="resume-body-scroll" onWheel={e => e.stopPropagation()} onTouchMove={e => e.stopPropagation()}>
          {/* Header Info Banner featuring Real Portrait */}
          <div className="resume-header-card">
            <img src="/profile.jpg" alt="Thiru Dev Real Portrait" className="resume-avatar-img" />
            <div>
              <div className="resume-info-row">
                <span><MapPin size={14} color="#0284c7" /> India 🇮🇳</span>
                <span><Mail size={14} color="#0284c7" /> thirudev086@gmail.com</span>
              </div>
              <div className="resume-info-row" style={{ marginTop: 8 }}>
                <a href="https://github.com/Spidy022" target="_blank" rel="noreferrer" className="resume-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  github.com/Spidy022
                </a>
                <a href="https://www.linkedin.com/in/thiru-dev-147769290" target="_blank" rel="noreferrer" className="resume-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  linkedin.com/in/thiru-dev-147769290
                </a>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <h3 className="resume-section-title"><BookOpen size={18} color="#0284c7" /> Education</h3>
            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Integrated M.Tech in Software Engineering</strong>
                <span className="resume-date">2023 – 2028</span>
              </div>
              <p className="resume-subtitle">Vellore Institute of Technology (VIT), Vellore, India</p>
              <p className="resume-desc">
                Focusing on Data Structures &amp; Algorithms, Object-Oriented Software Architecture, Web Engineering, Database Systems, and Cloud Architectures.
              </p>
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="resume-section">
            <h3 className="resume-section-title"><Award size={18} color="#0284c7" /> Technical Skill Matrix</h3>
            <div className="resume-skills-grid">
              <div>
                <strong>Languages:</strong>
                <p>Python, C, C++, JavaScript (ES6+), TypeScript, HTML5, CSS3</p>
              </div>
              <div>
                <strong>Frontend Frameworks:</strong>
                <p>React 19, Three.js / React Three Fiber, Tailwind CSS, Flexbox &amp; Grid</p>
              </div>
              <div>
                <strong>Backend &amp; Databases:</strong>
                <p>Node.js, REST APIs, PostgreSQL, MySQL, Data Structures</p>
              </div>
              <div>
                <strong>Tools &amp; Media:</strong>
                <p>Git, GitHub, Figma UI/UX, Adobe Premiere Pro, Photoshop</p>
              </div>
            </div>
          </div>

          {/* Featured Projects Breakdown */}
          <div className="resume-section">
            <h3 className="resume-section-title"><Award size={18} color="#0284c7" /> Key Projects</h3>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Sai Police Academy Platform</strong>
                <span className="resume-date">Deployed in 2026</span>
              </div>
              <p className="resume-desc">
                Web management platform for police academy aspirants with interactive student modules and backend logic.
              </p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Interactive Cinematic 3D Portfolio</strong>
                <span className="resume-date">2026 · Live</span>
              </div>
              <p className="resume-desc">
                3D developer portfolio featuring camera travel timeline, procedural shaders, Three.js/R3F rendering, and GSAP scroll animations.
              </p>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <strong>Smart Learning Portal 2.0</strong>
                <span className="resume-date">In Development</span>
              </div>
              <p className="resume-desc">
                Next-gen educational portal combining course recommendations with student analytics for VIT lab.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <button onClick={() => window.print()} className="pill pill-solid">
            <Download size={16} /> Print / Save Full CV (PDF)
          </button>
          <button className="pill pill-outline" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
