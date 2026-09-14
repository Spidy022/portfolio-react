import { useRef, useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);

    const formData = new FormData(formRef.current);
    // Add Web3Forms access key for direct email delivery to thirudev086@gmail.com
    formData.append("access_key", "c05d76d4-8df6-48be-850d-85fae4465aa9");
    formData.append("subject", "New Portfolio Inquiry for Thiru Dev");
    formData.append("from_name", "Thiru Dev Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSentSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSentSuccess(false), 5000);
      } else {
        // Fallback mailto trigger
        const name = (formData.get("name") as string) || "";
        const email = (formData.get("email") as string) || "";
        const message = (formData.get("message") as string) || "";
        window.location.href = `mailto:thirudev086@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
      }
    } catch {
      // Fallback direct mailto trigger
      const name = (formData.get("name") as string) || "Visitor";
      const message = (formData.get("message") as string) || "";
      window.location.href = `mailto:thirudev086@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="site-section">
      <div data-reveal>
        <p className="section-label">Connect</p>
        <h2 className="section-title">Let's Work Together</h2>
        <div className="section-rule"></div>
      </div>

      <div className="contact-grid">
        <div className="glass-card">
          <p style={{ marginBottom: 24, color: '#334155', fontSize: 16, lineHeight: 1.6, fontWeight: 500 }}>
            I'm open to software engineering internships, freelance web &amp; UI development
            projects, and technical collaborations. Let's build something great together.
          </p>
          <a href="mailto:thirudev086@gmail.com" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Mail size={18} /> thirudev086@gmail.com
          </a>
          <a href="https://github.com/Spidy022" target="_blank" rel="noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/thiru-dev-147769290" target="_blank" rel="noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn ↗
          </a>
          <a href="https://www.instagram.com/mr_thirudev5" target="_blank" rel="noreferrer" className="contact-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Instagram ↗
          </a>
        </div>

        <div className="glass-card">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-field"
              placeholder="Your Name"
              required
              maxLength={100}
            />
            <input
              type="email"
              name="email"
              className="form-field"
              placeholder="Your Email"
              required
              maxLength={100}
            />
            <input
              type="text"
              name="subject"
              className="form-field"
              placeholder="Subject"
              required
              maxLength={150}
            />
            <textarea
              name="message"
              className="form-field"
              placeholder="Your Message"
              required
              rows={4}
              maxLength={1000}
            ></textarea>
            <button id="submit-btn" type="submit" className="btn-submit" disabled={submitting}>
              {sentSuccess ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#10b981' }}>
                  <CheckCircle size={16} /> Message Sent to Inbox!
                </span>
              ) : submitting ? (
                'Sending Message...'
              ) : (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <Send size={16} /> Send Message
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
