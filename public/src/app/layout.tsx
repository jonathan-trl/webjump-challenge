import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import Providers from '@/providers'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const opens_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webjump - Desafio Frontend',
  description: 'Webjump - Desafio Frontend',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={opens_sans.className}>
        <Providers>
          <Header />
          <div className="container mb-7 mt-0 md:mt-7">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
