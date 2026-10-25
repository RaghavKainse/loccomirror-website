import React, { useState } from 'react';
import { 
  Play, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Lock, 
  Sparkles,
  Info,
  HelpCircle,
  ChevronDown,
  Download,
  FileArchive
} from 'lucide-react';

export function InstallGuide() {
  const [activeFaq, setActiveFaq] = useState(null);

  const videoId = 'ku1l8no-aHc';
  const startSeconds = 0;
  const videoTitle = 'Android Phone Ko PC Pe Mirror Kaise Kare? 4K 120FPS, Low Delay | Locco Mirror Installation Guide';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?start=${startSeconds}&rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}&t=${startSeconds}s`;

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
            <Play size={15} fill="currentColor" />
            <span>Video Installation &amp; Setup Guide</span>
          </div>
          <h2 className="font-headline-lg section-title">
            How to Install &amp; Connect Locco Mirror
          </h2>
          <p className="font-body-lg section-subtitle">
            Watch the full step-by-step video tutorial to install on Windows, pass SmartScreen, and mirror your screen at ultra-smooth 120 FPS in under 2 minutes.
          </p>
        </div>

        {/* Video Showcase Player */}
        <div className="install-video-showcase">
          <div className="install-video-card">
            {/* Window Top Bar */}
            <div className="install-video-header">
              <div className="install-video-dots">
                <span className="dot dot-close" />
                <span className="dot dot-min" />
                <span className="dot dot-max" />
              </div>
              <div className="install-video-badge-title">
                <Play size={14} fill="currentColor" />
                <span>Locco Mirror • Windows &amp; Android Full Installation Guide</span>
              </div>
              <span className="install-video-quality">4K • 120 FPS</span>
            </div>

            {/* Responsive 16:9 Video Embed */}
            <div className="install-video-frame-container">
              <iframe
                className="install-video-iframe"
                src={embedUrl}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Footer Metadata & Quick Chapters */}
            <div className="install-video-footer">
              <div className="install-video-creator">
                <span className="creator-label">Video Guide by</span>
                <span className="creator-name">Smile Playings</span>
              </div>

              {/* Step Highlights */}
              <div className="install-video-chapters">
                <span className="video-chip">
                  <CheckCircle2 size={13} /> Windows 64-bit Install
                </span>
                <span className="video-chip">
                  <CheckCircle2 size={13} /> 1-Click SmartScreen Pass
                </span>
                <span className="video-chip">
                  <CheckCircle2 size={13} /> Zero-Lag USB Mirroring
                </span>
                <span className="video-chip">
                  <CheckCircle2 size={13} /> 120 FPS Gaming Setup
                </span>
              </div>

              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="install-video-yt-link"
              >
                <span>Watch on YouTube</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
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
    </section>
  );
}

export default InstallGuide;
