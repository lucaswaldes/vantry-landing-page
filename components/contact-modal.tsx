"use client"

import { useEffect, useRef, useState } from "react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  type: "whatsapp" | "email" | "discord"
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

const modalContent = {
  whatsapp: {
    tag: "WA",
    title: "WhatsApp",
    subtitle: "Fale conosco diretamente",
    value: "+55 (11) 91691-5044",
    buttonLabel: "Iniciar conversa",
    href: "https://wa.me/5511916915044?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20VANTRY%20e%20gostaria%20de%20saber%20mais!",
  },
  email: {
    tag: "EM",
    title: "E-mail",
    subtitle: "Envie sua mensagem",
    value: "contato@vantry.com.br",
    buttonLabel: "Enviar e-mail",
    href: "mailto:contato@vantry.com.br",
  },
  discord: {
    tag: "DC",
    title: "Discord",
    subtitle: "Atendimento via ticket no servidor",
    value: "discord.gg/Ak2CDY8wBP",
    buttonLabel: "Entrar no servidor",
    href: "https://discord.gg/Ak2CDY8wBP",
  },
}

export function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const content = modalContent[type]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setCopied(false)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEsc)
    }
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(content.value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in-up" style={{ animationDuration: "200ms" }} />

      {/* Modal */}
      <div
        className="relative w-[340px] border border-border bg-card rounded-lg overflow-hidden animate-fade-in-up"
        style={{ animationDuration: "300ms" }}
        role="dialog"
        aria-modal="true"
        aria-label={`Contato via ${content.title}`}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-widest text-accent">{content.tag}</span>
            <span className="text-sm font-medium text-foreground">{content.title}</span>
          </div>
          <button
            onClick={onClose}
            className="interactive-element w-7 h-7 flex items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent"
            aria-label="Fechar modal"
          >
            <CloseIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-5 flex flex-col gap-4">
          <p className="font-mono text-xs text-muted-foreground tracking-wide">{content.subtitle}</p>

          {/* Value + Copy */}
          <div className="flex items-center gap-2 bg-secondary/50 border border-border rounded-md px-3 py-2.5">
            <span className="flex-1 font-mono text-sm text-foreground tracking-wide">{content.value}</span>
            <button
              onClick={handleCopy}
              className={`interactive-element w-7 h-7 flex items-center justify-center rounded border transition-all duration-300 ${
                copied
                  ? "border-accent text-accent bg-accent/10"
                  : "border-border text-muted-foreground hover:border-accent hover:text-accent"
              }`}
              aria-label={copied ? "Copiado" : `Copiar ${content.value}`}
            >
              {copied ? (
                <CheckIcon className="w-3.5 h-3.5" />
              ) : (
                <CopyIcon className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Copied feedback text */}
          <div className={`font-mono text-[10px] tracking-widest uppercase text-accent transition-all duration-300 ${copied ? "opacity-100" : "opacity-0"}`} style={{ height: 14 }}>
            {copied && "Copiado para a area de transferencia"}
          </div>

          {/* CTA */}
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-element group flex items-center justify-center gap-2 w-full py-2.5 rounded-md border border-accent bg-accent/10 text-accent font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {content.buttonLabel}
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bottom accent line */}
        <div className="h-px bg-accent/30" />
      </div>
    </div>
  )
}
