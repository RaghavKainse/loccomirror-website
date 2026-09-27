import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import confetti from 'canvas-confetti';
import { 
  Download, 
  Monitor, 
  Smartphone, 
  Zap, 
  Activity, 
  Volume2, 
  Cpu, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Usb
} from 'lucide-react';

export function Hero({ onTriggerDownload }) {
  const heroRef = useRef(null);
  const pillRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const badgesRef = useRef(null);
  const mockupRef = useRef(null);

  const [activeMode, setActiveMode] = useState('aoa'); // 'aoa' | 'adb'
  const [telemetryFps, setTelemetryFps] = useState(60.0);
  const [telemetryLatency, setTelemetryLatency] = useState(8.4);

  // Realistic micro-fluctuations in latency & FPS to show live engine telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      const baseLat = activeMode === 'aoa' ? 8.2 : 9.1;
      const jitter = (Math.random() * 0.5 - 0.25).toFixed(1);
      setTelemetryLatency((parseFloat(baseLat) + parseFloat(jitter)).toFixed(1));
      
      const fpsJitter = (59.8 + Math.random() * 0.4).toFixed(1);
      setTelemetryFps(fpsJitter);
    }, 1800);

    return () => clearInterval(interval);
  }, [activeMode]);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        pillRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.5'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.6'
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        badgesRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        mockupRef.current,
        { opacity: 0, y: 50, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'back.out(1.2)' },
        '-=0.6'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadWindows = (e) => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#dbee00', '#ffffff', '#8459cf']
    });
    if (onTriggerDownload) onTriggerDownload('windows');
  };

  const handleDownloadAndroid = (e) => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#3ddc84', '#ffffff', '#dbee00']
    });
    if (onTriggerDownload) onTriggerDownload('android');
  };

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="app-container" style={{ textAlign: 'center' }}>
        
        {/* Top Feature Pill */}
        <div ref={pillRef} style={{ display: 'inline-block' }}>
          <div className="hero-pill">
            <span className="pulse-indicator"></span>
            <span>Locco Mirror 1.0 — Real-Time USB Screen & Uncompressed Audio</span>
            <Zap size={14} color="#dbee00" />
          </div>
        </div>

        {/* Hero Title */}
        <h1 ref={titleRef} style={{ fontSize: '3.6rem', fontWeight: 800, color: '#0f172a', margin: '0 auto 20px auto', letterSpacing: '-0.035em', lineHeight: 1.15 }}>
          Real-Time Screen & Audio Mirroring <br />
          <span style={{ color: '#0078d4' }}>At The Speed of Light.</span>
        </h1>

        {/* Hero Subtitle */}
        <p ref={subtitleRef} style={{ fontSize: '1.2rem', color: '#475569', margin: '0 auto 36px auto', maxWidth: '780px', lineHeight: 1.6 }}>
          Real-time, ultra-low latency (<strong style={{ color: '#0f172a' }}>&lt;10ms</strong>) screen and uncompressed 
          <strong style={{ color: '#0f172a' }}> 48kHz PCM audio</strong> mirroring from your phone to Windows over USB. 
          Zero third-party wrappers, zero CPU copies on the GPU pipeline, and Direct3D 11 hardware presentation.
        </p>

        {/* Action Buttons */}
        <div ref={buttonsRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginBottom: '45px' }}>
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
        <div 
          ref={badgesRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            color: 'var(--text-muted)',
            fontSize: '13.5px',
            marginBottom: '60px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={16} color="#dbee00" />
            <span>Windows 10 / 11 64-bit Ready</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={16} color="#dbee00" />
            <span>Android 10 to 14+ Supported</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={16} color="#dbee00" />
            <span>No Root Required</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={16} color="#dbee00" />
            <span>Direct3D 11 NV12 Hardware Decode</span>
          </div>
        </div>
      </div>
    </section>
  );
}
