const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-logo">
            <div className="dhl-logo">
              <span className="dhl-logo-box" style={{ fontSize: '18px', padding: '2px 8px' }}>DHL</span>
              <span className="dhl-logo-express" style={{ fontSize: '11px' }}>EXPRESS</span>
            </div>
          </div>
          <p className="footer-group-text">Group</p>
          <div className="footer-links">
            <a href="https://www.dhl.com/in-en/home/footer/fraud-awareness.html" target="_blank" rel="noreferrer">Fraud Awareness</a>
            <a href="https://www.dhl.com/in-en/home/footer/legal-notice.html" target="_blank" rel="noreferrer">Legal Notice</a>
            <a href="https://www.dhl.com/in-en/home/footer/terms-of-use.html" target="_blank" rel="noreferrer">Terms of Use</a>
            <a href="https://www.dhl.com/in-en/home/footer/local-privacy-notice.html" target="_blank" rel="noreferrer">Privacy Notice</a>
            <a href="https://www.dhl.com/in-en/home/footer/dispute-resolution.html" target="_blank" rel="noreferrer">Dispute Resolution</a>
            <a href="https://www.dhl.com/in-en/home/footer/accessibility.html" target="_blank" rel="noreferrer">Accessibility</a>
            <a href="https://www.dhl.com/in-en/home/footer/additional-information.html" target="_blank" rel="noreferrer">Additional Information</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Consent Settings</a>
          </div>
          <p className="footer-copy">2025 © DHL Express India Pvt. Ltd. All rights reserved.</p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <p className="follow-text">Follow Us @DHLEXPRESSINDIA</p>
          <div className="social-icons">
            <a className="social-box"
              href="https://www.linkedin.com/company/dhl-express-india"
              target="_blank" rel="noreferrer" title="LinkedIn"
              style={{ color: '#0077B5', fontWeight: 900, fontSize: '13px' }}>
              in
            </a>
            <a className="social-box"
              href="https://www.facebook.com/DHLExpressIndia"
              target="_blank" rel="noreferrer" title="Facebook"
              style={{ color: '#1877F2', fontWeight: 900, fontSize: '16px' }}>
              f
            </a>
            <a className="social-box"
              href="https://www.instagram.com/dhlexpressindia"
              target="_blank" rel="noreferrer" title="Instagram"
              style={{ fontSize: '16px' }}>
              📷
            </a>
            <a className="social-box"
              href="https://twitter.com/DHLExpressIndia"
              target="_blank" rel="noreferrer" title="X / Twitter"
              style={{ fontWeight: 900, fontSize: '14px' }}>
              𝕏
            </a>
            <a className="social-box"
              href="https://www.youtube.com/@DHLExpressIndia"
              target="_blank" rel="noreferrer" title="YouTube"
              style={{ color: '#FF0000', fontSize: '16px' }}>
              ▶
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
