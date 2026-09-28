import React from 'react';

export function CameraCallout() {
  return (
    <section className="camera-callout-section" id="camera-features">
      <div className="container-max">
        <div className="camera-callout-grid">
          {/* Left Column: Information */}
          <div className="camera-callout-text">
            <div className="camera-callout-badge">
              <span>LOCCO CAMERA ENGINE</span>
            </div>

            <h3 className="font-headline-lg camera-callout-title">
              Not just a camera — the entire multi-lens smartphone system, on PC.
            </h3>

            <p className="font-body-md camera-callout-desc">
              Built-in PC webcams suffer from grainy sensors and poor low-light response. Locco Camera bridges your smartphone’s high-aperture optics directly into your production rig with direct local transmission.
            </p>

            <div className="camera-callout-features">
              <div className="camera-feature-item">
                <span className="material-symbols-outlined icon-24 text-secondary">flip_camera_ios</span>
                <div>
                  <span className="font-label-lg feature-bold-title">Front &amp; Rear Lens Toggle</span>
                  <span className="font-body-sm feature-sub-desc">
                    Switch seamlessly between main 4K shooter and ultra-wide selfie view with a single click.
                  </span>
                </div>
              </div>

              <div className="camera-feature-item">
                <span className="material-symbols-outlined icon-24 text-secondary">lock</span>
                <div>
                  <span className="font-label-lg feature-bold-title">Direct Local Stream Privacy</span>
                  <span className="font-body-sm feature-sub-desc">
                    Video bytes never leave your local USB link or Wi-Fi network. Zero third-party cloud routing.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Studio Showcase */}
          <div className="camera-callout-visual">
            <div className="camera-preview-card">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpohEhjwUldjYAAdEnMn5VJJMtndtvB4SLkUKaG4-hrUCk12zRkxdUJTNjCT5rHg5oddlpDI1NdhSG77mfty3lCRN8h7AuyBsQLf3R_8oYj00u8cBbz-8-dCil16aYdL_-NyAjxg7M53b6MKi0IttOOuo0i3XH4aXv2UXTVGDpjCGyvgy7_pQfJksHspnR3ioRwNM2FkNcG_lCnvjG4g0qf3e1PAwOB7ftnrRNLui0jVNaW20Kpzg2"
                alt="Locco Camera Studio WebCam Setup with OBS and Zoom"
                className="camera-preview-img"
              />

              <div className="camera-specs-trio">
                <div className="spec-trio-box">
                  <div className="font-label-lg font-bold text-secondary">4K / 60 FPS</div>
                  <div className="font-label-sm text-muted">Ultra HD Clarity</div>
                </div>
                <div className="spec-trio-box">
                  <div className="font-label-lg font-bold text-secondary">H.265 HW</div>
                  <div className="font-label-sm text-muted">GPU Acceleration</div>
                </div>
                <div className="spec-trio-box">
                  <div className="font-label-lg font-bold text-secondary">Universal</div>
                  <div className="font-label-sm text-muted">Virtual Camera Driver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
