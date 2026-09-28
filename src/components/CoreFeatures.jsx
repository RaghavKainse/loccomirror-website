import React from 'react';

export function CoreFeatures() {
  const features = [
    {
      icon: 'power',
      colorType: 'primary',
      title: 'Plug & Play',
      desc: 'Enjoy instantaneous mirroring by plugging in your standard phone charge cable. No complicated IP addresses.',
    },
    {
      icon: 'security',
      colorType: 'primary',
      title: 'No USB Debugging',
      desc: 'Zero developer toggle required on Android devices. Keep your operating system secure, enterprise-safe, and uncompromised.',
    },
    {
      icon: 'battery_charging_full',
      colorType: 'primary',
      title: 'Charge & Cast',
      desc: 'High-performance gaming with 2K/4K recording and device fast-charging at the same time without thermal throttling.',
    },
    {
      icon: 'mouse',
      colorType: 'primary',
      title: 'Mouse & Keyboard',
      desc: 'Control your phone with desktop precision. Type fast messages, browse apps, and map customized keys for mobile gaming.',
    },
    {
      icon: 'photo_camera',
      colorType: 'secondary',
      title: 'Phone as 4K Webcam',
      desc: "Outperform expensive standalone webcams. Harness your smartphone's primary sensor with portrait mode depth.",
    },
    {
      icon: 'volume_up',
      colorType: 'primary',
      title: 'Audio Passthrough',
      desc: 'Direct internal sound sync to PC headphones and audio interfaces with zero ground-loop buzz and zero AUX cords.',
    },
    {
      icon: 'hub',
      colorType: 'primary',
      title: 'Up to 128 Devices',
      desc: 'Manage and automate huge phone farms simultaneously. Synchronize clicks and commands across the entire cluster.',
    },
    {
      icon: 'live_tv',
      colorType: 'primary',
      title: 'OBS & Discord Ready',
      desc: 'Direct hardware accelerated window capture and virtual media camera integration. No watermark on Pro subscriptions.',
    },
  ];

  return (
    <section className="core-features-section" id="features">
      <div className="container-max">
        {/* Header */}
        <div className="section-header-center">
          <span className="section-pill-tag">Built For Peak Efficiency</span>
          <h2 className="font-headline-lg section-title">
            Features engineered for creators, gamers, and teams
          </h2>
          <p className="font-body-lg section-subtitle">
            Screen-casting, recording, peripheral control, and multi-device pipelines in one lightweight desktop client.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="features-grid">
          {features.map((feat, index) => (
            <div key={index} className="feature-card">
              <div className={`feature-icon-box ${feat.colorType === 'secondary' ? 'box-secondary' : 'box-primary'}`}>
                <span className="material-symbols-outlined icon-24">{feat.icon}</span>
              </div>
              <h4 className="font-headline-sm feature-card-title">{feat.title}</h4>
              <p className="font-body-sm feature-card-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
