import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  QrCode, 
  ShieldCheck, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';

// Custom Windows 4-pane Logo
function WindowsIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801" />
    </svg>
  );
}

// Custom Android Robot Logo
function AndroidIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.1 12 8.1c-1.8533 0-3.5902.3116-5.1374.8497L4.8403 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  );
}

// Custom Apple Logo
function AppleIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 1.01-2.85-.92.04-2.04.62-2.7 1.39-.58.67-1.09 1.74-1.02 2.78 1.03.08 2.08-.57 2.71-1.32" />
    </svg>
  );
}

export function Downloads({ onOpenNotifyModal }) {
  const [showQrCode, setShowQrCode] = useState(false);
  const [downloadToast, setDownloadToast] = useState(null);

  // Direct local file downloads (guaranteed to download immediately)
  const WINDOWS_EXE_URL = "/downloads/LoccoMirror_Setup_v1.0.5.exe";
  const ANDROID_APK_URL = "/downloads/LoccoMirror.apk";
  const ANDROID_CLOUD_URL = "https://github.com/RaghavKainse/loccomirror/releases/download/v1.0.5/LoccoMirror.apk";

  const handleDownload = (platform, filename) => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: platform === 'windows' ? ['#0078d4', '#ffffff', '#10b981'] : ['#10b981', '#ffffff', '#0078d4']
    });

    setDownloadToast(`Starting download: ${filename}`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 5000);
  };

  return (
    <section id="downloads" style={{ padding: '60px 0 80px', background: '#f8fafc' }}>
      <div className="app-container">
        
        {/* Main Title matching DouWan screenshot */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em' }}>
            Download Now
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem', marginTop: '8px' }}>
            Direct, high-speed downloads for Windows PC and Android phone.
          </p>
        </div>

        {/* Global Toast */}
        {downloadToast && (
          <div
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              background: '#0f172a',
              color: '#ffffff',
              borderRadius: '10px',
              padding: '14px 20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px',
            }}
          >
            <CheckCircle2 size={18} color="#10b981" />
            <span>{downloadToast}</span>
          </div>
        )}

        {/* DouWan Two-Column Container */}
        <div 
          className="clean-card"
          style={{ 
            padding: 'clamp(22px, 5vw, 48px)', 
            background: '#ffffff',
            maxWidth: '1060px',
            margin: '0 auto',
            borderRadius: '16px'
          }}
        >
          <div 
            className="douwan-grid"
            style={{ 
              display: 'flex', 
              gap: '45px', 
              alignItems: 'flex-start' 
            }}
          >
            {/* Left Column: App Icon Box matching DouWan */}
            <div style={{ textAlign: 'center', minWidth: '120px' }}>
              <div className="douwan-app-box" style={{ margin: '0 auto 10px auto' }}>
                <img src="/logo.png" alt="Locco Mirror" />
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', color: '#64748b' }}>
                LOCCO MIRROR
              </div>
            </div>

            {/* Right Column: Platform Categories & Buttons */}
            <div style={{ flex: 1, width: '100%' }}>
              
              {/* CATEGORY 1: DESKTOP */}
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    Locco Mirror · Desktop
                  </h3>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '13.5px', color: '#64748b' }}>
                    <a href="#features" style={{ color: '#64748b', textDecoration: 'none' }}>Features</a>
                    <span>|</span>
                    <a href="#user-guide" style={{ color: '#0078d4', textDecoration: 'none', fontWeight: 600 }}>Connection Guide</a>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  {/* Windows 64-bit Button (DOWNLOADABLE) */}
                  <a
                    href={WINDOWS_EXE_URL}
                    download="LoccoMirror_Setup_v1.0.5.exe"
                    onClick={() => handleDownload('windows', 'LoccoMirror_Setup_v1.0.5.exe')}
                    className="douwan-btn douwan-btn-blue"
                  >
                    <WindowsIcon size={22} color="#ffffff" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '15px', lineHeight: 1.2 }}>
                        Windows 64-bit <span style={{ fontSize: '12px', opacity: 0.85, fontWeight: 400 }}>v1.0.5</span>
                      </div>
                      <div style={{ fontSize: '11px', opacity: 0.85 }}>Windows 10/11 only</div>
                    </div>
                  </a>

                  {/* macOS Button (COMING SOON) */}
                  <button
                    onClick={() => onOpenNotifyModal('macOS')}
                    className="douwan-btn douwan-btn-black"
                  >
                    <AppleIcon size={22} color="#ffffff" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '15px', lineHeight: 1.2 }}>
                        macOS <span style={{ fontSize: '12px', opacity: 0.85, fontWeight: 400 }}>v1.0.0</span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#fde047', fontWeight: 600 }}>Coming Soon</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* CATEGORY 2: MOBILE RECEIVER / COMPANION */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b' }}>
                    Locco Mirror · Mobile Companion
                  </h3>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '13.5px', color: '#64748b' }}>
                    <button 
                      onClick={() => setShowQrCode(!showQrCode)} 
                      style={{ background: 'transparent', border: 'none', color: '#10b981', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      <QrCode size={14} />
                      <span>{showQrCode ? 'Hide QR' : 'Phone QR Scan'}</span>
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  {/* Android APK Button (DOWNLOADABLE) */}
                  <a
                    href={ANDROID_APK_URL}
                    download="LoccoMirror.apk"
                    onClick={() => handleDownload('android', 'LoccoMirror.apk')}
                    className="douwan-btn douwan-btn-green"
                  >
                    <AndroidIcon size={22} color="#ffffff" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '15px', lineHeight: 1.2 }}>
                        Android <span style={{ fontSize: '12px', opacity: 0.85, fontWeight: 400 }}>v1.0.7</span>
                      </div>
                      <div style={{ fontSize: '11px', opacity: 0.9 }}>Direct APK (~14.1 MB)</div>
                    </div>
                  </a>

                  {/* iOS Button (COMING SOON) */}
                  <button
                    onClick={() => onOpenNotifyModal('iPhone / iOS')}
                    className="douwan-btn douwan-btn-blue"
                  >
                    <AppleIcon size={22} color="#ffffff" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '15px', lineHeight: 1.2 }}>
                        iOS <span style={{ fontSize: '12px', opacity: 0.85, fontWeight: 400 }}>(App Store)</span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#fde047', fontWeight: 600 }}>Coming Soon</div>
                    </div>
                  </button>
                </div>

                {/* Optional QR Code Box */}
                {showQrCode && (
                  <div 
                    style={{ 
                      marginTop: '20px', 
                      padding: '16px', 
                      background: '#f8fafc', 
                      borderRadius: '12px', 
                      border: '1px solid #e2e8f0',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '20px'
                    }}
                  >
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(ANDROID_CLOUD_URL)}`}
                      alt="Scan to download APK"
                      style={{ width: '100px', height: '100px', borderRadius: '8px' }}
                    />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: '#1e293b', marginBottom: '4px' }}>
                        Scan to Download APK on Phone
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#64748b', maxWidth: '280px' }}>
                        Point your mobile camera at this QR code to download LoccoMirror.apk directly.
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Bottom Driver Banner */}
          <div 
            style={{ 
              marginTop: '45px', 
              paddingTop: '24px', 
              borderTop: '1px solid #f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              fontSize: '13px',
              color: '#64748b'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} color="#10b981" />
              <span>Universal UsbDk drivers bundled for Realme, Oppo, Vivo, Samsung, Xiaomi & Motorola.</span>
            </div>
            <a 
              href="#user-guide" 
              style={{ color: '#0078d4', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>View Connection Instructions</span>
              <BookOpen size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
