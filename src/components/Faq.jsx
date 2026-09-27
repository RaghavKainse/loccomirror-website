import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Does Locco Mirror stream mobile audio as well as video?',
      a: 'Yes! Unlike older tools that only capture screen video or require AUX cables/Bluetooth dongles, Locco Mirror captures internal Android system and game audio using AudioPlaybackCapture in uncompressed 48kHz 16-bit stereo PCM, and renders it through Windows WASAPI with only ~1.3ms delay.'
    },
    {
      q: 'When will the iPhone (iOS) and Mac (macOS) versions be released?',
      a: 'The iPhone and Mac editions are currently in active development. The iOS client leverages direct Lightning and USB-C audio/video accessory streams, while the macOS client features native Apple Silicon (M1/M2/M3/M4) acceleration with Metal 3. Click "Coming Soon" on the download card above to join our priority tester waitlist!'
    },
    {
      q: 'Do I need root access on Android or a jailbreak?',
      a: 'No root or special privileges are needed. Locco Mirror operates fully within standard Android 10+ MediaProjection and AudioPlaybackCapture APIs. You can connect directly via Direct USB mode or USB Debugging.'
    },
    {
      q: 'Which phone brands and Android versions are supported?',
      a: 'Locco Mirror is verified and compatible with Android 10 (API 29) all the way up to Android 14+ (API 34). We test across Samsung OneUI, Xiaomi HyperOS / MIUI, Realme UI, Oppo ColorOS, Vivo OriginOS, OnePlus OxygenOS, and Motorola.'
    },
    {
      q: 'Can I stream mobile games to OBS Studio or Discord?',
      a: 'Absolutely! Locco Mirror was engineered specifically for mobile gaming streamers and content creators. Because our Direct3D 11 presentation has no tearing and ultra-stable 60+ FPS, it integrates seamlessly into OBS Game Capture, Window Capture, and virtual camera feeds without dropping frames.'
    },
    {
      q: 'What is the difference between Direct USB Mode and USB Debugging Mode?',
      a: 'Direct USB Mode (AOA 2.0) communicates directly with the phone as an Android Open Accessory via asynchronous libusb, bypassing developer options completely for instant plug-and-play. USB Debugging Mode (ADB) tunnels data over a high-speed localhost TCP socket using TCP_NODELAY for advanced resolution control.'
    }
  ];

  return (
    <section id="faq" style={{ padding: '70px 0 90px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="app-container" style={{ maxWidth: '840px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-amber" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '14px', color: '#0f172a' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
            Everything you need to know about Locco Mirror, system compatibility, audio sync, and platform releases.
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="clean-card"
                style={{ 
                  marginBottom: '12px', 
                  overflow: 'hidden',
                  background: '#ffffff',
                  borderColor: isOpen ? '#0078d4' : '#e2e8f0'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#0f172a',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} color="#0078d4" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {isOpen && (
                  <div style={{ padding: '0 22px 18px', fontSize: '14.5px', color: '#475569', lineHeight: 1.65 }}>
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
