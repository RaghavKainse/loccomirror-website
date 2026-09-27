import React, { useState, useEffect } from 'react';
import { Download, Menu, X, BookOpen } from 'lucide-react';

export function Navbar({ onDownloadClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: scrolled ? '0 4px 20px -2px rgba(0, 0, 0, 0.05)' : 'none',
        zIndex: 100,
        transition: 'all 0.2s ease',
      }}
    >
      <div 
        className="app-container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: '100%' 
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            textDecoration: 'none', 
            color: '#0f172a' 
          }}
        >
          <img 
            src="/logo.png" 
            alt="Locco Mirror Logo" 
            style={{ width: '34px', height: '34px', borderRadius: '8px', objectFit: 'contain' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem' }}>
              Locco Mirror
            </span>
            <span 
              style={{ 
                fontSize: '11px', 
                fontFamily: 'var(--font-mono)', 
                background: '#eff6ff', 
                color: '#1d4ed8', 
                border: '1px solid #bfdbfe', 
                padding: '2px 8px', 
                borderRadius: '999px',
                fontWeight: 600
              }}
            >
              v1.0.4
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul style={{ display: 'flex', alignItems: 'center', gap: '28px', listStyle: 'none', margin: 0, padding: 0 }}>
            <li>
              <a href="#downloads" style={{ textDecoration: 'none', color: '#0078d4', fontSize: '14.5px', fontWeight: 600 }}>
                Download
              </a>
            </li>
            <li>
              <a href="#user-guide" style={{ textDecoration: 'none', color: '#475569', fontSize: '14.5px', fontWeight: 500 }}>
                Connection Guide
              </a>
            </li>
            <li>
              <a href="#features" style={{ textDecoration: 'none', color: '#475569', fontSize: '14.5px', fontWeight: 500 }}>
                Features
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="#user-guide"
            className="btn btn-secondary nav-btn-guide"
            style={{ padding: '8px 16px', fontSize: '13.5px' }}
          >
            <BookOpen size={15} color="#0078d4" />
            <span>How to Use</span>
          </a>

          <a
            href="#downloads"
            onClick={(e) => {
              if (onDownloadClick) onDownloadClick(e);
            }}
            className="btn btn-primary"
            style={{ padding: '9px 20px', fontSize: '14px', background: '#0078d4' }}
          >
            <Download size={16} />
            <span>Download</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            zIndex: 99,
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
          }}
        >
          <a href="#downloads" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#0078d4', fontWeight: 600 }}>Download</a>
          <a href="#user-guide" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#334155' }}>Connection Guide</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#334155' }}>Features</a>
        </div>
      )}
    </header>
  );
}
