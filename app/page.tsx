"use client"

import { GridBackground } from "@/components/grid-background"
import { GlowOrb } from "@/components/glow-orb"
import { NoiseOverlay } from "@/components/noise-overlay"
import { CornerFrames } from "@/components/corner-frames"
import { StatusBar } from "@/components/status-bar"
import { HeroSection } from "@/components/hero-section"
import { FooterBar } from "@/components/footer-bar"
import { useEffect, useRef, useState } from "react"

export default function Page() {
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: -100, y: -100 })
  const outer = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      if (innerRef.current) {
        // innerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        innerRef.current.style.transform = `translate3d(${e.clientX - 6}px, ${e.clientY - 6}px, 0)`

      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    let animationId: number

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const animate = () => {
      outer.current.x = lerp(outer.current.x, mouse.current.x, 0.12)
      outer.current.y = lerp(outer.current.y, mouse.current.y, 0.12)

      // threshold para evitar micro vibração
      if (Math.abs(mouse.current.x - outer.current.x) < 0.1) {
        outer.current.x = mouse.current.x
      }
      if (Math.abs(mouse.current.y - outer.current.y) < 0.1) {
        outer.current.y = mouse.current.y
      }

      if (outerRef.current) {
        // outerRef.current.style.transform = `translate3d(${outer.current.x}px, ${outer.current.y}px, 0)`
        // outerRef.current.style.transform = `translate3d(${outer.current.x - 12}px, ${outer.current.y - 12}px, 0)`
        outerRef.current.style.transform =
        `translate3d(${Math.round(outer.current.x - 12)}px, ${Math.round(outer.current.y - 12)}px, 0)`


      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-background cursor-none">
      {/* Inner */}
      <div
        ref={innerRef}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-30 bg-accent"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          boxShadow:
            "0 0 8px hsl(145 80% 52% / 0.6), 0 0 20px hsl(145 80% 52% / 0.3)",
        }}
      />

      {/* Outer */}
      <div
        ref={outerRef}
        className="fixed w-6 h-6 rounded-full pointer-events-none z-30"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
          // border: "1.5px solid hsl(145 80% 52% / 0.7)",
          border: "1.5px solid hsl(145 80% 52% / 0.7)",
          willChange: "transform",
          boxShadow:
            "0 0 10px hsl(145 80% 52% / 0.3), 0 0 25px hsl(145 80% 52% / 0.1)",
        }}
      />

      <GridBackground />
      <GlowOrb />
      <NoiseOverlay />
      <CornerFrames />
      <StatusBar />
      <HeroSection />
      <FooterBar />
    </div>
  )
}

