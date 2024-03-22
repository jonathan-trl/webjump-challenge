import { filterCategories } from '@/config/filters'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-2 bg-gray-200">
          <ul className="list-disc space-y-1 px-10 py-5 text-base text-black">
            <li>
              <a href="#">Página inicial</a>
            </li>
            {filterCategories.map((category) => (
              <li key={category.id}>
                <a href="#">{category.label}</a>
              </li>
            ))}
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
        <div className="col-span-7">
          <div className="h-[281px] bg-gray-400"></div>
          <div className="mt-4">
            <h1 className="text-[26px]">Seja bem-vindo!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
