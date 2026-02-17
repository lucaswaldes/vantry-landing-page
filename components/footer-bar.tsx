"use client"

export function FooterBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
      <div className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
        VANTRY Co.
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
          <span>Strategy</span>
          <span className="text-border">{'/'}</span>
          <span>Code</span>
          <span className="text-border">{'/'}</span>
          <span>AUTOMATION</span>
        </div>
        <div className="font-mono text-[10px] md:text-xs tracking-widest text-accent">
          2026
        </div>
      </div>
    </footer>
  )
}
