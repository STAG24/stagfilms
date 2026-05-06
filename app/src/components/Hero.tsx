'use client'

import { useEffect } from 'react'
import { assets } from '@/lib/assets'

export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll('#hero .fade-up')
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 120 + 200)
    })
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <div className="hero-bg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={assets.heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="hero-counter fade-up hidden lg:flex flex-col gap-8 items-end absolute right-16 top-1/2 -translate-y-1/2">
        <div className="text-right">
          <div className="font-['Barlow_Condensed'] font-bold text-[2.2rem] text-gray-200 leading-none">50+</div>
          <div className="font-mono text-[0.52rem] tracking-[0.15em] text-gray-500 uppercase mt-1">Projects</div>
        </div>
        <div className="text-right">
          <div className="font-['Barlow_Condensed'] font-bold text-[2.2rem] text-gray-200 leading-none">100%</div>
          <div className="font-mono text-[0.52rem] tracking-[0.15em] text-gray-500 uppercase mt-1">Satisfied</div>
        </div>
      </div>

      <div
        className="hero-logo-big"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(0.8)',
          width: '40%',
          zIndex: 1,
          pointerEvents: 'none',
          animation: 'logoFadeZoom 1.5s ease-out forwards',
        }}
      >
        <img src={assets.logo} alt="STAGFILMS Logo" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      <div className="hero-yr absolute right-16 bottom-20 font-mono text-[0.72rem] tracking-[0.2em] text-gray-700 hidden md:block"
        style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
      >
        STAGFILMS · 2026
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] font-mono text-[0.58rem] tracking-[0.2em] text-gray-500 uppercase flex items-center gap-3 fade-up">
        Scroll
        <span className="w-10 h-px bg-gray-700 inline-block" />
      </div>
    </section>
  )
}
