"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

      {/* Pre-title label */}
      <div
        className={`mb-8 opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Brazilian Development Company
        </span>
      </div>

      {/* Logo with crossfade hover: white (A green) -> all green */}
      <div
        className={`relative opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "400ms", animationFillMode: "forwards", width: "100%" }}
      >
        <div className="group relative w-full max-w-[650px] mx-auto">
          {/* Default: vantry-logo2 (white with green A) */}
          <img
            src="/vantry-logo2.png"
            alt="VANTRY"
            className="w-full select-none transition-all duration-700 group-hover:opacity-0"
            draggable={false}
          />
          {/* Hover: vantry-logo (all green) - overlaid on top */}
          <img
            src="/vantry-logo.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full select-none opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:drop-shadow-[0_0_40px_hsl(145,80%,52%,0.4)]"
            draggable={false}
          />
        </div>
      </div>

      {/* Accent line */}
      <div
        className={`mt-8 mb-8 w-16 h-px bg-accent opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
      />

      {/* Subtitle */}
      <p
        className={`font-mono text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
      >
        Em breve
        <span className="animate-blink text-accent">_</span>
      </p>

      {/* Tagline */}
      <p
        className={`mt-6 max-w-md text-sm md:text-base leading-relaxed text-muted-foreground opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
      >
        <span className="text-foreground font-medium">Um novo projeto digital em <span style={{ color: '#20c44a' }}>desenvolvimento</span></span>
      </p>

      {/* Status indicator */}
      <div
        className={`mt-16 flex flex-col items-center gap-4 opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
      >
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </div>
          <span className="tracking-[0.2em] uppercase">System initializing</span>
        </div>
      </div>
    </main>
  )
}
