import React, { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DualProductHighlight } from './components/DualProductHighlight';
import { StatBar } from './components/StatBar';
import { CoreFeatures } from './components/CoreFeatures';
import { CameraCallout } from './components/CameraCallout';
import { PerformanceGrid } from './components/PerformanceGrid';
import { FaqAccordion } from './components/FaqAccordion';
import { DownloadCenter } from './components/DownloadCenter';
import { CtaBanner } from './components/CtaBanner';
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
    <div className="app-root">
      {/* 1. Header / Navigation */}
      <Navbar onDownloadClick={() => {}} />

      {/* Main Content Sections */}
      <main className="app-main">
        {/* 2. Hero Section with 4K Studio Simulator & Quick Specs */}
        <Hero onOpenNotifyModal={handleOpenNotifyModal} />

        {/* 3. Dual Product Highlight: Locco Screen Mirroring + Locco 4K Camera */}
        <DualProductHighlight />

        {/* 4. Stat Bar: 4K UHD, 120 FPS, <10ms, 128 Devices */}
        <StatBar />

        {/* 5. Core Features Grid: 8 Feature Cards */}
        <CoreFeatures />

        {/* 6. Locco Camera Engine Spotlight */}
        <CameraCallout />

        {/* 7. Unmatched Performance: 6 Capability Cards */}
        <PerformanceGrid />

        {/* 8. Frequently Asked Questions */}
        <FaqAccordion />

        {/* 9. Multi-Platform Download Center */}
        <DownloadCenter onOpenNotifyModal={handleOpenNotifyModal} />

        {/* 10. Gradient Call To Action Banner */}
        <CtaBanner />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Notification Modal for Coming Soon Platforms */}
      <NotifyModal
        isOpen={notifyModal.isOpen}
        onClose={handleCloseNotifyModal}
        platform={notifyModal.platform}
      />
    </div>
  );
}

export default App;
