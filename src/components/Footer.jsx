import React from 'react';
import { Monitor, Smartphone, Apple, Laptop, BookOpen, Download, Mail, ShieldCheck, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      style={{ 
        borderTop: '1px solid #e2e8f0', 
        background: '#ffffff', 
        padding: '60px 0 35px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="app-container">
        
        {/* Main 4-Column Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '45px' }}>
          
          {/* Column 1: Brand & Contact */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img src="/logo.png" alt="Locco Mirror" style={{ width: '34px', height: '34px', borderRadius: '10px' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: '#0f172a' }}>
                Locco Mirror
              </span>
            </div>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, maxWidth: '300px', marginBottom: '18px' }}>
              Real-time USB screen and uncompressed 48kHz audio mirroring for Windows &amp; Android.
            </p>
            
            <div>
              <span style={{ fontSize: '11.5px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                Contact Support
              </span>
              <a 
                href="mailto:loccomirror@gmail.com" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#0078d4', 
                  textDecoration: 'none', 
                  fontSize: '14.5px', 
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
              >
                <Mail size={16} />
                <span>loccomirror@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Downloads */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Downloads
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '14px', padding: 0, margin: 0 }}>
              <li>
                <a href="#downloads" style={{ color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Monitor size={15} color="#0078d4" />
                  <span>Windows 64-bit (v1.0.4)</span>
                </a>
              </li>
              <li>
                <a href="#downloads" style={{ color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Smartphone size={15} color="#10b981" />
                  <span>Android Client (v1.0.7)</span>
                </a>
              </li>
              <li>
                <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Apple size={15} />
                  <span>iOS (Coming Soon)</span>
                </span>
              </li>
              <li>
                <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <Laptop size={15} />
                  <span>macOS (Coming Soon)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '14px', padding: 0, margin: 0 }}>
              <li>
                <a href="#downloads" style={{ color: '#475569', textDecoration: 'none' }}>Download Releases</a>
              </li>
              <li>
                <a href="#user-guide" style={{ color: '#475569', textDecoration: 'none' }}>Direct USB Setup</a>
              </li>
              <li>
                <a href="#user-guide" style={{ color: '#475569', textDecoration: 'none' }}>USB Debugging Guide</a>
              </li>
              <li>
                <a href="#features" style={{ color: '#475569', textDecoration: 'none' }}>Core Features &amp; Speed</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Status */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Official Platform
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" />
                <span>100% Clean &amp; Virus-Free</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} color="#0078d4" />
                <span>Sub-10ms Hardware Latency</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Monitor size={16} color="#8b5cf6" />
                <span>Direct3D 11 GPU Decoded</span>
              </div>
              <div style={{ marginTop: '6px' }}>
                <span style={{ fontSize: '12px', background: '#eff6ff', color: '#0078d4', padding: '4px 10px', borderRadius: '6px', fontWeight: 600 }}>
                  loccomirror.in
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div 
          style={{ 
            borderTop: '1px solid #f1f5f9', 
            paddingTop: '25px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            fontSize: '13px',
            color: '#94a3b8',
            gap: '12px'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} <strong style={{ color: '#475569' }}>Locco Mirror</strong> (loccomirror.in). All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Ultra-low latency mobile gaming &amp; screen mirroring</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
