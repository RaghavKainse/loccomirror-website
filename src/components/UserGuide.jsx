import React, { useState } from 'react';
import { 
  Cable, 
  Zap, 
  Terminal, 
  Smartphone, 
  Monitor, 
  Sparkles,
  Info
} from 'lucide-react';

export function UserGuide() {
  const [activeGuide, setActiveGuide] = useState('direct_usb'); // 'direct_usb' | 'usb_debugging'

  return (
    <section id="user-guide" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="app-container" style={{ maxWidth: '1060px' }}>
        
        {/* Simple Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-blue" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} />
            <span>Easy Setup</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', marginBottom: '10px' }}>
            How to Connect in 3 Simple Steps
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', margin: 0 }}>
            Connect your phone to your PC in under 30 seconds. Choose your preferred method:
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ 
            display: 'inline-flex', 
            background: '#e2e8f0', 
            padding: '4px', 
            borderRadius: '12px',
            gap: '4px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '100%'
          }}>
            <button
              onClick={() => setActiveGuide('direct_usb')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.2s ease',
                background: activeGuide === 'direct_usb' ? '#ffffff' : 'transparent',
                color: activeGuide === 'direct_usb' ? '#0078d4' : '#64748b',
                boxShadow: activeGuide === 'direct_usb' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
              }}
            >
              <Zap size={16} />
              <span>Direct USB (No Setup Needed)</span>
              <span style={{ 
                background: '#10b981', 
                color: '#ffffff', 
                fontSize: '10.5px', 
                fontWeight: 700, 
                padding: '2px 7px', 
                borderRadius: '999px',
                marginLeft: '4px'
              }}>
                Easiest
              </span>
            </button>

            <button
              onClick={() => setActiveGuide('usb_debugging')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.2s ease',
                background: activeGuide === 'usb_debugging' ? '#ffffff' : 'transparent',
                color: activeGuide === 'usb_debugging' ? '#0078d4' : '#64748b',
                boxShadow: activeGuide === 'usb_debugging' ? '0 2px 8px rgba(0,0,0,0.08)' : 'none'
              }}
            >
              <Terminal size={16} />
              <span>With USB Debugging (ADB)</span>
            </button>
          </div>
        </div>

        {/* METHOD 1: DIRECT USB */}
        {activeGuide === 'direct_usb' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
              
              {/* Step 1 */}
              <div 
                className="clean-card" 
                style={{ 
                  padding: '32px 26px', 
                  background: '#ffffff', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '10px', 
                    background: '#eff6ff', 
                    color: '#0078d4', 
                    fontWeight: 800, 
                    fontSize: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #bfdbfe'
                  }}>
                    1
                  </div>
                  <Cable size={24} color="#0078d4" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Plug in USB Cable
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  Connect your Android phone to your PC using a standard USB cable. No developer settings needed.
                </p>
              </div>

              {/* Step 2 */}
              <div 
                className="clean-card" 
                style={{ 
                  padding: '32px 26px', 
                  background: '#ffffff', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '10px', 
                    background: '#eff6ff', 
                    color: '#0078d4', 
                    fontWeight: 800, 
                    fontSize: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #bfdbfe'
                  }}>
                    2
                  </div>
                  <Smartphone size={24} color="#0078d4" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Tap "OK" on Phone
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  A prompt will appear: <em>"Open Locco Mirror with this accessory?"</em>. Check <strong>Always Allow</strong> and tap <strong>OK</strong>.
                </p>
              </div>

              {/* Step 3 */}
              <div 
                className="clean-card" 
                style={{ 
                  padding: '32px 26px', 
                  background: '#ffffff', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '10px', 
                    background: '#ecfdf5', 
                    color: '#10b981', 
                    fontWeight: 800, 
                    fontSize: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #a7f3d0'
                  }}>
                    3
                  </div>
                  <Monitor size={24} color="#10b981" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Ready to Play!
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  Open Locco Mirror on your PC. Your phone screen and game sound will start streaming instantly at 60 FPS.
                </p>
              </div>

            </div>

            {/* Simple Tip Banner */}
            <div style={{ 
              marginTop: '28px', 
              background: '#f1f5f9', 
              borderRadius: '12px', 
              padding: '16px 20px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <Info size={18} color="#0078d4" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5 }}>
                <strong style={{ color: '#0f172a' }}>Quick Phone Tip:</strong> If your phone is OnePlus, Oppo, Vivo, or Realme, make sure to turn on <strong style={{ color: '#0078d4' }}>"OTG Connection"</strong> in your phone Settings.
              </div>
            </div>
          </div>
        )}

        {/* METHOD 2: USB DEBUGGING */}
        {activeGuide === 'usb_debugging' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '24px' }}>
              
              {/* Step 1 */}
              <div 
                className="clean-card" 
                style={{ 
                  padding: '32px 26px', 
                  background: '#ffffff', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '10px', 
                    background: '#eff6ff', 
                    color: '#0078d4', 
                    fontWeight: 800, 
                    fontSize: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #bfdbfe'
                  }}>
                    1
                  </div>
                  <Smartphone size={24} color="#0078d4" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Enable Developer Mode
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  Open phone <strong>Settings &gt; About Phone</strong> and tap <strong>Build Number 7 times</strong> until you see <em>"You are now a developer"</em>.
                </p>
              </div>

              {/* Step 2 */}
              <div 
                className="clean-card" 
                style={{ 
                  padding: '32px 26px', 
                  background: '#ffffff', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '10px', 
                    background: '#eff6ff', 
                    color: '#0078d4', 
                    fontWeight: 800, 
                    fontSize: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #bfdbfe'
                  }}>
                    2
                  </div>
                  <Terminal size={24} color="#0078d4" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Turn ON USB Debugging
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  Go to <strong>Settings &gt; Developer Options</strong>, scroll down and toggle <strong>USB Debugging</strong> to ON.
                </p>
              </div>

              {/* Step 3 */}
              <div 
                className="clean-card" 
                style={{ 
                  padding: '32px 26px', 
                  background: '#ffffff', 
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '10px', 
                    background: '#ecfdf5', 
                    color: '#10b981', 
                    fontWeight: 800, 
                    fontSize: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid #a7f3d0'
                  }}>
                    3
                  </div>
                  <Monitor size={24} color="#10b981" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Connect & Start Mirror
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  Connect your phone via USB, tap <strong>Always Allow</strong> on the phone popup, then open Locco Mirror on PC and click <strong>Start Mirror</strong>.
                </p>
              </div>

            </div>

            {/* Simple Tip Banner */}
            <div style={{ 
              marginTop: '28px', 
              background: '#f1f5f9', 
              borderRadius: '12px', 
              padding: '16px 20px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <Info size={18} color="#0078d4" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5 }}>
                <strong style={{ color: '#0f172a' }}>Quick Phone Tip:</strong> When connecting the cable, set the USB mode on your phone to <strong style={{ color: '#0078d4' }}>"File Transfer / MTP"</strong> (not charging only).
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

