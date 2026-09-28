import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  QrCode, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight,
  Download,
  Sparkles,
  Smartphone,
  Laptop
} from 'lucide-react';

// Custom Windows 4-pane Icon
function WindowsIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801" />
    </svg>
  );
}

// Custom Android Robot Icon
function AndroidIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.1 12 8.1c-1.8533 0-3.5902.3116-5.1374.8497L4.8403 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  );
}

// Custom Apple Icon
function AppleIcon({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.92.04-2.04.62-2.7 1.39-.58.67-1.09 1.74-1.02 2.78 1.03.08 2.08-.57 2.71-1.32" />
    </svg>
  );
}

export function DownloadCenter({ onOpenNotifyModal }) {
  const [showQrCode, setShowQrCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadToast, setDownloadToast] = useState(null);

  // Exact file paths for direct download
  const WINDOWS_EXE_URL = "/downloads/LoccoMirror_Setup_v1.0.5.exe";
  const ANDROID_APK_URL = "/downloads/LoccoMirror.apk";
  const ANDROID_DIRECT_LINK = typeof window !== 'undefined' 
    ? `${window.location.origin}/downloads/LoccoMirror.apk`
    : "https://github.com/RaghavKainse/loccomirror/releases/download/v1.0.5/LoccoMirror.apk";

  const handleDownload = (platform, filename, size) => {
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.65 },
      colors: platform === 'windows' 
        ? ['#0052d1', '#1769ff', '#ffffff', '#00d4ff'] 
        : ['#10b981', '#34d399', '#ffffff', '#0052d1']
    });

    setDownloadToast({
      platform,
      filename,
      size,
    });

    setTimeout(() => {
      setDownloadToast(null);
    }, 6000);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(ANDROID_DIRECT_LINK);
    setCopiedLink(true);
    setTimeout(() => {
      setCopiedLink(false);
    }, 3000);
  };

  return (
    <section className="download-center-section" id="download">
      <div className="container-max">
        {/* Main Title Header */}
        <div className="section-header-center">
          <span className="section-pill-tag">
            <Sparkles size={14} className="tag-sparkle-icon" />
            Official &amp; Digitally Verified Binaries
          </span>
          <h2 className="font-headline-lg section-title">
            Download Locco Mirror
          </h2>
          <p className="font-body-lg section-subtitle">
            Direct high-speed installers for Windows PC and Android phone. Zero bloatware, 100% offline-capable, and hardware-accelerated.
          </p>
        </div>

        {/* Global Live Download Toast Notification */}
        {downloadToast && (
          <div className="download-toast-banner" role="status" aria-live="polite">
            <div className="toast-icon-wrapper">
              <CheckCircle2 size={20} color="#10b981" />
            </div>
            <div className="toast-content">
              <div className="toast-title">Download Started!</div>
              <div className="toast-details">
                {downloadToast.filename} ({downloadToast.size})
              </div>
            </div>
            <button 
              className="toast-close-btn" 
              onClick={() => setDownloadToast(null)}
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        )}

        {/* DouWan Two-Column Container Card */}
        <div className="douwan-main-card">
          <div className="douwan-layout-grid">
            
            {/* Left Column: Official App Icon & Brand Box */}
            <div className="douwan-brand-column">
              <div className="douwan-app-box">
                <img 
                  src="/logo.png" 
                  alt="Locco Mirror App Icon" 
                  className="douwan-logo-image" 
                />
                <div className="douwan-app-shine" />
              </div>

              <div className="douwan-brand-name">LOCCO MIRROR</div>
              <div className="douwan-brand-version">v2.4.1 (Stable)</div>

              {/* Quick Feature Badges */}
              <div className="douwan-badge-list">
                <div className="douwan-badge-item">
                  <span className="douwan-badge-dot dot-green" />
                  <span>&lt; 10ms Direct Pipeline</span>
                </div>
                <div className="douwan-badge-item">
                  <span className="douwan-badge-dot dot-blue" />
                  <span>Universal UsbDk Support</span>
                </div>
                <div className="douwan-badge-item">
                  <span className="douwan-badge-dot dot-purple" />
                  <span>No USB Debugging Needed</span>
                </div>
              </div>
            </div>

            {/* Right Column: Platform Categories & Download Buttons */}
            <div className="douwan-platforms-column">
              
              {/* CATEGORY 1: DESKTOP */}
              <div className="platform-category-block">
                <div className="platform-category-header">
                  <div className="platform-category-title-group">
                    <Laptop size={18} className="category-title-icon" />
                    <h3 className="platform-category-title">
                      Locco Mirror · Desktop (Receiver &amp; Controller)
                    </h3>
                  </div>
                  <div className="platform-category-links">
                    <a href="#features" className="cat-link">Features</a>
                    <span className="cat-divider">|</span>
                    <a href="#faq" className="cat-link cat-link-accent">Connection Guide</a>
                  </div>
                </div>

                <div className="platform-buttons-row">
                  {/* Windows 64-bit Button (DOWNLOADABLE) */}
                  <a
                    href={WINDOWS_EXE_URL}
                    download="LoccoMirror_Setup_v1.0.5.exe"
                    onClick={() => handleDownload('windows', 'LoccoMirror_Setup_v1.0.5.exe', '20.9 MB')}
                    className="douwan-platform-btn btn-windows"
                    title="Download Locco Mirror for Windows 11 / 10"
                  >
                    <div className="btn-icon-box">
                      <WindowsIcon size={24} color="#ffffff" />
                    </div>
                    <div className="btn-label-group">
                      <div className="btn-main-label">
                        Windows 64-bit <span className="btn-version-pill">v1.0.5</span>
                      </div>
                      <div className="btn-sub-label">
                        Windows 11 &amp; 10 • Direct .EXE (20.9 MB)
                      </div>
                    </div>
                    <div className="btn-download-action">
                      <Download size={18} />
                    </div>
                  </a>

                  {/* macOS Button (COMING SOON) */}
                  <button
                    type="button"
                    onClick={() => onOpenNotifyModal && onOpenNotifyModal('macOS Universal')}
                    className="douwan-platform-btn btn-macos"
                    title="Get notified when macOS version releases"
                  >
                    <div className="btn-icon-box">
                      <AppleIcon size={24} color="#ffffff" />
                    </div>
                    <div className="btn-label-group">
                      <div className="btn-main-label">
                        macOS Universal <span className="btn-version-pill soon-pill">Coming Soon</span>
                      </div>
                      <div className="btn-sub-label">
                        Apple Silicon M1-M4 &amp; Intel • Notify Me
                      </div>
                    </div>
                    <div className="btn-arrow-action">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </div>
              </div>

              {/* CATEGORY 2: MOBILE RECEIVER / COMPANION */}
              <div className="platform-category-block">
                <div className="platform-category-header">
                  <div className="platform-category-title-group">
                    <Smartphone size={18} className="category-title-icon" />
                    <h3 className="platform-category-title">
                      Locco Mirror · Mobile Companion &amp; 4K Camera
                    </h3>
                  </div>
                  <div className="platform-category-links">
                    <button 
                      type="button"
                      onClick={() => setShowQrCode(!showQrCode)} 
                      className={`qr-toggle-btn ${showQrCode ? 'active' : ''}`}
                    >
                      <QrCode size={16} />
                      <span>{showQrCode ? 'Hide QR Code' : 'Phone QR Scan'}</span>
                    </button>
                  </div>
                </div>

                <div className="platform-buttons-row">
                  {/* Android APK Button (DOWNLOADABLE) */}
                  <a
                    href={ANDROID_APK_URL}
                    download="LoccoMirror.apk"
                    onClick={() => handleDownload('android', 'LoccoMirror.apk', '14.2 MB')}
                    className="douwan-platform-btn btn-android"
                    title="Download Locco Mirror Android APK"
                  >
                    <div className="btn-icon-box">
                      <AndroidIcon size={24} color="#ffffff" />
                    </div>
                    <div className="btn-label-group">
                      <div className="btn-main-label">
                        Android Apk <span className="btn-version-pill">v1.0.5</span>
                      </div>
                      <div className="btn-sub-label">
                        Direct APK (14.2 MB) • Android 6.0+
                      </div>
                    </div>
                    <div className="btn-download-action">
                      <Download size={18} />
                    </div>
                  </a>

                  {/* iOS Button (COMING SOON) */}
                  <button
                    type="button"
                    onClick={() => onOpenNotifyModal && onOpenNotifyModal('iPhone / iPad')}
                    className="douwan-platform-btn btn-ios"
                    title="Get notified when iOS version releases"
                  >
                    <div className="btn-icon-box">
                      <AppleIcon size={24} color="#ffffff" />
                    </div>
                    <div className="btn-label-group">
                      <div className="btn-main-label">
                        iOS / iPadOS <span className="btn-version-pill soon-pill">Coming Soon</span>
                      </div>
                      <div className="btn-sub-label">
                        Apple App Store • Notify Me
                      </div>
                    </div>
                    <div className="btn-arrow-action">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </div>

                {/* Interactive Expandable Phone QR Scan Box */}
                {showQrCode && (
                  <div className="douwan-qr-panel">
                    <div className="qr-image-wrapper">
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(ANDROID_DIRECT_LINK)}`}
                        alt="Scan QR code to download Locco Mirror APK directly on phone"
                        className="qr-image"
                        width="110"
                        height="110"
                      />
                    </div>
                    <div className="qr-info-content">
                      <div className="qr-title-row">
                        <h4 className="qr-heading">Scan to Download on Phone</h4>
                        <span className="qr-badge">Direct APK Link</span>
                      </div>
                      <p className="qr-instructions">
                        Point your mobile camera or Google Lens at this QR code to download <strong>LoccoMirror.apk</strong> directly onto your Android device without connecting cables first.
                      </p>
                      <div className="qr-actions">
                        <button 
                          type="button" 
                          onClick={handleCopyLink} 
                          className="qr-btn-action"
                        >
                          {copiedLink ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                          <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Copy Direct APK Link'}</span>
                        </button>
                        <a
                          href={ANDROID_APK_URL}
                          download="LoccoMirror.apk"
                          className="qr-btn-action link-only"
                        >
                          <Download size={14} />
                          <span>Direct Browser Download</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Bottom Trust & Driver Reassurance Banner */}
          <div className="douwan-bottom-banner">
            <div className="banner-left-trust">
              <ShieldCheck size={20} className="shield-trust-icon" />
              <span className="trust-text">
                Universal UsbDk drivers bundled: Realme, Oppo, Vivo, Samsung, OnePlus, Xiaomi &amp; Motorola supported.
              </span>
            </div>
            <div className="banner-right-links">
              <span className="trust-pill">100% Offline Capable</span>
              <span className="trust-pill">Direct USB AOA</span>
              <a href="#faq" className="instructions-link">
                <span>View Connection Steps</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DownloadCenter;
