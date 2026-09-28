import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Downloads } from './components/Downloads';
import { TelemetrySimulator } from './components/TelemetrySimulator';
import { UserGuide } from './components/UserGuide';
import { Architecture } from './components/Architecture';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { NotifyModal } from './components/NotifyModal';

export function App() {
  const [notifyModal, setNotifyModal] = useState({
    isOpen: false,
    platform: '',
  });

  const handleOpenNotifyModal = (platformName) => {
    setNotifyModal({
      isOpen: true,
      platform: platformName,
    });
  };

  const handleCloseNotifyModal = () => {
    setNotifyModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section with Interactive Live Mirroring Simulator */}
        <Hero />

        {/* Platform Downloads Section (Windows & Android ready, iPhone & Mac COMING SOON) */}
        <Downloads onOpenNotifyModal={handleOpenNotifyModal} />

        {/* Latency & Telemetry Speed Benchmark */}
        <TelemetrySimulator />

        {/* Comprehensive How-To-Use Guide */}
        <UserGuide />

        {/* Core Features & Head-to-Head Comparison Matrix */}
        <Architecture />

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* iPhone & Mac Coming Soon Waitlist Modal */}
      <NotifyModal
        isOpen={notifyModal.isOpen}
        onClose={handleCloseNotifyModal}
        platform={notifyModal.platform}
      />
    </div>
  );
}

export default App;
