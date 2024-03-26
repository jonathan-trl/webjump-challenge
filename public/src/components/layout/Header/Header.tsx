import { CategoriesList } from '@/components/common/CategoriesList'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdCart } from 'react-icons/io'
import { IoMenuSharp } from 'react-icons/io5'

export const Header = () => {
  return (
    <header>
      <div className="bg-gray-900 py-1">
        <div className="container flex justify-center space-x-3 font-opens-sans text-sm text-white md:justify-end">
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
        <div className="cursor-pointer md:hidden">
          <IoMenuSharp size={30} />
        </div>
        <a href="/">
          <Image src="/logo.png" width={186} height={52} alt="" />
        </a>
        <div className="cursor-pointer md:hidden">
          <IoMdCart size={30} />
        </div>
        <form method="GET">
          <div className="hidden items-center md:flex">
            <input
              type="text"
              name="query"
              className="h-full w-full border border-[#959595] px-4 py-[10px] outline-none md:w-[414px]"
            />
            <button
              type="submit"
              className="bg-red-600 px-[25px] py-[10px] font-extrabold text-white"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
      <div className="hidden bg-red-600 md:block">
        <div className="container py-4">
          <ul className="flex space-x-16 text-base font-extrabold uppercase text-white lg:space-x-24">
            <li>
              <Link href="/">Página inicial</Link>
            </li>
            <CategoriesList />
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
