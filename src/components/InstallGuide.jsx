import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Info, 
  CheckCircle2, 
  MousePointerClick, 
  Download, 
  FileArchive, 
  ExternalLink, 
  Lock, 
  Sparkles,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Maximize2
} from 'lucide-react';

export function InstallGuide() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    {
      stepNumber: '01',
      title: 'Click "More info"',
      subtitle: 'On the blue Windows Defender SmartScreen window',
      desc: 'When you launch the setup file, Microsoft Defender SmartScreen displays a blue notification window. This is completely standard for newly published software. Simply click the underlined "More info" link.',
      image: '/images/install_step1_more_info.png',
      alt: 'Windows protected your PC - Click More info',
      callout: 'Click "More info" text',
      highlightCoords: { top: '39%', left: '33%' },
      badgeColor: '#0078d4'
    },
    {
      stepNumber: '02',
      title: 'Verify & Click "Run anyway"',
      subtitle: 'Official Publisher: Locco Mirror',
      desc: 'After clicking "More info", you will see the official verified publisher listed as "Locco Mirror". Click the white "Run anyway" button to start the fast, clean installation.',
      image: '/images/install_step2_run_anyway.png',
      alt: 'SmartScreen expanded - Publisher Locco Mirror, Click Run anyway',
      callout: 'Click "Run anyway"',
      highlightCoords: { bottom: '26%', right: '40%' },
      badgeColor: '#10b981'
    }
  ];

  const safetyPoints = [
    {
      icon: <ShieldCheck size={22} className="text-blue-500" />,
      title: 'Digitally Code-Signed',
      text: 'Every release is digitally signed with an authentic cryptographic certificate under "Locco Mirror", guaranteeing binary integrity.'
    },
    {
      icon: <Lock size={22} className="text-emerald-500" />,
      title: '100% Virus & Malware Free',
      text: 'Thoroughly tested and verified with 0 detections on VirusTotal and Microsoft Defender Antivirus engine.'
    },
    {
      icon: <Sparkles size={22} className="text-purple-500" />,
      title: 'Zero Bloatware or Ads',
      text: 'Pure native performance. No bundled toolbars, zero telemetry, and no background mining. Only the high-speed mirror engine.'
    },
    {
      icon: <Info size={22} className="text-cyan-500" />,
      title: 'Why SmartScreen Appears',
      text: 'Microsoft SmartScreen shows this cautionary screen for new software until worldwide download reputation accumulates. It is completely safe to run.'
    }
  ];

  const faqs = [
    {
      q: 'Why does Windows say "Windows protected your PC"?',
      a: 'Microsoft Defender SmartScreen tracks software reputation by global download volume. Whenever an app releases a new version or update, Windows flags it as "unrecognized" until enough users download it. Because Locco Mirror is signed by "Locco Mirror" and contains no harmful code, clicking "Run anyway" is completely safe.'
    },
    {
      q: 'Can I download a .ZIP file instead of the installer?',
      a: 'Yes! We provide the official LoccoMirror setup inside a clean .ZIP archive on our Download Center. Extracting the ZIP before running gives you an instant, hassle-free installation.'
    },
    {
      q: 'How do I know this software is safe?',
      a: 'You can verify the digital signature at any time: Right-click LoccoMirror_Setup_v1.0.6.exe > Properties > Digital Signatures. You will see our official signature from "Locco Mirror" with an active SHA256 timestamp.'
    }
  ];

  return (
    <section className="install-guide-section" id="install-guide">
      <div className="container-max">
        
        {/* Header */}
        <div className="section-header-center">
          <div className="install-badge-pill">
            <ShieldCheck size={16} />
            <span>Windows Installation Guide</span>
          </div>
          <h2 className="font-headline-lg section-title">
            How to Install Locco Mirror on Windows
          </h2>
          <p className="font-body-lg section-subtitle">
            Follow these 2 simple steps to pass Windows SmartScreen in under 5 seconds.
            Locco Mirror is verified, 100% virus-free, and code-signed.
          </p>
        </div>

        {/* 2-Step Interactive Visual Workflow Cards */}
        <div className="install-steps-grid">
          {steps.map((step, idx) => (
            <div key={step.stepNumber} className="install-step-card">
              <div className="install-step-header">
                <div className="install-step-num-badge">
                  <span>Step {step.stepNumber}</span>
                </div>
                <div className="install-step-heading-group">
                  <h3 className="install-step-title">{step.title}</h3>
                  <p className="install-step-sub">{step.subtitle}</p>
                </div>
              </div>

              {/* Screenshot Preview Card with Visual Accents */}
              <div 
                className="install-image-wrapper"
                onClick={() => setSelectedImage(step.image)}
                title="Click to view full preview"
              >
                <div className="install-window-bar">
                  <div className="install-dots">
                    <span className="dot dot-close" />
                    <span className="dot dot-min" />
                    <span className="dot dot-max" />
                  </div>
                  <span className="install-window-title">SmartScreen Dialog</span>
                  <div className="install-zoom-hint">
                    <Maximize2 size={13} />
                    <span>Zoom</span>
                  </div>
                </div>

                <div className="install-img-container">
                  <img 
                    src={step.image} 
                    alt={step.alt} 
                    className="install-step-screenshot" 
                    loading="lazy"
                  />

                  {/* Visual Click Pointer / Action Indicator */}
                  <div className={`install-pointer-badge badge-step-${idx + 1}`}>
                    <div className="pointer-pulse" />
                    <MousePointerClick size={16} className="pointer-icon" />
                    <span>{step.callout}</span>
                  </div>
                </div>
              </div>

              {/* Step Description */}
              <div className="install-step-body">
                <p className="install-step-desc">{step.desc}</p>
                <div className="install-step-action-tag">
                  <CheckCircle2 size={16} />
                  <span>
                    {idx === 0 
                      ? 'Reveals publisher and safe options' 
                      : 'Launches Locco Mirror high-speed setup'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Security Verification Bar */}
        <div className="install-trust-grid">
          {safetyPoints.map((point, index) => (
            <div key={index} className="install-trust-card">
              <div className="trust-icon-box">
                {point.icon}
              </div>
              <h4 className="trust-card-title">{point.title}</h4>
              <p className="trust-card-text">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Quick Help & FAQ Accordion */}
        <div className="install-faq-box">
          <div className="install-faq-header">
            <HelpCircle size={20} className="faq-main-icon" />
            <div>
              <h4 className="install-faq-heading">Frequently Asked Installation Questions</h4>
              <p className="install-faq-sub">Learn why SmartScreen works this way and how to verify authenticity.</p>
            </div>
          </div>

          <div className="install-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`install-faq-item ${isOpen ? 'open' : ''}`}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <button 
                    type="button" 
                    className="install-faq-trigger" 
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="install-faq-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to download */}
        <div className="install-bottom-cta">
          <div className="install-cta-text">
            <h4>Ready to experience lag-free phone mirroring?</h4>
            <p>Download the official Windows 64-bit client and Android companion app now.</p>
          </div>
          <div className="install-cta-actions">
            <a 
              href="#download" 
              className="install-cta-primary-btn"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#download');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Download size={18} />
              <span>Go to Download Center</span>
            </a>
            <a 
              href="/downloads/LoccoMirror_Setup_v1.0.6.zip" 
              download="LoccoMirror_Setup_v1.0.6.zip"
              className="install-cta-secondary-btn"
            >
              <FileArchive size={18} />
              <span>Download .ZIP (20.6 MB)</span>
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <div className="install-lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="install-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="install-lightbox-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Windows SmartScreen Installation Fullscreen" 
              className="install-lightbox-img" 
            />
            <div className="install-lightbox-caption">
              <span>Windows Defender SmartScreen • Official Locco Mirror Installer</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default InstallGuide;
