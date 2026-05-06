'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  const animate = useCallback(() => {
    if (dotRef.current && ringRef.current) {
      const { mx, my } = pos.current
      dotRef.current.style.left = mx + 'px'
      dotRef.current.style.top = my + 'px'
      pos.current.rx += (mx - pos.current.rx) * 0.1
      pos.current.ry += (my - pos.current.ry) * 0.1
      ringRef.current.style.left = pos.current.rx + 'px'
      ringRef.current.style.top = pos.current.ry + 'px'
    }
    requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    document.addEventListener('mousemove', (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    })

    const handleEnter = () => document.body.classList.add('cursor-hover')
    const handleLeave = () => document.body.classList.remove('cursor-hover')

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    animate()

    return () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [animate])

  return (
    <>
      <div
        ref={dotRef}
        className="w-2 h-2 bg-white rounded-full fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-150"
      />
      <div
        ref={ringRef}
        className="w-9 h-9 border border-white/50 rounded-full fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200"
      />
    </>
  )
}
