import React from 'react';
import { Mail, ShieldCheck, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      style={{ 
        borderTop: '1px solid #e2e8f0', 
        background: '#ffffff', 
        padding: '50px 0 30px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="app-container">
        
        {/* Main Simple Header Row */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '30px', 
            paddingBottom: '36px', 
            borderBottom: '1px solid #f1f5f9' 
          }}
        >
          
          {/* Brand & Tagline */}
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <img 
                src="/logo.png" 
                alt="Locco Mirror Logo" 
                style={{ width: '36px', height: '36px', borderRadius: '10px', objectFit: 'contain' }} 
              />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem', color: '#0f172a' }}>
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
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              Ultra-low latency USB screen and uncompressed 48kHz audio mirroring for Android to Windows. Built for smooth mobile gaming and streaming.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', fontSize: '14px' }}>
            <a 
              href="#downloads" 
              style={{ color: '#334155', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0078d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#334155'}
            >
              Downloads
            </a>
            <a 
              href="#user-guide" 
              style={{ color: '#334155', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0078d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#334155'}
            >
              Connection Guide
            </a>
            <a 
              href="#features" 
              style={{ color: '#334155', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0078d4'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#334155'}
            >
              Features
            </a>
          </div>

          {/* Simple & Prominent Contact Us Pill */}
          <div 
            style={{ 
              background: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: '12px', 
              padding: '12px 18px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
            }}
          >
            <div 
              style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '8px', 
                background: '#eff6ff', 
                color: '#0078d4', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Mail size={18} />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Contact Support
              </div>
              <a 
                href="mailto:loccomirror@gmail.com" 
                style={{ 
                  color: '#0078d4', 
                  textDecoration: 'none', 
                  fontSize: '14.5px', 
                  fontWeight: 600,
                  transition: 'color 0.2s ease'
                }}
              >
                loccomirror@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Domain info */}
        <div 
          style={{ 
            paddingTop: '24px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '14px', 
            fontSize: '13px', 
            color: '#94a3b8' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span>&copy; {new Date().getFullYear()} <strong style={{ color: '#475569' }}>Locco Mirror</strong>.</span>
            <span>All rights reserved.</span>
            <span>&bull;</span>
            <a href="https://www.loccomirror.in" style={{ color: '#0078d4', textDecoration: 'none', fontWeight: 600 }}>
              loccomirror.in
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#10b981" />
              <span>100% Clean &amp; Virus-Free</span>
            </span>
            <span>&bull;</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={15} color="#0078d4" />
              <span>Sub-10ms Hardware Latency</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
