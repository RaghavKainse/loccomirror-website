import React from 'react';

export function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container-max">
        <div className="footer-grid">
          {/* Column 1 & 2: Brand Information */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <img src="/logo.png" alt="Locco Mirror Logo" className="footer-logo-img" />
              <span className="font-headline-sm footer-logo-text">Locco Mirror</span>
              <span className="navbar-badge">v2.4</span>
            </div>
            <p className="font-body-sm footer-brand-desc">
              Ultra-low latency screen mirroring, remote control, and camera virtualization tool built for power users and creators.
            </p>
            <div className="footer-system-status">
              <span className="status-live-dot" />
              <span>All systems operational • Zero Lag Protocol</span>
            </div>
          </div>

          {/* Column 3: Product */}
          <div className="footer-links-col">
            <div className="font-label-lg footer-col-title">Product</div>
            <ul className="footer-link-list">
              <li>
                <a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('#features'); }}>
                  Features
                </a>
              </li>
              <li>
                <a href="#camera-features" onClick={(e) => { e.preventDefault(); scrollTo('#camera-features'); }}>
                  Camera &amp; Mirror
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}>
                  Locco
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo('#pricing'); }}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#download" onClick={(e) => { e.preventDefault(); scrollTo('#download'); }}>
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Downloads */}
          <div className="footer-links-col">
            <div className="font-label-lg footer-col-title">Downloads</div>
            <ul className="footer-link-list">
              <li>
                <a href="/downloads/LoccoMirror_Setup_v1.0.5.exe" download="LoccoMirror_Setup_v1.0.5.exe">
                  Windows x64 / ARM
                </a>
              </li>
              <li>
                <a href="#download" onClick={(e) => { e.preventDefault(); scrollTo('#download'); }}>
                  macOS Apple Silicon
                </a>
              </li>
              <li>
                <a href="/downloads/LoccoMirror.apk" download="LoccoMirror.apk">
                  Android Companion
                </a>
              </li>
              <li>
                <a href="#download" onClick={(e) => { e.preventDefault(); scrollTo('#download'); }}>
                  iOS Streamer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Support & Legal */}
          <div className="footer-links-col">
            <div className="font-label-lg footer-col-title">Support &amp; Legal</div>
            <ul className="footer-link-list">
              <li>
                <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('#faq'); }}>
                  Help Center &amp; FAQ
                </a>
              </li>
              <li>
                <a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('#features'); }}>
                  Documentation
                </a>
              </li>
              <li>
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); alert("Locco Mirror does not collect personal data. All screen mirroring is 100% offline point-to-point."); }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" onClick={(e) => { e.preventDefault(); alert("Locco Mirror is licensed under standard end-user software terms."); }}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="font-body-sm footer-copyright">
            © 2026 Locco Mirror. All rights reserved.
          </span>
          <div className="footer-legal-links">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}>
              Security
            </a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo('#pricing'); }}>
              Telemetry &amp; Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
