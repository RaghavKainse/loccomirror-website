import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export function Hero({ onOpenNotifyModal }) {
  const [activeFps, setActiveFps] = useState(120);
  const [isCopied, setIsCopied] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#0052d1', '#1769ff', '#6000d9', '#7b2cff', '#00ff88'],
    });
  };

  const handleDownloadWindows = (e) => {
    triggerConfetti();
  };

  return (
    <section className="hero-section">
      {/* Top Ambient Light Glow */}
      <div className="hero-ambient-glow" />

      <div className="container-max hero-container">
        <div className="hero-grid">
          {/* Left Column: Hero Text & Controls */}
          <div className="hero-content">
            {/* Live Tag Pill */}
            <div className="hero-pill">
              <img src="/logo.png" alt="Locco Mirror" className="hero-pill-logo" />
              <span className="hero-pill-dot" />
              <span className="hero-pill-text">
                Plug &amp; Play Screen Mirroring &amp; 4K Webcam
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Mirror Your Phone to PC in 4K Ultra HD.{' '}
              <span className="hero-headline-accent">Wired or Wireless.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Turn your small screen into a lag-free desktop experience. Plug in a single USB cable or connect wirelessly — zero setup, no USB debugging needed on Android.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a
                href="/downloads/LoccoMirror_Setup_v1.0.5.exe"
                download="LoccoMirror_Setup_v1.0.5.exe"
                className="btn-primary"
                onClick={handleDownloadWindows}
              >
                <span className="material-symbols-outlined icon-20">download</span>
                <span>Download for Windows</span>
              </a>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => onOpenNotifyModal && onOpenNotifyModal('macOS')}
              >
                <span className="material-symbols-outlined icon-20">laptop_mac</span>
                <span>Download for Mac</span>
              </button>

              <a
                href="#about"
                className="hero-learn-more"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More →
              </a>
            </div>

            {/* Quick Specs 4-Card Strip */}
            <div className="hero-specs-grid">
              <div className="spec-card">
                <div className="spec-value">4K UHD</div>
                <div className="spec-label">Lossless Clarity</div>
              </div>
              <div className="spec-card">
                <div className="spec-value">120 FPS</div>
                <div className="spec-label">Silky Refresh Rate</div>
              </div>
              <div className="spec-card">
                <div className="spec-value">&lt; 10ms</div>
                <div className="spec-label">Direct Hardware Pipeline</div>
              </div>
              <div className="spec-card">
                <div className="spec-value"> Android</div>
                <div className="spec-label">Universal Compatibility</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Visual Showcase */}
          <div className="hero-visual">
            <div className="studio-window-card">
              {/* Window Header */}
              <div className="studio-window-header">
                <div className="studio-window-controls">
                  <span className="window-dot dot-red" />
                  <span className="window-dot dot-yellow" />
                  <span className="window-dot dot-green" />
                  <img src="/logo.png" alt="Locco" className="studio-window-logo" />
                  <span className="studio-window-title">Locco Mirror Studio v2.4</span>
                </div>
                <div className="studio-window-badge">
                  <button
                    type="button"
                    className={`fps-toggle-btn ${activeFps === 60 ? 'active' : ''}`}
                    onClick={() => setActiveFps(60)}
                  >
                    60 FPS
                  </button>
                  <button
                    type="button"
                    className={`fps-toggle-btn ${activeFps === 120 ? 'active' : ''}`}
                    onClick={() => setActiveFps(120)}
                  >
                    120 FPS
                  </button>
                  <span className="latency-stat">• 8.4ms</span>
                </div>
              </div>

              {/* Viewport Screen Content */}
              <div className="studio-viewport">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoic_m-qe8CVVqjHOND5Y0n4pV8VwGzNM4-SPBshbEHUnIXE9LWdUsDdWxU75xaFlEQRw_FyiKGVMBo3webIu5DaUKYtqzNskKstsDcNFNvFgVa19S0MRNKcMb9GjDlrnBrIGIJfvKoaLJy8qsH6aLjDpulVN_ABUpMPjkhnZ4GZiQk5-CmRj8HsNa5JVpmZH9W5ls_PFhIi25ejIsuyDXWEPhrCLfd0WwQU8RKoUsyyrj4zgUl2Nl"
                  alt="Locco Mirror High-FPS Mobile Screen Mirroring to PC"
                  className="studio-preview-image"
                />

                {/* Live Overlay Pill */}
                <div className="studio-live-overlay">
                  <span className="live-ping-dot" />
                  <span className="live-tag-text">USB 3.2 DIRECT STREAM</span>
                </div>

                {/* Telemetry Badge */}
                <div className="studio-telemetry-badge">
                  <span>3840x2160</span>
                  <span className="telemetry-separator">•</span>
                  <span className="telemetry-success">0 DROP FRAMES</span>
                </div>
              </div>

              {/* Virtual Control Floating Bar */}
              <div className="studio-bottom-bar">
                <div className="studio-bottom-left">
                  <span className="material-symbols-outlined icon-18 text-primary">usb</span>
                  <span>Direct H.265 Hardware Sync</span>
                </div>
                <div className="studio-bottom-right">
                  <span className="material-symbols-outlined icon-18 text-primary">keyboard</span>
                  <span>PC Control Ready</span>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Card: Locco 4K Camera */}
            <div className="camera-floating-card">
              <div className="camera-card-icon">
                <span className="material-symbols-outlined icon-24">videocam</span>
              </div>
              <div>
                <div className="camera-card-title">Locco 4K Camera</div>
                <p className="camera-card-desc">
                  Instant studio webcam in OBS, Discord, and Zoom. 100% direct connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
