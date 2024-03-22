import { filterCategories } from '@/config/filters'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
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
        <header>
          <div className="bg-gray-900 py-1">
            <div className="container flex justify-end space-x-3 font-opens-sans text-sm text-white">
              <a href="#" className="font-bold underline">
                Acesse sua Conta
              </a>
              <span>ou</span>
              <a href="#" className="font-bold underline">
                Cadastre-se
              </a>
            </div>
          </div>
          <div className="container flex flex-wrap items-center justify-between py-[30px]">
            <Image src="/logo.png" width={186} height={52} alt="" />
            <div className="flex items-center">
              <input
                type="text"
                className="h-full w-full border border-[#959595] px-4 py-[10px] outline-none md:w-[414px]"
              />
              <button className="bg-red-600 px-[25px] py-[10px] font-extrabold text-white">
                Buscar
              </button>
            </div>
          </div>
          <div className="bg-red-600">
            <div className="container py-4">
              <div className="flex space-x-24 text-base font-extrabold uppercase text-white">
                <a href="#">Página inicial</a>
                {filterCategories.map((category) => (
                  <a href="#" key={category.id}>
                    {category.label}
                  </a>
                ))}
                <a href="#">Contato</a>
              </div>
            </div>
          </div>
        </header>
        <div className="container my-7">{children}</div>
        <div className="container mb-7 h-[176px] bg-red-600"></div>
      </body>
    </html>
  )
}
