"use client"

export function CornerFrames() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40" aria-hidden="true">
      {/* Top-left */}
      <div className="absolute top-6 left-6 md:top-16 md:left-12 w-8 h-8">
        <div className="absolute top-0 left-0 w-full h-px bg-border" />
        <div className="absolute top-0 left-0 h-full w-px bg-border" />
      </div>
      {/* Top-right */}
      <div className="absolute top-6 right-6 md:top-16 md:right-12 w-8 h-8">
        <div className="absolute top-0 right-0 w-full h-px bg-border" />
        <div className="absolute top-0 right-0 h-full w-px bg-border" />
      </div>
      {/* Bottom-left */}
      <div className="absolute bottom-6 left-6 md:bottom-16 md:left-12 w-8 h-8">
        <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-border" />
      </div>
      {/* Bottom-right */}
      <div className="absolute bottom-6 right-6 md:bottom-16 md:right-12 w-8 h-8">
        <div className="absolute bottom-0 right-0 w-full h-px bg-border" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-border" />
      </div>
    </div>
  )
}
