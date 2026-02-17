"use client"

import { GridBackground } from "@/components/grid-background"
import { GlowOrb } from "@/components/glow-orb"
import { CornerFrames } from "@/components/corner-frames"
import { StatusBar } from "@/components/status-bar"
import { HeroSection } from "@/components/hero-section"
import { FooterBar } from "@/components/footer-bar"
import { SideLinks } from "@/components/side-links"
import { useEffect, useRef, useCallback, useState } from "react"

export default function Page() {
  const innerRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -100, y: -100 })
  const outerPos = useRef({ x: -100, y: -100 })
  const rafId = useRef<number>(0)
  const [isPointerDevice, setIsPointerDevice] = useState(false)

  const animate = useCallback(() => {
    const lerp = 0.18
    outerPos.current.x += (mouse.current.x - outerPos.current.x) * lerp
    outerPos.current.y += (mouse.current.y - outerPos.current.y) * lerp

    if (outerRef.current) {
      outerRef.current.style.transform = `translate3d(${outerPos.current.x - 12}px, ${outerPos.current.y - 12}px, 0)`
    }

    rafId.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const hasPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    setIsPointerDevice(hasPointer)
    if (!hasPointer) return

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`
      }

      // Detect hoverable elements
      const target = e.target as HTMLElement
      const hovering = !!target.closest("a, button, [role='button'], input, textarea, select, .interactive-element")

      if (innerRef.current) {
        innerRef.current.style.width = hovering ? "6px" : "10px"
        innerRef.current.style.height = hovering ? "6px" : "10px"
        innerRef.current.style.boxShadow = hovering
          ? "0 0 14px hsl(145 80% 52% / 0.9), 0 0 30px hsl(145 80% 52% / 0.4)"
          : "0 0 8px hsl(145 80% 52% / 0.6)"
        innerRef.current.style.transform = `translate3d(${e.clientX - (hovering ? 3 : 5)}px, ${e.clientY - (hovering ? 3 : 5)}px, 0)`
      }
      if (outerRef.current) {
        outerRef.current.style.width = hovering ? "36px" : "24px"
        outerRef.current.style.height = hovering ? "36px" : "24px"
        outerRef.current.style.borderColor = hovering
          ? "hsl(145 80% 52% / 0.9)"
          : "hsl(145 80% 52% / 0.5)"
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [animate])

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Custom cursor - only on devices with a mouse/trackpad */}
      {isPointerDevice && (
        <>
          <div
            ref={innerRef}
            className="fixed top-0 left-0 rounded-full pointer-events-none bg-accent"
            aria-hidden="true"
            style={{
              width: 10,
              height: 10,
              zIndex: 99999,
              willChange: "transform",
              backfaceVisibility: "hidden",
              boxShadow: "0 0 8px hsl(145 80% 52% / 0.6)",
              transition: "width 0.15s ease-out, height 0.15s ease-out, box-shadow 0.15s ease-out",
            }}
          />
          <div
            ref={outerRef}
            className="fixed top-0 left-0 rounded-full pointer-events-none"
            aria-hidden="true"
            style={{
              width: 24,
              height: 24,
              zIndex: 99999,
              willChange: "transform",
              backfaceVisibility: "hidden",
              border: "1.5px solid hsl(145 80% 52% / 0.5)",
              transition: "width 0.15s ease-out, height 0.15s ease-out, border-color 0.15s ease-out",
            }}
          />
        </>
      )}

      <GridBackground />
      <GlowOrb />
      <CornerFrames />
      <StatusBar />
      <HeroSection />
      <SideLinks />
      <FooterBar />
    </div>
  )
}
