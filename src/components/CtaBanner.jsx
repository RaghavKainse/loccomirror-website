import React from 'react';
import confetti from 'canvas-confetti';

export function CtaBanner() {
  const handleDownload = (e) => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0052d1', '#1769ff', '#6000d9', '#7b2cff', '#00ff88'],
    });
  };

  return (
    <section className="cta-banner-section">
      <div className="container-max">
        <div className="cta-banner-card">
          <div className="cta-banner-text">
            <h3 className="font-headline-lg cta-banner-title">
              Ready for flawless, zero-lag phone mirroring?
            </h3>
            <p className="font-body-lg cta-banner-desc">
              Join thousands of streamers, QA engineers, and mobile gamers who rely on Locco Mirror every day.
            </p>
          </div>

          <div className="cta-banner-actions">
            <a
              href="/downloads/LoccoMirror_Setup_v1.0.5.exe"
              download="LoccoMirror_Setup_v1.0.5.exe"
              className="btn-cta-white"
              onClick={handleDownload}
            >
              Download Free Client
            </a>
            <a
              href="#pricing"
              className="btn-cta-ghost"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Pricing Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
