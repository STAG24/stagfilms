'use client'

import { useState, useCallback, useEffect } from 'react'
import FadeUp from './FadeUp'
import { assets } from '@/lib/assets'

export default function Slideshow() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const items = assets.portfolio

  const goTo = useCallback((index: number) => {
    if (transitioning || index === current) return
    setTransitioning(true)
    setCurrent(index)
    setTimeout(() => setTransitioning(false), 700)
  }, [current, transitioning])

  const goNext = useCallback(() => {
    goTo((current + 1) % items.length)
  }, [current, items.length, goTo])

  const goPrev = useCallback(() => {
    goTo((current - 1 + items.length) % items.length)
  }, [current, items.length, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  return (
    <section id="slideshow" className="relative bg-[#080808] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="lg:w-[45%] flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">
          <div className="font-mono text-[0.58rem] tracking-[0.25em] uppercase text-gray-500 mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-gray-700 inline-block" />
            Featured Works
          </div>
          <FadeUp>
            <h2 className="font-['Barlow_Condensed'] font-extrabold text-[clamp(2.8rem,7vw,5.5rem)] tracking-tight leading-[0.95] mb-6">
              STAG
              <br />
              <span className="outline-text">FILMS</span>
            </h2>
          </FadeUp>
          <FadeUp>
            <p className="max-w-[28rem] text-[0.85rem] text-gray-400 leading-7 mb-10">
              A curated selection of our finest productions — from cinematic brand films to electrifying event coverage. Every frame tells a story.
            </p>
          </FadeUp>
          <FadeUp>
            <a
              href="#portfolio"
              className="btn-main relative overflow-hidden inline-flex items-center gap-3 px-8 py-3.5 border border-gray-700 text-white no-underline font-medium text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300 hover:border-white hover:text-[#080808]"
            >
              <span className="play-tri w-[0.9rem] h-[0.9rem] border-t-[0.4rem] border-t-transparent border-b-[0.4rem] border-b-transparent border-l-[0.7rem] border-l-current" />
              <span className="relative z-[1]">View All Works</span>
            </a>
          </FadeUp>
        </div>

        <div className="lg:w-[55%] relative h-[50vh] lg:h-screen overflow-hidden">
          {items.map((slide, i) => (
            <div
              key={i}
              className="slideshow-slide"
              style={{ opacity: i === current ? 1 : undefined }}
            >
              <img
                src={slide.poster}
                alt={slide.category}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-transparent pointer-events-none" />

          <div
            className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 z-10 transition-opacity duration-500"
            style={{ opacity: transitioning ? 0 : 1 }}
          >
            <div>
              <div className="font-mono text-[0.58rem] tracking-[0.25em] uppercase text-gray-400 mb-2">
                {items[current].category}
              </div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-[clamp(1.4rem,3vw,2.4rem)] text-white leading-tight">
                {items[current].title}
              </h3>
            </div>
          </div>

          <button
            onClick={goPrev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 slideshow-nav w-11 h-11 border border-white/40 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-black/60"
            aria-label="Previous"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 slideshow-nav w-11 h-11 border border-white/40 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-black/60"
            aria-label="Next"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 font-mono text-[0.7rem] text-white/80 bg-black/30 backdrop-blur-sm px-3 py-2">
            <span className="text-white font-medium">{String(current + 1).padStart(2, '0')}</span>
            <span className="mx-1">/</span>
            <span>{String(items.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
