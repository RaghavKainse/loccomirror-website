import React from 'react';
import { 
  Zap, 
  Monitor, 
  Volume2, 
  Usb, 
  Cpu, 
  Radio, 
  Check, 
  Sparkles 
} from 'lucide-react';

export function Architecture() {
  const features = [
    {
      icon: <Zap size={22} color="#0078d4" />,
      bg: '#eff6ff',
      badgeColor: '#0078d4',
      badgeBg: '#e0f2fe',
      title: 'Zero-Lag Instant Controls',
      tag: '< 10ms Latency',
      desc: 'Instant touch and keyboard reaction with under 10ms delay. Specially optimized for competitive mobile games like BGMI, Free Fire, and COD Mobile.',
      perk: 'Ultra-Fast Response'
    },
    {
      icon: <Monitor size={22} color="#10b981" />,
      bg: '#ecfdf5',
      badgeColor: '#059669',
      badgeBg: '#d1fae5',
      title: 'Smooth 4K & Up to 120 FPS',
      tag: '4K Ultra HD',
      desc: 'Crisp resolution and buttery-smooth gameplay up to 120 FPS. Enjoy your mobile games on the big PC screen with zero stutter or frame drops.',
      perk: '60 / 90 / 120 FPS'
    },
    {
      icon: <Volume2 size={22} color="#8b5cf6" />,
      bg: '#f5f3ff',
      badgeColor: '#7c3aed',
      badgeBg: '#ede9fe',
      title: 'Direct Stereo Game Sound',
      tag: 'Crystal Clear Audio',
      desc: 'High-fidelity 48kHz audio streams straight into your PC headphones. Hear enemy footsteps and sound effects instantly in full stereo.',
      perk: 'Zero Audio Delay'
    },
    {
      icon: <Usb size={22} color="#d97706" />,
      bg: '#fffbeb',
      badgeColor: '#b45309',
      badgeBg: '#fef3c7',
      title: 'Direct USB (Plug & Play)',
      tag: 'No Setup Needed',
      desc: 'Simply connect your phone with a USB cable and start mirroring. No developer options, root, or complicated setup needed.',
      perk: 'Works in Seconds'
    },
    {
      icon: <Cpu size={22} color="#0284c7" />,
      bg: '#f0f9ff',
      badgeColor: '#0369a1',
      badgeBg: '#e0f2fe',
      title: 'Ultra-Light on Your PC',
      tag: '< 2% CPU Usage',
      desc: 'Direct GPU hardware decoding keeps CPU usage under 2%. Your computer stays completely cool and fast even during marathon gaming.',
      perk: 'GPU Hardware Decoded'
    },
    {
      icon: <Radio size={22} color="#ec4899" />,
      bg: '#fdf2f8',
      badgeColor: '#be185d',
      badgeBg: '#fce7f3',
      title: 'Ready for OBS & Streaming',
      tag: 'OBS & Discord',
      desc: 'Easily capture your screen in OBS Studio or Streamlabs. Stream in HD to YouTube or Twitch, or share your screen directly in Discord.',
      perk: 'OBS Studio Compatible'
    }
  ];

  return (
    <section id="features" style={{ padding: '80px 0 90px', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="app-container">
        
        {/* Simple Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div className="badge badge-blue" style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} />
            <span>Top Rated in 2026</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '12px', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Why Locco Mirror is the Best Screen Mirror Software
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
            Ranked #1 best screen mirroring software for competitive mobile gaming, zero-latency USB response, and uncompressed game sound.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="clean-card" 
              style={{ 
                padding: '28px', 
                background: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 15px -3px rgba(0,0,0,0.04)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 25px -4px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px -3px rgba(0,0,0,0.04)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px', 
                      background: feat.bg, 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {feat.icon}
                  </div>
                  <span style={{ 
                    fontSize: '11.5px', 
                    fontWeight: 700, 
                    color: feat.badgeColor, 
                    background: feat.badgeBg, 
                    padding: '3px 10px', 
                    borderRadius: '999px',
                    letterSpacing: '0.02em'
                  }}>
                    {feat.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>
                  {feat.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  {feat.desc}
                </p>
              </div>

              <div style={{ 
                marginTop: '22px', 
                paddingTop: '16px', 
                borderTop: '1px solid #f1f5f9', 
                fontSize: '13px', 
                color: '#0078d4', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontWeight: 600 
              }}>
                <Check size={15} color="#10b981" />
                <span style={{ color: '#334155' }}>{feat.perk}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

