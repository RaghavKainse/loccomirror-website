import React from 'react';

export function StatBar() {
  const stats = [
    {
      metric: '4K UHD',
      title: 'Lossless High Definition',
      description: 'True color passthrough at native resolution',
    },
    {
      metric: '60~120 FPS',
      title: 'Max Frame Rate',
      description: 'Pro gaming grade motion fluidity',
    },
    {
      metric: '< 10 ms',
      title: 'Hardware Wired Latency',
      description: 'Imperceptible real-time sync',
    },
    {
      metric: '128',
      title: 'Simultaneous Devices',
      description: 'Scalable matrix for batch testing & studios',
    },
  ];

  return (
    <section className="stat-bar-section">
      <div className="container-max">
        <div className="stat-bar-grid">
          {stats.map((item, index) => (
            <div key={index} className="stat-item">
              <div className="stat-metric font-headline-xl text-primary">
                {item.metric}
              </div>
              <div className="stat-title font-label-lg">
                {item.title}
              </div>
              <div className="stat-desc font-body-sm">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
