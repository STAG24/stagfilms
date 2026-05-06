'use client';

import FadeUp from './FadeUp';

const services = [
  {
    num: '01',
    name: 'Creative Projects',
    desc: 'Full-scale creative projects — from visual concept to stunning final production.',
    icon: (
      <svg className="svc-icon" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="24" height="20" rx="1" stroke="white" strokeWidth="1" />
        <path d="M28 17l8-5v16l-8-5V17z" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Event Documentation',
    desc: 'Capturing every precious moment with authentic and powerful cinematic quality.',
    icon: (
      <svg className="svc-icon" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="1" />
        <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="1" />
        <line x1="20" y1="6" x2="20" y2="14" stroke="white" strokeWidth="1" />
        <line x1="20" y1="26" x2="20" y2="34" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Photography',
    desc: 'High-quality still visuals that speak more than just images — a masterpiece',
    icon: (
      <svg className="svc-icon" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="8" width="28" height="22" rx="1" stroke="white" strokeWidth="1" />
        <circle cx="20" cy="19" r="6" stroke="white" strokeWidth="1" />
        <circle cx="20" cy="19" r="2" fill="white" fillOpacity=".4" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Documentary & Brand',
    desc: 'Exploring the unique value of a brand and packaging it in a touching and authentic visual narrative.',
    icon: (
      <svg className="svc-icon" viewBox="0 0 40 40" fill="none">
        <path d="M8 32L14 20L20 26L26 14L32 8" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="20" r="2" fill="white" fillOpacity=".5" />
        <circle cx="26" cy="14" r="2" fill="white" fillOpacity=".5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="px-4 sm:px-6 lg:px-16 py-20 lg:py-32">
        <div className="s-label">What We Do</div>
        <h2 className="s-title">
          <FadeUp>Services</FadeUp>
        </h2>
        <div className="s-divider" />
        <div className="services-grid">
          {services.map((s) => (
            <FadeUp key={s.num}>
              <div className="svc-card">
                <div className="svc-n">{s.num}</div>
                {s.icon}
                <div className="svc-name">{s.name}</div>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-arrow">Explore →</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
