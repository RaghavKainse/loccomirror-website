import React from 'react';
import { 
  Play, 
  CheckCircle2, 
  ExternalLink, 
  Download,
  FileArchive
} from 'lucide-react';

export function InstallGuide() {
  const videoId = 'ku1l8no-aHc';
  const startSeconds = 0;
  const videoTitle = 'Android Phone Ko PC Pe Mirror Kaise Kare? 4K 120FPS, Low Delay | Locco Mirror Installation Guide';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?start=${startSeconds}&rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}&t=${startSeconds}s`;

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
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
}

export default InstallGuide;
