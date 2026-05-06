'use client'

import FadeUp from './FadeUp'
import { assets } from '@/lib/assets'

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#080808] relative mb-[120px]">
      <div className="px-4 md:px-16 py-20 lg:py-32">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12">
          <div>
            <div className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-gray-500 mb-2 flex items-center gap-3">
              <span className="w-6 h-px bg-gray-700 inline-block" />
              Selected Work
            </div>
            <FadeUp>
              <h2 className="font-['Barlow_Condensed'] font-extrabold text-[clamp(2.8rem,7vw,5.5rem)] tracking-tight leading-[0.95]">
                Portfolio
              </h2>
            </FadeUp>
          </div>
          <FadeUp>
            <p className="max-w-[32rem] text-[0.85rem] text-gray-400 leading-7">
              A collection of selected works — from high-energy commercial ads to event documentation. Each project is a story.
            </p>
          </FadeUp>
        </div>

        <div className="port-grid">
          {assets.portfolio.map((p, i) => (
            <div key={i} className={`p-card${i === 4 ? ' p-card-full' : ''}`}>
              <div className="p-card-inner">
                <div className="p-meta p-meta-top fade-down">
                  <div className="p-cat">{p.category}</div>
                  <div className="p-name">{p.title}</div>
                </div>
              </div>
              <video
                className="portfolio-video"
                src={p.video}
                poster={p.poster}
                controls
                playsInline
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
