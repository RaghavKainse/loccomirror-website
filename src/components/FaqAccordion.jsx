import React, { useState } from 'react';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Does Locco require Wi-Fi or a mobile hotspot?',
      a: 'No. Just plug in a standard USB charging cable to mirror instantly — no hotspot or Wi-Fi required, and zero USB debugging needed on Android. For wireless mode, both devices simply need to be connected to the same local Wi-Fi router.',
    },
    {
      q: 'Which operating systems and phone models are supported?',
      a: 'Locco supports iPhone, iPad, and all modern Android devices running Android 6.0 and above. On the host computer, Locco runs flawlessly on Windows 10/11 (64-bit) as well as macOS (both Apple Silicon M1/M2/M3 and Intel chips). Up to 128 devices can be mirrored concurrently for studio batch operations.',
    },
    {
      q: 'How low is the latency compared to standard AirPlay or Miracast?',
      a: "Traditional AirPlay and Miracast exhibit 80ms–200ms latency, making games and mouse interaction sluggish. Locco's proprietary direct hardware pipeline pushes wired USB latency under 15ms at 60~120fps, providing instantaneous tactile response for competitive mobile gaming and fast keyboard typing.",
    },
    {
      q: 'Can I use my smartphone as a PC webcam without an internet connection?',
      a: 'Yes! With Locco Camera installed, you connect your phone over USB and select "Locco Media Camera" inside Zoom, Discord, OBS, or Microsoft Teams. Video transmission remains 100% offline and point-to-point, ensuring both strict data privacy and zero ISP bandwidth consumption.',
    },
    {
      q: 'Is Locco free? What is included with Pro VIP?',
      a: 'Locco includes a robust free edition that allows unlimited low-latency screen mirroring and basic testing. The Pro VIP license is $9.99 per 12 months, unlocking unlimited 4K video recording, zero watermark, 10 simultaneous device connections, and includes a full license to Locco 4K Camera at no extra cost.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container-max faq-container">
        {/* Header */}
        <div className="section-header-center">
          <span className="section-pill-tag">Got Questions?</span>
          <h2 className="font-headline-lg section-title">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md section-subtitle">
            Everything you need to know about setting up and using Locco Mirror &amp; Camera.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-card ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-headline-sm faq-question-text">{faq.q}</span>
                  <span className={`material-symbols-outlined faq-chevron ${isOpen ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-panel font-body-md">
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
