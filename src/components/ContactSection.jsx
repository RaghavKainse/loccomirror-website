import React, { useState } from 'react';
import { Mail, Headphones, Copy, Check, Send, Sparkles, Clock, ShieldCheck, MessageSquare } from 'lucide-react';

export function ContactSection() {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2200);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container-max">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-pill-tag">
            <Sparkles size={14} className="contact-pill-icon" />
            <span>Contact Us</span>
          </div>
          <h2 className="font-headline-lg section-title">
            Get in Touch with the Locco Mirror Team
          </h2>
          <p className="font-body-md section-subtitle">
            Have questions about setup, facing connection issues, or interested in partnerships? 
            Our dedicated team is ready to help you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {/* Card 1: Technical & Customer Support */}
          <div className="contact-card contact-card-featured">
            <div className="contact-card-badge">
              <Headphones size={13} />
              <span>Recommended for Technical Issues</span>
            </div>
            
            <div className="contact-card-header">
              <div className="contact-icon-wrapper contact-icon-support">
                <Headphones size={28} />
              </div>
              <div>
                <h3 className="contact-card-title">Customer Support</h3>
                <p className="contact-card-sub">Technical Helpdesk &amp; Troubleshooting</p>
              </div>
            </div>

            <p className="contact-card-desc">
              Get one-on-one help with USB connection, Windows SmartScreen bypass, audio routing, 
              or Android APK setup.
            </p>

            {/* Email Box */}
            <div className="contact-email-box">
              <span className="contact-email-label">Official Support Email</span>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support.loccomirror@gmail.com&su=Locco%20Mirror%20Support%20Request" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-email-text"
                title="Open in Gmail (support.loccomirror@gmail.com)"
              >
                support.loccomirror@gmail.com
              </a>
            </div>

            {/* Action Buttons */}
            <div className="contact-card-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=support.loccomirror@gmail.com&su=Locco%20Mirror%20Support%20Request"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact-primary"
                title="Open in Gmail"
              >
                <Send size={16} />
                <span>Email Support</span>
              </a>

              <button
                type="button"
                className={`btn-contact-secondary ${copiedType === 'support' ? 'copied' : ''}`}
                onClick={() => copyToClipboard('support.loccomirror@gmail.com', 'support')}
                title="Copy support email address"
              >
                {copiedType === 'support' ? (
                  <>
                    <Check size={16} className="text-success" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Card Footer Meta */}
            <div className="contact-card-meta">
              <div className="contact-meta-item">
                <Clock size={14} />
                <span>Response time: &lt; 12 Hours</span>
              </div>
              <div className="contact-meta-item">
                <MessageSquare size={14} />
                <span>English &amp; Hindi Support</span>
              </div>
            </div>
          </div>

          {/* Card 2: General & Business Inquiries */}
          <div className="contact-card">
            <div className="contact-card-badge contact-badge-neutral">
              <Mail size={13} />
              <span>General Inquiries</span>
            </div>

            <div className="contact-card-header">
              <div className="contact-icon-wrapper contact-icon-general">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="contact-card-title">General Inquiries</h3>
                <p className="contact-card-sub">Business, Partnerships &amp; Feedback</p>
              </div>
            </div>

            <p className="contact-card-desc">
              Connect with us for creator collaborations, press queries, business licensing, 
              or to share feature suggestions with our developers.
            </p>

            {/* Email Box */}
            <div className="contact-email-box">
              <span className="contact-email-label">General Contact Email</span>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=loccomirror@gmail.com&su=Locco%20Mirror%20General%20Inquiry" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-email-text"
                title="Open in Gmail (loccomirror@gmail.com)"
              >
                loccomirror@gmail.com
              </a>
            </div>

            {/* Action Buttons */}
            <div className="contact-card-actions">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=loccomirror@gmail.com&su=Locco%20Mirror%20General%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-contact-secondary-solid"
                title="Open in Gmail"
              >
                <Send size={16} />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                className={`btn-contact-secondary ${copiedType === 'general' ? 'copied' : ''}`}
                onClick={() => copyToClipboard('loccomirror@gmail.com', 'general')}
                title="Copy general email address"
              >
                {copiedType === 'general' ? (
                  <>
                    <Check size={16} className="text-success" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
