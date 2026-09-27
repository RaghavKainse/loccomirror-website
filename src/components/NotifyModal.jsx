import React, { useState } from 'react';
import { X, Bell, CheckCircle2, Send } from 'lucide-react';

export function NotifyModal({ isOpen, onClose, platform }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }} 
      onClick={handleClose}
    >
      <div 
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          maxWidth: '460px',
          width: '100%',
          padding: '32px',
          position: 'relative',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
          border: '1px solid #e2e8f0'
        }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose} 
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'transparent',
            border: 'none',
            color: '#64748b',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '50%'
          }}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div 
              style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '12px', 
                background: '#eff6ff', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '16px'
              }}
            >
              <Bell size={24} color="#0078d4" />
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#0f172a' }}>
              {platform} is Coming Soon!
            </h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '22px', lineHeight: 1.6 }}>
              We are actively developing Locco Mirror for <strong style={{ color: '#0f172a' }}>{platform}</strong> with hardware acceleration. Enter your email to be notified the moment the public release is live.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  color: '#0f172a',
                  fontSize: '14.5px',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                }}
              />

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', background: '#0078d4' }}
              >
                <Send size={15} />
                <span>Join Launch Notification List</span>
              </button>
            </form>

            <div style={{ marginTop: '14px', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
              Zero spam. We will only email you regarding the {platform} launch.
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <div 
              style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '50%', 
                background: '#ecfdf5', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}
            >
              <CheckCircle2 size={30} color="#10b981" />
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#0f172a' }}>You're on the list!</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '22px', lineHeight: 1.6 }}>
              Thank you! We've registered <strong style={{ color: '#0f172a' }}>{email}</strong> for the upcoming <strong>{platform}</strong> release.
            </p>

            <button
              onClick={handleClose}
              className="btn btn-secondary"
              style={{ width: '100%', padding: '11px' }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
