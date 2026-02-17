export function GlowOrb() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Focused glow behind the logo area */}
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] md:w-[700px] md:h-[350px]"
        style={{
          background: "radial-gradient(ellipse at center, hsl(145 80% 52% / 0.08) 0%, hsl(145 80% 52% / 0.03) 35%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle ambient glow - softer and wider */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, hsl(145 80% 52% / 0.04) 0%, hsl(145 80% 52% / 0.01) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle top-right accent */}
      <div
        className="absolute -top-32 -right-32 w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(145 80% 52% / 0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle bottom-left accent */}
      <div
        className="absolute -bottom-32 -left-32 w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(145 80% 52% / 0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Horizontal decorative lines */}
      <div className="absolute top-[30%] left-0 right-0 h-px bg-border/20" />
      <div className="absolute top-[70%] left-0 right-0 h-px bg-border/20" />

      {/* Scan line - subtle green horizontal line moving down in loop */}
      <div
        className="absolute left-0 right-0 h-px animate-scan-line"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(145 80% 52% / 0.15) 20%, hsl(145 80% 52% / 0.25) 50%, hsl(145 80% 52% / 0.15) 80%, transparent 100%)",
          boxShadow: "0 0 12px hsl(145 80% 52% / 0.08), 0 0 4px hsl(145 80% 52% / 0.12)",
        }}
      />
    </div>
  )
}
