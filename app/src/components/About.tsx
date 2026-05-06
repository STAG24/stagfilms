'use client'

import FadeUp from '@/components/FadeUp'
import { assets } from '@/lib/assets'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 md:px-16" style={{ background: 'radial-gradient(ellipse 100% 80% at 50% 0%, #181818 0%, #080808 60%)' }}>
      <div className="text-[0.6rem] tracking-[0.25em] uppercase text-gray-500 mb-2 flex items-center gap-3 font-mono">
        <span className="w-6 h-px bg-gray-700 inline-block" />
        Our Story
      </div>
      <h2 className="font-['Barlow_Condensed'] font-extrabold text-[clamp(2.8rem,7vw,5.5rem)] tracking-tight leading-[0.95] mb-4">
        About Us
      </h2>
      <div className="w-full h-px bg-white/[0.07] mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <FadeUp>
          <div className="space-y-6">
            <p className="text-[0.9rem] leading-[1.9] text-gray-400">
              STAGFILMS is a creative production house with one vision: to go beyond mere documentation.
            </p>
            <p className="text-[0.9rem] leading-[1.9] text-gray-400">
              Based in the heart of Indonesia&apos;s creativity — Yogyakarta — we combine cinematographic art with strong visual strategies to deliver final results with a bold and premium identity.
            </p>
            <p className="text-[0.9rem] leading-[1.9] text-gray-400">
              For us, every frame is an opportunity to tell an unforgettable story. From in-depth brand narratives to large-scale event documentation, we are here to elevate the visual standards of your project.
            </p>
            <p className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-gray-600 mt-8">
              Available Nationwide — Rooted in Yogyakarta, Serving All of Indonesia.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="border border-white/[0.07] grid grid-cols-2">
            {[
              { num: '50+', label: 'Projects Completed' },
              { num: '4', label: 'Core Services' },
              { num: '100%', label: 'Client Satisfaction' },
              { num: '∞', label: 'Stories to Tell' },
            ].map((s, i) => (
              <div
                key={i}
                className={`p-6 md:p-10 border-b border-r border-white/[0.07] ${
                  (i + 1) % 2 === 0 ? 'border-r-0' : ''
                } ${i >= 2 ? 'border-b-0' : ''}`}
              >
                <div className="font-['Barlow_Condensed'] font-extrabold text-[2.5rem] md:text-[3.5rem] leading-none text-white">
                  {s.num}
                </div>
                <div className="font-mono text-[0.56rem] tracking-[0.15em] uppercase text-gray-500 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5 mt-12 pt-8 border-t border-white/[0.07]">
            <img
              src={assets.logo}
              alt="STAGFILMS"
              className="w-12 h-12 object-contain opacity-50"
            />
            <span className="font-['Barlow_Condensed'] font-black text-[1.5rem] md:text-[2rem] tracking-[0.15em] text-gray-600">
              STAGFILMS
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
