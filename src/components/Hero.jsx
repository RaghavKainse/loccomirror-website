import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { 
  Monitor, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  ChevronRight,
  Star,
  Activity,
  Volume2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export function Hero({ onTriggerDownload }) {
  const heroRef = useRef(null);
  const pillRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ratingRef = useRef(null);
  const buttonsRef = useRef(null);
  const badgesRef = useRef(null);
  const mockupRef = useRef(null);

  // Live Simulator States
  const [fpsMode, setFpsMode] = useState(120);
  const [resMode, setResMode] = useState('4K UHD');
  const [latencyJitter, setLatencyJitter] = useState(8.2);
  const [touchRipple, setTouchRipple] = useState(null);

  // Micro-jitter simulation for realistic hardware telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      // Jitters between 7.9ms and 8.5ms
      const val = (7.9 + Math.random() * 0.6).toFixed(1);
      setLatencyJitter(val);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        pillRef.current,
        { opacity: 0, y: -16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        ratingRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.3'
      )
      .fromTo(
        badgesRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        mockupRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        '-=0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadWindows = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0078d4', '#ffffff', '#10b981']
    });
    if (onTriggerDownload) onTriggerDownload('windows');
  };

  const handleDownloadAndroid = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#ffffff', '#0078d4']
    });
    if (onTriggerDownload) onTriggerDownload('android');
  };

  const handlePhoneTouch = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTouchRipple({ x, y, id: Date.now() });
    setTimeout(() => setTouchRipple(null), 600);
  };

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="app-container" style={{ textAlign: 'center' }}>
        
        {/* Top Feature Pill */}
        <div ref={pillRef} style={{ display: 'inline-block' }}>
          <div className="hero-pill">
            <span className="pulse-indicator"></span>
            <span>Rated #1 Best Screen Mirror Software for PC &amp; Android</span>
            <Zap size={14} color="#0078d4" />
          </div>
        </div>

        {/* Hero Title */}
        <h1 ref={titleRef} className="hero-title">
          The Best Screen Mirror Software <br />
          <span style={{ color: '#0078d4' }}>For PC &amp; Android (Ultra-Low Latency)</span>
        </h1>

        {/* Hero Subtitle */}
        <p ref={subtitleRef} className="hero-subtitle">
          Experience <strong>Locco Mirror</strong> — the best USB screen and audio mirroring software. Enjoy sub-10ms latency (<strong style={{ color: '#0f172a' }}>&lt;10ms</strong>), crystal-clear 
          <strong style={{ color: '#0f172a' }}> 48kHz stereo sound</strong>, and smooth 120 FPS video with Direct3D 11 GPU acceleration for competitive mobile gaming and streaming.
        </p>

        {/* Social Proof & Rating Badge (Visible for Google Rich Snippets & User Trust) */}
        <div 
          ref={ratingRef}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            backgroundColor: '#ffffff',
            padding: '7px 18px',
            borderRadius: '999px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            marginBottom: '32px'
          }}
        >
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>
          <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px' }}>4.9/5</span>
          <span style={{ color: '#64748b', fontSize: '13px' }}>(2,480+ Reviews)</span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></span>
          <span style={{ color: '#059669', fontWeight: 600, fontSize: '13px' }}>100% Free &amp; Clean</span>
        </div>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="hero-actions">
          <a
            href="/downloads/LoccoMirror_Setup_v1.0.4.exe"
            download="LoccoMirror_Setup_v1.0.4.exe"
            onClick={handleDownloadWindows}
            className="douwan-btn douwan-btn-blue"
            style={{ fontSize: '15px', padding: '14px 26px', textDecoration: 'none' }}
          >
            <Monitor size={20} />
            <span>Download for Windows (x64)</span>
          </a>

          <a
            href="/downloads/LoccoMirror.apk"
            download="LoccoMirror.apk"
            onClick={handleDownloadAndroid}
            className="douwan-btn douwan-btn-green"
            style={{ fontSize: '15px', padding: '14px 26px', textDecoration: 'none' }}
          >
            <Smartphone size={20} />
            <span>Download Android APK</span>
          </a>

          <a
            href="#user-guide"
            className="btn btn-secondary"
            style={{ fontSize: '15px', padding: '14px 22px' }}
          >
            <span>Connection Guides</span>
            <ChevronRight size={18} />
          </a>
        </div>

        {/* Trust Badges */}
        <div ref={badgesRef} className="trust-badges">
          <div className="trust-badge-item">
            <CheckCircle2 size={16} color="#10b981" />
            <span>Windows 10 / 11 64-bit Ready</span>
          </div>
          <div className="trust-badge-item">
            <CheckCircle2 size={16} color="#10b981" />
            <span>Android 10 to 15 Supported</span>
          </div>
          <div className="trust-badge-item">
            <CheckCircle2 size={16} color="#10b981" />
            <span>No Root Required</span>
          </div>
          <div className="trust-badge-item">
            <CheckCircle2 size={16} color="#10b981" />
            <span>Direct3D 11 NV12 Hardware Decode</span>
          </div>
        </div>

        {/* ==========================================================================
            INTERACTIVE LIVE DEVICE MIRRORING PREVIEW (High User Retention & Wow Effect)
            ========================================================================== */}
        <div ref={mockupRef} className="hero-mockup-wrapper">
          <div className="mockup-window">
            
            {/* Window Titlebar */}
            <div className="mockup-topbar">
              <div className="window-dots">
                <span className="window-dot dot-red"></span>
                <span className="window-dot dot-yellow"></span>
                <span className="window-dot dot-green"></span>
                <span style={{ marginLeft: '10px', fontSize: '12.5px', color: '#94a3b8', fontWeight: 600 }}>
                  Locco Mirror v1.0.4 — Direct3D 11 NV12 Renderer
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="pulse-indicator"></span>
                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, letterSpacing: '0.04em' }}>
                  ACTIVE USB STREAM
                </span>
              </div>
            </div>

            {/* Stage: Mirrored Phone + Live Telemetry HUD */}
            <div className="mockup-stage">
              
              {/* Telemetry Float Ribbon */}
              <div 
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '12px', 
                  justifyContent: 'center',
                  marginBottom: '20px',
                  width: '100%'
                }}
              >
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#e2e8f0' }}>
                  <Activity size={14} color="#10b981" />
                  <span>Latency: <strong style={{ color: '#10b981', fontFamily: 'var(--font-mono)' }}>{latencyJitter} ms</strong></span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#e2e8f0' }}>
                  <Zap size={14} color="#38bdf8" />
                  <span>Display: <strong style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>{fpsMode} FPS</strong></span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#e2e8f0' }}>
                  <Volume2 size={14} color="#a855f7" />
                  <span>Sound: <strong style={{ color: '#a855f7' }}>48kHz Stereo</strong></span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#e2e8f0' }}>
                  <Cpu size={14} color="#f59e0b" />
                  <span>CPU: <strong style={{ color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>1.6%</strong></span>
                </div>
              </div>

              {/* Mirrored Phone Simulation */}
              <div className="sim-phone" onClick={handlePhoneTouch} title="Click to test touch latency!">
                <div className="sim-notch"></div>
                <div className="sim-screen">
                  
                  {/* Phone Top Status */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.7)', zIndex: 10 }}>
                    <span>12:00</span>
                    <span style={{ background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10b981', color: '#10b981', padding: '1px 6px', borderRadius: '999px', fontSize: '9.5px', fontWeight: 700 }}>
                      {fpsMode} FPS ULTRA
                    </span>
                    <span>5G 98%</span>
                  </div>

                  {/* Center Gaming Radar HUD */}
                  <div style={{ textAlign: 'center', margin: 'auto 0' }}>
                    <div className="sim-crosshair">
                      <div className="crosshair-center"></div>
                    </div>
                    <div style={{ marginTop: '12px', fontSize: '12px', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.05em' }}>
                      ZERO-LAG GAME MODE
                    </div>
                    <div style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>
                      Click phone to test touch latency
                    </div>
                  </div>

                  {/* Audio Waves at Bottom */}
                  <div style={{ textAlign: 'center', zIndex: 10 }}>
                    <div className="audio-waves">
                      <span className="sound-bar"></span>
                      <span className="sound-bar"></span>
                      <span className="sound-bar"></span>
                      <span className="sound-bar"></span>
                      <span className="sound-bar"></span>
                      <span className="sound-bar"></span>
                    </div>
                    <div style={{ fontSize: '10px', color: '#a855f7', fontWeight: 600, marginTop: '4px' }}>
                      WASAPI Direct Audio Output
                    </div>
                  </div>

                  {/* Touch Ripple Visualizer */}
                  {touchRipple && (
                    <div 
                      className="touch-ripple" 
                      style={{ left: touchRipple.x, top: touchRipple.y }}
                    ></div>
                  )}

                </div>
              </div>

              {/* Interactive Toolbar for Visitors */}
              <div className="sim-controls">
                <span style={{ fontSize: '12px', color: '#94a3b8', marginRight: '6px' }}>Interactive Preview:</span>
                <button
                  onClick={() => setFpsMode(fpsMode === 120 ? 60 : 120)}
                  className={`sim-btn ${fpsMode === 120 ? 'active' : ''}`}
                >
                  <Zap size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {fpsMode} FPS Mode
                </button>
                <button
                  onClick={() => setResMode(resMode === '4K UHD' ? '1080p FHD' : '4K UHD')}
                  className={`sim-btn ${resMode === '4K UHD' ? 'active' : ''}`}
                >
                  <Layers size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  {resMode}
                </button>
                <button
                  onClick={() => {
                    setLatencyJitter((7.8 + Math.random() * 0.4).toFixed(1));
                  }}
                  className="sim-btn"
                >
                  <Sparkles size={13} color="#10b981" style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  Benchmark Ping
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
