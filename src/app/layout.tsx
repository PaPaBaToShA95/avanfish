import './globals.css'
import { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'Аванфіш – Риболовне озеро',
  description: 'Сайт риболовного озера Аванфіш. Тут буде опис послуг, ціни та контакти.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <meta name="google-site-verification" content="kuam1l4SDg0ADzKRQGGUowbl1dehl0rVFKVj0UNa-g0" />
      </head>
      <body className="min 100dvh flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
