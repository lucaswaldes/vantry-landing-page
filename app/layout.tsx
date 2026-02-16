// app/layout.tsx
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'VANTRY | Brazilian Development Company',
  description: 'High-level digital development, automation, and strategy. Uma nova era de tecnologia brasileira em construção. System Initializing.',
 
  keywords: [
    'Vantry', 
    'Desenvolvimento Software', 
    'Automação', 
    'Digital Strategy', 
    'Tech Brazil', 
    'Bot', 
    'Bot Discord',
    'Discord Automation'
  ],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'VANTRY | Brazilian Development Company',
    description: 'Um novo padrão de excelência digital em desenvolvimento. Automação, código e estratégia de elite.',
    type: 'website',
    images: [
      {
        url: '/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Vantry System Initializing',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}