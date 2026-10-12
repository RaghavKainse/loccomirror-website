import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ShieldCheck, CheckCircle2, Star, Download, Sparkles } from 'lucide-react';
import { WindowsIcon, AndroidIcon } from './icons/PlatformIcons';

export function Hero({ onOpenNotifyModal }) {
  const [activeFps, setActiveFps] = useState(120);

  const WINDOWS_EXE_URL = "/downloads/LoccoMirror_Setup_v1.0.6.zip";
  const ANDROID_APK_URL = "/downloads/LoccoMirror.apk";

  const triggerConfetti = (platform) => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: platform === 'windows' 
        ? ['#0052d1', '#1769ff', '#ffffff', '#00d4ff']
        : ['#059669', '#10b981', '#ffffff', '#34d399']
    });
  };

  return (
    <section className="hero-section">
      {/* Ambient Top Glow */}
      <div className="hero-ambient-glow" />

      <div className="container-max hero-container">
        <div className="hero-grid">
          {/* Left Column: Simple & Clear Hero Content */}
          <div className="hero-content">
            {/* Minimal Brand Pill */}
            <div className="hero-pill">
              <img src="/logo.png" alt="Locco Mirror" className="hero-pill-logo" />
              <span className="hero-pill-dot" />
              <span className="hero-pill-text">
                Plug &amp; Play USB Mirroring &amp; 4K Webcam
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Mirror Your Phone to PC in 4K Ultra HD.{' '}
              <span className="hero-headline-accent">Zero Lag.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Turn your mobile screen into a lag-free desktop experience with uncompressed game sound. Plug in a single USB cable — zero setup, no root or USB debugging needed.
            </p>

            {/* Clean Download Buttons in Hero Section */}
            <div className="hero-simple-actions">
              {/* Windows 64-bit Download Button */}
              <a
                href={WINDOWS_EXE_URL}
                download="LoccoMirror_Setup_v1.0.6.zip"
                className="hero-simple-btn btn-win-simple"
                onClick={() => triggerConfetti('windows')}
                title="Download Locco Mirror for Windows (64-bit .zip)"
              >
                <WindowsIcon size={20} color="#ffffff" />
                <span className="btn-main-txt">Download for Windows</span>
                <span className="btn-arch-tag">64-bit .ZIP</span>
              </a>

              {/* Android APK Download Button */}
              <a
                href={ANDROID_APK_URL}
                download="LoccoMirror.apk"
                className="hero-simple-btn btn-apk-simple"
                onClick={() => triggerConfetti('android')}
                title="Download Locco Mirror Android APK"
              >
                <AndroidIcon size={20} color="#ffffff" />
                <span className="btn-main-txt">Download for Android</span>
                <span className="btn-arch-tag apk-tag">APK</span>
              </a>
            </div>

            {/* Micro Details */}
            <div className="hero-file-meta">
              <span>Windows 11 / 10 (64-bit • 20.8 MB)</span>
              <span className="meta-sep">•</span>
              <span>Android 6.0+ (14.2 MB)</span>
              <span className="meta-sep">•</span>
              <span className="meta-free">100% Free</span>
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
                <div className="spec-label">Direct Hardware Sync</div>
              </div>
              <div className="spec-card">
                <div className="spec-value">PC &amp; Android</div>
                <div className="spec-label">Universal USB AOA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Visual Showcase */}
          <div className="hero-visual">
            <div className="studio-window-card">
              {/* Window Header */}
              <div className="studio-window-header">
                <div className="studio-window-controls">
                  <span className="window-dot dot-red" />
                  <span className="window-dot dot-yellow" />
                  <span className="window-dot dot-green" />
                  <img src="/logo.png" alt="Locco" className="studio-window-logo" />
                  <span className="studio-window-title">Locco Mirror Studio (64-bit)</span>
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
                  <span>3840x2160 (64-bit GPU)</span>
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

export default Hero;
