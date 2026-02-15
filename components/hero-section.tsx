"use client"

import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const titleRef = useRef<HTMLDivElement>(null)
  const lightRadius = 160 // mesmo valor que você usa no radial-gradient

  useEffect(() => {
    setMounted(true)
const handleMouseMove = (e: MouseEvent) => {
  if (!titleRef.current) return

  const img = titleRef.current.querySelector('img') as HTMLImageElement
  if (!img) return
  const imgRect = img.getBoundingClientRect()

  // Calcula posição do cursor relativa à imagem
  const x = e.clientX - imgRect.left
  const y = e.clientY - imgRect.top

  // Ajusta para que o centro da luz fique exatamente no cursor
  setMousePosition({
    x: x, // a luz vai girar em torno do cursor
    y: y,
  })
}


    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
      
      {/* Pre-title label */}
      <div
        className={`mb-8 opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
      >
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Development Company
        </span>
      </div>

<div
  className={`relative opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
  style={{ animationDelay: "400ms", animationFillMode: "forwards", width: "100%" }}
>
  <div 
    ref={titleRef} 
    className={mounted ? "animate-glitch-once" : ""}
    style={{ animationDelay: "2000ms" }} 
  >
    {/* Camada base: Fica fixa em 30% para o mouse "esculpir" a sombra sobre ela */}
    <img
      src="/vantry-logo.png"
      alt="VANTRY"
      className="w-full max-w-[700px] mx-auto opacity-30 select-none"
      draggable={false}
    />

    {/* Camada Lanterna (A que apaga com o mouse) */}
    <img
      src="/vantry-logo.png"
      alt=""
      draggable={false}
      className={`pointer-events-none absolute inset-0 w-full max-w-[700px] mx-auto select-none transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      style={{
        // O delay aqui garante que ela só fique 100% sólida após o glitch
        transitionDelay: "2200ms", 
        
        // MÁSCARA INVERTIDA (O mouse cria a sombra)
        WebkitMaskImage: `radial-gradient(${lightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 40%, white 70%)`,
        maskImage: `radial-gradient(${lightRadius}px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 40%, white 70%)`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
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
        <span className="text-foreground font-medium">
          Um novo projeto digital em desenvolvimento
        </span>
      </p>

     {/* Countdown / CTA indicator */}
<div
  className={`mt-16 flex flex-col items-center gap-4 opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
  style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
>
  <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
    {/* Container do Ponto com efeito de eco */}
    <div className="relative flex h-2 w-2">
      {/* Círculo que expande (Eco) */}
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
      
      {/* Ponto principal com o glitch sutil */}
      <span className={`relative inline-flex rounded-full h-2 w-2 bg-accent ${mounted ? "animate-dot-glitch" : ""}`}></span>
    </div>
    
    <span className="tracking-[0.2em] uppercase">System initializing</span>
  </div>
</div>
    </main>
  )
}
