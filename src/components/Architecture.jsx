import React from 'react';
import { 
  Zap, 
  Monitor, 
  Volume2, 
  Usb, 
  Cpu, 
  Radio, 
  Check, 
  X,
  Sparkles,
  ShieldCheck
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
      desc: 'Uses Direct3D 11 GPU hardware decoding instead of CPU processing. Keeps your computer cool and whisper quiet while gaming or streaming.',
      perk: 'GPU Hardware Decode'
    },
    {
      icon: <Radio size={22} color="#ec4899" />,
      bg: '#fdf2f8',
      badgeColor: '#be185d',
      badgeBg: '#fce7f3',
      title: 'Streamer & OBS Ready',
      tag: 'OBS & Discord',
      desc: 'Flawlessly capture direct video and stereo game audio in OBS Studio, Streamlabs, and Discord without auxiliary audio cables or mixer boxes.',
      perk: '100% Stream Ready'
    }
  ];

  const comparisonRows = [
    {
      feature: 'Hardware Response Latency',
      locco: '< 10ms (Real-time)',
      douwan: '25ms - 35ms',
      scrcpy: '35ms - 50ms',
      wifi: '140ms+ (Laggy)'
    },
    {
      feature: 'Direct USB (No Dev Options / ADB)',
      locco: 'Yes (AOA 2.0 Auto)',
      douwan: 'VIP Paid Feature',
      scrcpy: 'No (ADB Only)',
      wifi: 'No'
    },
    {
      feature: 'Internal 48kHz Stereo Game Audio',
      locco: 'Direct Plug & Play',
      douwan: 'VIP Subscription',
      scrcpy: 'Complex Setup',
      wifi: 'Audio Desync'
    },
    {
      feature: '4K & 120 FPS High Refresh Rate',
      locco: 'Yes (Free & Uncapped)',
      douwan: 'VIP Only (720p free)',
      scrcpy: 'CLI Config Required',
      wifi: 'Limited (30-45 FPS)'
    },
    {
      feature: 'Direct3D 11 GPU Hardware Decode',
      locco: '< 2% CPU (NVDEC)',
      douwan: '6% - 10% CPU',
      scrcpy: '8% - 14% CPU',
      wifi: '18%+ High CPU'
    },
    {
      feature: 'Software Pricing',
      locco: '100% Free & Open',
      douwan: '$29 / Year Subscription',
      scrcpy: 'Free (Terminal CLI)',
      wifi: 'Ads & In-App Purchases'
    }
  ];

  return (
    <section id="features" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="app-container">
        
        {/* Simple Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="badge badge-lime" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} />
            <span>Why Locco Mirror?</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.75rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Engineered for Mobile Gamers &amp; Streamers
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
            Everything you need for silky-smooth phone mirroring with zero setup friction.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px', 
          marginBottom: '65px' 
        }}>
          {features.map((feat, index) => (
            <div 
              key={index}
              className="clean-card"
              style={{
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                background: '#ffffff',
                border: '1px solid #e2e8f0'
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

        {/* ==========================================================================
            COMPETITOR COMPARISON MATRIX (High Conversion & User Dwell Time)
            ========================================================================== */}
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="badge badge-blue" style={{ marginBottom: '10px' }}>
              <ShieldCheck size={13} />
              <span>Head-to-Head Comparison</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.1rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em' }}>
              Why Gamers Choose Locco Mirror Over Alternatives
            </h3>
          </div>

          <div 
            className="clean-card"
            style={{
              padding: '0',
              overflow: 'hidden',
              borderRadius: '16px',
              border: '1px solid #e2e8f0'
            }}
          >
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', minWidth: '640px', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{ padding: '18px 20px', fontSize: '13.5px', fontWeight: 700, color: '#475569' }}>Feature / Capability</th>
                    <th style={{ padding: '18px 20px', fontSize: '14px', fontWeight: 800, color: '#0078d4', background: '#eff6ff', borderLeft: '2px solid #0078d4', borderRight: '2px solid #0078d4' }}>
                      Locco Mirror (Official)
                    </th>
                    <th style={{ padding: '18px 20px', fontSize: '13.5px', fontWeight: 600, color: '#475569' }}>DouWan</th>
                    <th style={{ padding: '18px 20px', fontSize: '13.5px', fontWeight: 600, color: '#475569' }}>Scrcpy (ADB)</th>
                    <th style={{ padding: '18px 20px', fontSize: '13.5px', fontWeight: 600, color: '#475569' }}>Wi-Fi / AirPlay</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < comparisonRows.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                      <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 700, color: '#0078d4', background: '#f8fbff', borderLeft: '2px solid #0078d4', borderRight: '2px solid #0078d4' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Check size={16} color="#10b981" />
                          <span>{row.locco}</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13.5px', color: '#64748b' }}>
                        {row.douwan}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13.5px', color: '#64748b' }}>
                        {row.scrcpy}
                      </td>
                      <td style={{ padding: '16px 20px', fontSize: '13.5px', color: '#ef4444' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <X size={15} color="#ef4444" />
                          <span>{row.wifi}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
