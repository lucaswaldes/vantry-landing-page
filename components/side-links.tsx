"use client"

import { useEffect, useState } from "react"
import { ContactModal } from "@/components/contact-modal"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/vantryco", tag: "IG" },
  { icon: TwitterIcon, label: "Twitter / X", href: "https://x.com/vantryco", tag: "X" },
]

type ContactType = "discord" | "whatsapp" | "email"

const contactLinks: { icon: React.ComponentType<{ className?: string }>; label: string; tag: string; type: ContactType }[] = [
  { icon: MailIcon, label: "E-mail", tag: "EM", type: "email" },
  { icon: WhatsAppIcon, label: "WhatsApp", tag: "WA", type: "whatsapp" },
  { icon: DiscordIcon, label: "Discord", tag: "DC", type: "discord" },

]

export function SideLinks() {
  const [mounted, setMounted] = useState(false)
  const [activeModal, setActiveModal] = useState<ContactType | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {/* Left side - Social */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-1">
        <span
          className={`font-mono text-[9px] tracking-[0.3em] text-muted-foreground uppercase mb-3 opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}
        >
          Social
        </span>
        <div className="w-px h-6 bg-border mb-3" />
        {socialLinks.map((link, i) => (
          <a
            key={link.tag}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`interactive-element group relative flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_12px_hsl(145_80%_52%/0.2)] opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: `${1500 + i * 100}ms`, animationFillMode: "forwards" }}
          >
            <link.icon className="w-4 h-4" />
            <span className="absolute left-12 font-mono text-[10px] tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {link.tag}
            </span>
          </a>
        ))}
        <div className="w-px h-6 bg-border mt-3" />
      </div>

      {/* Right side - Contact */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-1">
        <span
          className={`font-mono text-[9px] tracking-[0.3em] text-muted-foreground uppercase mb-3 opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}
        >
          Contact
        </span>
        <div className="w-px h-6 bg-border mb-3" />
        {contactLinks.map((link, i) => (
          <button
            key={link.tag}
            onClick={() => setActiveModal(link.type)}
            aria-label={link.label}
            className={`interactive-element group relative flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_12px_hsl(145_80%_52%/0.2)] opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: `${1500 + i * 100}ms`, animationFillMode: "forwards" }}
          >
            <link.icon className="w-4 h-4" />
            <span className="absolute right-12 font-mono text-[10px] tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {link.tag}
            </span>
          </button>
        ))}
        <div className="w-px h-6 bg-border mt-3" />
      </div>

      {/* Mobile - Bottom row */}
      <div className="fixed bottom-16 left-0 right-0 z-40 flex lg:hidden justify-center">
        <div
          className={`flex items-center gap-3 opacity-0 ${mounted ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.tag}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="interactive-element flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_12px_hsl(145_80%_52%/0.2)]"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
          <div className="w-px h-5 bg-border" />
          {contactLinks.map((link) => (
            <button
              key={link.tag}
              onClick={() => setActiveModal(link.type)}
              aria-label={link.label}
              className="interactive-element flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_12px_hsl(145_80%_52%/0.2)]"
            >
              <link.icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Contact Modals */}
      {activeModal && (
        <ContactModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          type={activeModal}
        />
      )}
    </>
  )
}
