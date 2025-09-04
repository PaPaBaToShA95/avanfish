import './globals.css'
import { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Аванфіш — Преміальне риболовне озеро',
  description: 'Сайт риболовного озера Аванфіш. Преміальне риболовне озеро у Літках, Броварський район, Київська область. Цілодобова риболовля, без вихідних. Відпочинок на природі з комфортом. Великий вибір риби, трофеї, зручні місця для риболовлі. Контакти, ціни, мапа озера.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <meta name="google-site-verification" content="kuam1l4SDg0ADzKRQGGUowbl1dehl0rVFKVj0UNa-g0" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </head>
      <Analytics />
      <body className="min-h-screen flex flex-col">
        <SpeedInsights />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}