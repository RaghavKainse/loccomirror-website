import React from 'react';

export function DualProductHighlight() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="dual-product-section" id="about">
      <div className="container-max">
        {/* Section Header */}
        <div className="section-header-center">
          <h2 className="font-headline-lg section-title">
            All-in-One Phone Mirroring &amp; Webcam Solution
          </h2>
          <p className="font-body-lg section-subtitle">
            Engineered for creators, professional broadcasters, mobile gamers, and multi-device QA labs.
          </p>
        </div>

        {/* 2 Big Product Cards */}
        <div className="dual-product-grid">
          {/* Card 1: Locco Screen Mirroring */}
          <div className="product-card">
            <div className="product-card-body">
              <div className="product-icon-wrap icon-primary">
                <span className="material-symbols-outlined icon-28">cast</span>
              </div>

              <div className="product-card-header">
                <h3 className="font-headline-md product-title">Locco Screen Mirroring</h3>
                <span className="product-pill pill-primary">Zero Lag</span>
              </div>

              <p className="font-body-md product-desc">
                A plug-and-play screen mirroring and recording suite. Mirror your iPhone, iPad, or Android phone to a Windows PC or Mac with a standard charging cable — no Wi-Fi, no hotspot, and zero developer options required.
              </p>

              <ul className="product-checklist">
                <li>
                  <span className="material-symbols-outlined icon-20 check-primary">check_circle</span>
                  <span>iOS &amp; Android, wired USB &amp; auto-discovery wireless</span>
                </li>
                <li>
                  <span className="material-symbols-outlined icon-20 check-primary">check_circle</span>
                  <span>2K/4K Ultra HD at up to 120fps with wired latency &lt;10ms</span>
                </li>
                <li>
                  <span className="material-symbols-outlined icon-20 check-primary">check_circle</span>
                  <span>Simultaneous high-bitrate recording + phone fast-charging</span>
                </li>
                <li>
                  <span className="material-symbols-outlined icon-20 check-primary">check_circle</span>
                  <span>Mirror and control up to 128 devices simultaneously</span>
                </li>
              </ul>
            </div>

            <div className="product-card-footer">
              <span className="product-footer-note">Free version available • Pro from $9.99/yr</span>
              <a
                href="#features"
                className="product-footer-link link-primary"
                onClick={(e) => { e.preventDefault(); scrollTo('#features'); }}
              >
                Explore Mirroring →
              </a>
            </div>
          </div>

          {/* Card 2: Locco 4K Camera */}
          <div className="product-card">
            <div className="product-card-body">
              <div className="product-icon-wrap icon-secondary">
                <span className="material-symbols-outlined icon-28">photo_camera</span>
              </div>

              <div className="product-card-header">
                <h3 className="font-headline-md product-title">Locco 4K Camera</h3>
                <span className="product-pill pill-secondary">Studio Grade</span>
              </div>

              <p className="font-body-md product-desc">
                Transform your smartphone’s high-end multi-lens sensor array into a pristine 4K PC webcam. Delivers razor-sharp optical depth, front/rear lens switching, and hardware-accelerated H.265 compression.
              </p>

              <ul className="product-checklist">
                <li>
                  <span className="material-symbols-outlined icon-20 check-secondary">check_circle</span>
                  <span>4K/60fps with H.265 low-latency encoding</span>
                </li>
                <li>
                  <span className="material-symbols-outlined icon-20 check-secondary">check_circle</span>
                  <span>Instant plug-and-play driver recognized across all apps</span>
                </li>
                <li>
                  <span className="material-symbols-outlined icon-20 check-secondary">check_circle</span>
                  <span>Works natively in OBS Studio, Zoom, Discord, Google Meet</span>
                </li>
                <li>
                  <span className="material-symbols-outlined icon-20 check-secondary">check_circle</span>
                  <span>100% direct local transmission — video never hits the cloud</span>
                </li>
              </ul>
            </div>

            <div className="product-card-footer">
              <span className="product-footer-note">Bundled free with Locco Mirror Pro</span>
              <a
                href="#camera-features"
                className="product-footer-link link-secondary"
                onClick={(e) => { e.preventDefault(); scrollTo('#camera-features'); }}
              >
                Explore Camera →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
