import React from 'react';

export function PerformanceGrid() {
  const cards = [
    {
      icon: 'high_density',
      color: 'primary',
      title: 'Native 4K UHD @ 120 FPS',
      badge: 'Ultra HD',
      desc: 'Silky-smooth high-refresh rate screen mirroring with true color passthrough and zero frame drops.',
    },
    {
      icon: 'verified',
      color: 'primary',
      title: 'Zero Watermark & No Time Limit',
      badge: 'Unrestricted',
      desc: 'Record, broadcast, and mirror without irritating overlay watermarks or artificial session caps.',
    },
    {
      icon: 'usb',
      color: 'primary',
      title: 'USB 3.2 Direct Wired & Fast Wireless',
      badge: '<10ms',
      desc: 'Plug-and-play instant hardware handshake or low-latency dual-band Wi-Fi connection.',
    },
    {
      icon: 'keyboard',
      color: 'primary',
      title: 'Full Keyboard & Mouse Passthrough',
      badge: 'Precision',
      desc: 'Type into mobile apps, map keys, and navigate with desktop precision and clipboard sync.',
    },
    {
      icon: 'videocam',
      color: 'secondary',
      title: 'Studio-Grade Virtual Camera',
      badge: 'Studio Pro',
      desc: 'Direct OBS Studio, Discord, and Zoom driver support without external capture cards.',
    },
    {
      icon: 'bolt',
      color: 'primary',
      title: 'Simultaneous Fast-Charge & Multi-Cast',
      badge: 'No Throttling',
      desc: 'Mirror while powering your device without thermal throttling, supporting multi-device pipelines.',
    },
  ];

  return (
    <section className="performance-section" id="pricing">
      <div className="container-max">
        {/* Header */}
        <div className="section-header-center">
          <span className="section-pill-tag">Unmatched Performance</span>
          <h2 className="font-headline-lg section-title">
            All Features Included — Full 4K 120 FPS
          </h2>
          <p className="font-body-lg section-subtitle">
            Experience true uncompressed 4K streaming up to 120 frames per second with zero latency penalties and no watermarks.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="performance-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="performance-card">
              <div className={`perf-icon-box ${card.color === 'secondary' ? 'box-secondary' : 'box-primary'}`}>
                <span className="material-symbols-outlined icon-28">{card.icon}</span>
              </div>
              <div className="perf-content">
                <div className="perf-title-row">
                  <h3 className="font-headline-sm perf-title">{card.title}</h3>
                  <span className={`perf-pill ${card.color === 'secondary' ? 'pill-secondary' : 'pill-primary'}`}>
                    {card.badge}
                  </span>
                </div>
                <p className="font-body-sm perf-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
