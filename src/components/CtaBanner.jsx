import React from 'react';
import confetti from 'canvas-confetti';
import { WindowsIcon, AndroidIcon } from './icons/PlatformIcons';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export function CtaBanner() {
  const handleDownload = (type) => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: type === 'windows' 
        ? ['#0052d1', '#1769ff', '#ffffff', '#00d4ff']
        : ['#059669', '#10b981', '#ffffff', '#34d399'],
    });
  };

  return (
    <section className="cta-banner-section">
      <div className="container-max">
        <div className="cta-banner-card">
          <div className="cta-banner-text">
            <div className="cta-trust-pill">
              <ShieldCheck size={16} />
              <span>100% Virus-Free &amp; Verified Safe</span>
            </div>
            <h3 className="font-headline-lg cta-banner-title">
              Ready for flawless, zero-lag phone mirroring?
            </h3>
            <p className="font-body-lg cta-banner-desc">
              Join thousands of streamers, QA engineers, and mobile gamers who rely on Locco Mirror every day.
            </p>
          </div>

          <div className="cta-banner-actions">
            <a
              href="/downloads/LoccoMirror_Setup_v1.0.6.zip"
              download="LoccoMirror_Setup_v1.0.6.zip"
              className="btn-cta-white"
              onClick={() => handleDownload('windows')}
              title="Download Windows 64-bit package (.zip)"
            >
              <WindowsIcon size={20} color="#0052d1" />
              <span>Download Windows (.ZIP)</span>
            </a>

            <a
              href="/downloads/LoccoMirror.apk"
              download="LoccoMirror.apk"
              className="btn-cta-green"
              onClick={() => handleDownload('android')}
              title="Download Android APK"
            >
              <AndroidIcon size={20} color="#ffffff" />
              <span>Download Android APK</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
