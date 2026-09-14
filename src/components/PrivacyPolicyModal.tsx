import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box executive-resume-box" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <p className="section-label" style={{ marginBottom: 4 }}>Legal &amp; Compliance</p>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: 10 }}>
              <ShieldCheck size={24} color="#10b981" /> Cybersecurity &amp; Privacy Policy
            </h2>
            <p style={{ fontSize: 13, color: 'rgba(248, 250, 252, 0.7)', marginTop: 4 }}>
              Compliant with the Indian Information Technology Act 2000 (Section 43A) &amp; Digital Personal Data Protection (DPDP) Act 2023.
            </p>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Policy Content */}
        <div className="resume-body-scroll">
          <div className="resume-section">
            <h3 className="resume-section-title"><Lock size={16} color="#38bdf8" /> 1. Data Collection &amp; Purpose</h3>
            <p className="resume-desc">
              This portfolio application is built by <strong>Thiru Dev</strong> for demonstration and professional engagement purposes.
              We only process personal details (Name, Email, Message) explicitly submitted via the Contact form for professional inquiries.
            </p>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title"><ShieldCheck size={16} color="#10b981" /> 2. Security Standards &amp; XSS Safeguards</h3>
            <div className="resume-desc">
              <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
                <li><strong>Strict CSP &amp; Headers:</strong> Content-Security-Policy (CSP) enforcement prevents unauthorized script execution and cross-site scripting (XSS).</li>
                <li><strong>Input Entity Encoding:</strong> All user inputs are sanitized against SQL injection, HTML script tags, and payload tampering.</li>
                <li><strong>Zero Third-Party Tracking:</strong> No tracking cookies, keyloggers, or telemetry trackers are utilized.</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title"><FileText size={16} color="#38bdf8" /> 3. Indian DPDP Act 2023 Data Principal Rights</h3>
            <p className="resume-desc">
              Under the Digital Personal Data Protection (DPDP) Act 2023 of India, you retain the right to request access, correction, or erasure of any submitted contact information.
              For data inquiries, contact Data Controller <strong>Thiru Dev</strong> at <span style={{ color: '#10b981' }}>thirudev086@gmail.com</span>.
            </p>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title"><CheckCircle2 size={16} color="#10b981" /> 4. Integrity &amp; Security Verification</h3>
            <p className="resume-desc">
              All communications utilize TLS/HTTPS encryption in transit. Static assets are compiled with strict TypeScript static analysis and Oxlint auditing.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer">
          <button className="pill pill-solid" onClick={onClose}>
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
