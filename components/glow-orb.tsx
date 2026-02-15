"use client"

export function GlowOrb() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
      {/* Main orb */}
      <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-accent/10 animate-pulse-glow" />
      {/* Inner orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full animate-pulse-glow animation-delay-1000"
        style={{
          background: 'radial-gradient(circle, hsl(145 80% 52% / 0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
