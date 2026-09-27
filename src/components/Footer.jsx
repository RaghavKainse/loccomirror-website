import React from 'react';
import { Monitor, Smartphone, Apple, Laptop, BookOpen, Download, HelpCircle, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      style={{ 
        borderTop: '1px solid var(--border-subtle)', 
        background: '#07080c', 
        padding: '60px 0 35px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="app-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img src="/logo.png" alt="Locco Mirror" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem' }}>
                Locco Mirror
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, maxWidth: '320px', marginBottom: '16px' }}>
              Ultra-low latency USB screen and audio mirroring for Windows & Android.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contact Us
              </span>
              <a 
                href="mailto:loccomirror@gmail.com" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#38bdf8', 
                  textDecoration: 'none', 
                  fontSize: '14.5px', 
                  fontWeight: 500 
                }}
              >
                <Mail size={16} />
                <span>loccomirror@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '15px', color: '#ffffff', marginBottom: '16px', letterSpacing: '0.04em' }}>NAVIGATION</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#downloads" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Download Releases</a></li>
              <li><a href="#user-guide" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Connection Guides</a></li>
              <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Features & Performance</a></li>
            </ul>
          </div>

          {/* Platform Status */}
          <div>
            <h4 style={{ fontSize: '15px', color: '#ffffff', marginBottom: '16px', letterSpacing: '0.04em' }}>PLATFORMS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dbee00' }}>
                <Monitor size={15} />
                <span>Windows 10 / 11 — Available (v1.0.4)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3ddc84' }}>
                <Smartphone size={15} />
                <span>Android 10 - 14+ — Available (v1.0.7)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                <Apple size={15} />
                <span>iPhone (iOS) — Coming Soon</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                <Laptop size={15} />
                <span>Mac (macOS) — Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Help & Support */}
          <div>
            <h4 style={{ fontSize: '15px', color: '#ffffff', marginBottom: '16px', letterSpacing: '0.04em' }}>SUPPORT & GUIDES</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', marginBottom: '16px' }}>
              Need help connecting your device or setting up USB debugging? Check our complete guide:
            </p>
            <a
              href="#user-guide"
              className="btn btn-secondary"
              style={{ fontSize: '13px', padding: '10px 18px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <BookOpen size={15} color="#dbee00" />
              <span>View Connection Guides</span>
            </a>
          </div>

        </div>

        {/* SEO Keywords Tag Bar for Search Engine Indexing */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
          padding: '24px 0 20px', 
          fontSize: '12px', 
          color: '#475569', 
          lineHeight: 1.8 
        }}>
          <span style={{ color: '#94a3b8', fontWeight: 600, marginRight: '6px' }}>Popular Searches:</span>
          <span>Locco Mirror</span> • 
          <span>Locco Mirror Download</span> • 
          <span>Screen Mirroring</span> • 
          <span>Android to PC USB Screen Mirroring</span> • 
          <span>Zero Lag Screen Mirror for Gaming</span> • 
          <span>BGMI Screen Mirror to PC</span> • 
          <span>Free Fire Screen Mirror PC</span> • 
          <span>Screen Mirror with Internal Audio</span> • 
          <span>4K 120FPS Screen Mirror</span> • 
          <span>Low Latency Screen Mirroring App</span> • 
          <span>Scrcpy Alternative with Audio</span> • 
          <span>Direct USB Phone to Laptop Mirror</span> • 
          <span>Best Screen Mirroring Software Windows 10/11</span>
        </div>

        {/* Bottom copyright line */}
        <div 
          style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
            paddingTop: '25px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontSize: '13px',
            color: '#64748b',
            gap: '12px'
          }}
        >
          <div>
            © {new Date().getFullYear()} Locco Mirror Project. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Ultra-low latency mobile gaming & screen mirroring</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
