import React from 'react';
import confetti from 'canvas-confetti';
import { WindowsIcon, AndroidIcon } from './icons/PlatformIcons';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function CtaBanner() {
  const triggerDownload = (platform, filename) => {
    window.gtag?.('event', 'download_click', {
      platform,
      file_name: filename,
      location: 'bottom_cta',
    });
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.7 },
      colors: platform === 'windows'
        ? ['#0052d1', '#ffffff', '#10b981']
        : ['#10b981', '#ffffff', '#0052d1'],
    });
  };

  return (
    <section className="cta-banner-section">
      <div className="container-max">
        <div className="cta-banner-card">
          <div className="cta-banner-text">
            <div className="cta-trust-pill">
              <ShieldCheck size={14} />
              <span>v1.0.7 Signed Release • 100% Free Forever</span>
            </div>
            <h2 className="font-headline-lg cta-banner-title">
              Ready to Mirror Your Phone in 4K with Zero Lag?
            </h2>
            <p className="font-body-md cta-banner-desc">
              Download the 1-click Windows installer now, plug in USB, and sign in free with Google inside the app to remove the watermark permanently.
            </p>
          </div>

          <div className="cta-banner-actions">
            <a
              href="/downloads/LoccoMirror_Setup_v1.0.7.exe"
              download="LoccoMirror_Setup_v1.0.7.exe"
              onClick={() => triggerDownload('windows', 'LoccoMirror_Setup_v1.0.7.exe')}
              className="btn-cta-white"
            >
              <WindowsIcon size={18} color="#0052d1" />
              <span>Download Windows (.EXE)</span>
            </a>

            <a
              href="/downloads/LoccoMirror.apk"
              download="LoccoMirror.apk"
              onClick={() => triggerDownload('android', 'LoccoMirror.apk')}
              className="btn-cta-green"
            >
              <AndroidIcon size={18} color="#ffffff" />
              <span>Android APK</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
