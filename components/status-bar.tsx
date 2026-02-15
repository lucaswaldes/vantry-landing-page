"use client"

import { useEffect, useState } from "react"

export function StatusBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6">
      {/* Esquerda: informações do sistema */}
      <div className="hidden md:flex items-center gap-8 font-mono text-xs text-muted-foreground">
        {/* <span className="tracking-widest">
          LOC: <span className="text-accent">BRASIL</span>
        </span> */}
        <span className="tracking-widest">
          STATUS: <span className="text-accent">ONLINE</span>
        </span>
        <span className="tracking-widest">{time}</span>
      </div>

      {/* Direita: link de atendimento
      <div className="font-mono text-xs text-accent uppercase relative group">
        <a
          href="https://discord.gg/927hMKfTrn"
          target="_blank"
          rel="noopener noreferrer"
            className="relative z-10 inline-block px-2 py-1.5 cursor-none"
        >
          Atendimento
        </a>

        <span
          className="absolute inset-0 z-0 rounded-full bg-accent opacity-20 scale-100 transition-all duration-300 group-hover:scale-110 group-hover:opacity-30"

          style={{ pointerEvents: "none" }}
        />
      </div> */}
    </header>
  )
}
