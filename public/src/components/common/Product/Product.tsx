import { Product as TProduct } from '@/types/product'
import { formatPrice } from '@/utils/formatPrice'
import Image from 'next/image'

export const Product = ({
  name,
  image,
  price,
  specialPrice,
}: TProduct) => {
  return (
    <a
      href="#"
      className="flex h-full flex-col justify-between gap-4 text-center md:gap-8"
    >
      <div>
        <div className="flex h-[146px] items-center justify-center border border-gray-200 p-2 md:h-[165px] lg:h-[179px] 2xl:h-[233px]">
          <div className="relative h-full w-full">
            <Image src={`/${image}`} fill className="h-full w-full" alt="" />
          </div>
        </div>
        <h2 className="mt-4 text-base uppercase leading-5 text-gray-700">
          {name}
        </h2>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap-1 lg:flex-row lg:gap-4">
          {specialPrice ? (
            <>
              <p className="text-[15px] text-gray-600 line-through">
                {formatPrice(price)}
              </p>
              <p className="text-[21px] font-extrabold uppercase leading-4 text-indigo-900">
                {formatPrice(specialPrice)}
              </p>
            </>
          ) : (
            <p className="text-[21px] font-extrabold uppercase leading-4 text-indigo-900">
              {formatPrice(price)}
            </p>
          )}
        </div>
        <button className="mt-4 hidden w-full rounded-md bg-turquoise-400 py-2 text-lg font-extrabold uppercase text-white md:block">
          Comprar
        </button>
      </div>
    </a>
  )
}
