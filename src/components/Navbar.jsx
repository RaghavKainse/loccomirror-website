import React, { useState } from 'react';

export function Navbar({ onDownloadClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Locco', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Camera & Mirror', href: '#camera-features' },
    { label: 'Performance', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-root">
      <div className="container-max navbar-container">
        {/* Left: Brand Logo & Links */}
        <div className="navbar-left">
          <a href="#" className="navbar-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.png" alt="Locco Mirror Logo" className="navbar-logo-img" />
            <span className="navbar-logo-text">Locco Mirror</span>
            <span className="navbar-badge">v2.4</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="navbar-desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="navbar-right">
          <div className="navbar-lang-pill" title="Current Language">
            <span className="material-symbols-outlined icon-18">language</span>
            <span>EN</span>
          </div>

          <a
            href="#download"
            className="navbar-changelog-link"
            onClick={(e) => handleLinkClick(e, '#download')}
          >
            Changelog
          </a>

          <a
            href="#download"
            className="navbar-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              if (onDownloadClick) onDownloadClick();
              const target = document.querySelector('#download');
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Download Free
          </a>

          <div className="navbar-avatar" title="Account">
            <span className="material-symbols-outlined icon-18">person</span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-drawer">
          <div className="navbar-mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-mobile-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <div className="navbar-mobile-divider" />
            <a
              href="#download"
              className="navbar-mobile-cta"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onDownloadClick) onDownloadClick();
                const target = document.querySelector('#download');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="material-symbols-outlined icon-18">download</span>
              Download Free Client
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
