import React, { useState } from 'react';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Is Locco Mirror really 100% free? Why is there a watermark in guest mode?',
      a: 'Yes! Locco Mirror is 100% free forever with unlimited 4K mirroring, 60-120 FPS streaming, internal game audio, keyboard/mouse control, and OBS Virtual Camera. Guest mode displays a small watermark — simply sign in once with your free Google account inside the Windows app and the watermark is removed instantly (no credit card or payment required).',
    },
    {
      q: 'Does Locco require Wi-Fi, root, or USB Debugging on Android?',
      a: 'No root and no Developer Options / USB Debugging required. Just plug in your regular USB charging cable and Locco Mirror connects over Direct USB (AOA 2.0) in seconds. You can also connect wirelessly on the same Wi-Fi.',
    },
    {
      q: 'Should I download the Windows app, the Android APK, or both?',
      a: 'Start with the 1-click Windows Setup (.exe) on your PC. When you plug your Android phone in via USB, the PC app can guide or install the companion APK automatically — or you can download LoccoMirror.apk directly onto your phone from the Android button above.',
    },
    {
      q: 'Why did my PC run smoothly with low GPU load and internal game sound?',
      a: 'Locco Mirror decodes H.264/H.265 using Direct3D 11 hardware acceleration on your primary display GPU and captures internal Android system/game sound at 48kHz stereo PCM without AUX cables or Bluetooth delay.',
    },
    {
      q: 'Can I use my phone as a 4K webcam in OBS Studio, Discord, or Zoom?',
      a: 'Yes! Open the Camera tab inside Locco Mirror, enable the Virtual Camera driver, and select "Locco Media Camera" directly in OBS Studio, Discord, Zoom, or Google Meet.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container-max faq-container">
        <div className="section-header-center">
          <span className="section-pill-tag">Common Questions</span>
          <h2 className="font-headline-lg section-title">
            Frequently Asked Questions
          </h2>
          <p className="font-body-lg section-subtitle">
            Everything you need to start mirroring your Android screen to Windows PC in under 30 seconds.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-card ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="font-headline-sm faq-question-text">{faq.q}</span>
                  <span className={`material-symbols-outlined faq-chevron ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="font-body-md faq-answer-panel">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
