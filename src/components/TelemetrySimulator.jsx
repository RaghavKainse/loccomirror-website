import React from 'react';
import { Zap, Check, AlertTriangle, X, Activity } from 'lucide-react';

export function TelemetrySimulator() {
  return (
    <section id="telemetry" style={{ padding: '70px 0 80px', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="app-container">
        
        {/* Simple Centered Heading */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px' }}>
            <Activity size={14} />
            <span>Speed & Latency</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: '10px' }}>
            Ultra-Low Latency Performance
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
            Locco Mirror routes video and sound directly through USB hardware for zero-lag gaming.
          </p>
        </div>

        {/* 3 Simple Comparison Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', maxWidth: '1060px', margin: '0 auto' }}>
          
          {/* Card 1: Locco Mirror (BEST) */}
          <div 
            className="clean-card" 
            style={{ 
              padding: '30px 24px', 
              border: '2px solid #0078d4',
              borderRadius: '16px',
              background: '#ffffff',
              boxShadow: '0 10px 25px -5px rgba(0, 120, 212, 0.12)',
              position: 'relative'
            }}
          >
            <div style={{ position: 'absolute', top: '-12px', left: '24px', background: '#0078d4', color: '#ffffff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Fastest (Recommended)
            </div>

            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
              Locco Mirror (USB Direct3D 11)
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: '#0078d4', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                8.4
              </span>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0078d4' }}>ms</span>
            </div>

            <div style={{ fontSize: '13px', color: '#10b981', fontWeight: 600, marginBottom: '20px' }}>
              ✓ Instant Response (Zero-Lag)
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="#10b981" />
                <span><strong>60+ FPS</strong> rock solid framerate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="#10b981" />
                <span><strong>Uncompressed 48kHz</strong> game sound</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="#10b981" />
                <span><strong>&lt;2% CPU</strong> hardware acceleration</span>
              </div>
            </div>
          </div>

          {/* Card 2: Standard Scrcpy */}
          <div 
            className="clean-card" 
            style={{ 
              padding: '30px 24px', 
              borderRadius: '16px',
              background: '#ffffff',
              border: '1px solid #e2e8f0'
            }}
          >
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
              Standard Scrcpy (ADB)
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: '#64748b', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                35.0
              </span>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#64748b' }}>ms</span>
            </div>

            <div style={{ fontSize: '13px', color: '#d97706', fontWeight: 600, marginBottom: '20px' }}>
              ⚠ Moderate Delay
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="#64748b" />
                <span>55-60 FPS framerate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="#64748b" />
                <span>Compressed Opus audio stream</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertTriangle size={16} color="#d97706" />
                <span>Software presentation overhead</span>
              </div>
            </div>
          </div>

          {/* Card 3: Wireless Screen Mirroring */}
          <div 
            className="clean-card" 
            style={{ 
              padding: '30px 24px', 
              borderRadius: '16px',
              background: '#ffffff',
              border: '1px solid #e2e8f0'
            }}
          >
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
              Wireless Cast (Wi-Fi)
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 800, color: '#ef4444', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                185+
              </span>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ef4444' }}>ms</span>
            </div>

            <div style={{ fontSize: '13px', color: '#ef4444', fontWeight: 600, marginBottom: '20px' }}>
              ✕ Noticeable Lag & Jitter
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <X size={16} color="#ef4444" />
                <span>Frequent frame drops (30-45 FPS)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <X size={16} color="#ef4444" />
                <span>Audio desync (80ms+ lag)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <X size={16} color="#ef4444" />
                <span>High Wi-Fi network congestion</span>
              </div>
            </div>
          </div>

        </div>

        {/* Visual Latency Comparison Bar */}
        <div 
          className="clean-card"
          style={{ 
            marginTop: '36px', 
            padding: '24px 30px', 
            maxWidth: '1060px', 
            margin: '36px auto 0 auto',
            borderRadius: '14px'
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e293b', marginBottom: '16px' }}>
            Latency Comparison (Lower is Faster):
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Locco Mirror Bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                <strong style={{ color: '#0078d4' }}>Locco Mirror (USB)</strong>
                <strong style={{ color: '#0078d4', fontFamily: 'var(--font-mono)' }}>8.4 ms</strong>
              </div>
              <div style={{ height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '8%', height: '100%', background: '#0078d4', borderRadius: '5px' }}></div>
              </div>
            </div>

            {/* Scrcpy Bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                <span style={{ color: '#475569' }}>Standard Scrcpy</span>
                <span style={{ color: '#64748b', fontFamily: 'var(--font-mono)' }}>35.0 ms</span>
              </div>
              <div style={{ height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '25%', height: '100%', background: '#94a3b8', borderRadius: '5px' }}></div>
              </div>
            </div>

            {/* Wireless Bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '5px' }}>
                <span style={{ color: '#ef4444' }}>Wireless Casting</span>
                <span style={{ color: '#ef4444', fontFamily: 'var(--font-mono)' }}>185.0 ms</span>
              </div>
              <div style={{ height: '10px', background: '#e2e8f0', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: '#ef4444', borderRadius: '5px' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
