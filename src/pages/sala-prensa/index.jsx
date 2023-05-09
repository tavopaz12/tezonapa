import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import img from '/public/images/Cascada-1.webp'
import Link from 'next/link'
import CardSalaPrensa from '@/components/Sala-Prensa/CardSalaPrensa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const links = [
  {
    title: 'Ver todo',
    slug: 'ver-todo',
  },
  {
    title: 'Comude',
    slug: 'comude',
  },
  {
    title: 'Comercio',
    slug: 'comercio',
  },
  {
    title: 'Desarrollo Social',
    slug: 'desarrollo-social',
  },
  {
    title: 'Fomento Agropecuario',
    slug: 'fomento-agropecuario',
  },
  {
    title: 'Educación',
    slug: 'educacion',
  },
]

export default function Index() {
  const [selected, setSelected] = useState('ver-todo')
  return (
    <Layout
      title="Sala de prensa - H. Ayuntamiento, Tezonapa"
      activeLink="sala-prensa">

      <nav className="px-10 max-md:px-4 max-md:flex-col mb-6 flex justify-between items-center">
        <ul className="flex max-md:order-2 max-md:flex-wrap max-md:justify-start justify-around w-full">
          {links.map((link, index) => (
            <Link
              href={link.slug === 'ver-todo' ? '' : `?tem=${link.slug}`}
              key={index}>
              <li
                onClick={() => setSelected(link.slug)}
                className={`${
                  link.slug === selected
                    ? 'bg-[#053225] text-white font-bold'
                    : 'font-bold text-black bg-transparent'
                } px-4 py-1 cursor-pointer rounded-2xl max-md:rounded max-md:text-sm max-md:px-2`}>
                {link.title}
              </li>
            </Link>
          ))}
        </ul>

        <div className='w-1/4 max-md:w-full max-md:mb-4'>
          <div class="relative block">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faSearch}
                className="w-4 h-4 text-gray-500"
              />
              <span class="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar..."
            />
          </div>
        </div>
      </nav>

      <section className="px-10 mb-4 max-md:px-4">
        <div className="flex max-md:flex-col gap-6 justify-around bg-gray-100 rounded-2xl p-2">
          <figure className="w-2/4 max-md:w-full">
            <Image
              className="h-[300px] max-md:h-[200px] w-full object-cover rounded-lg"
              alt="hola"
              src={img}
            />
          </figure>
          <div className="w-2/4 max-md:w-full">
            <h2 className="text-gray-600 font-bold text-2xl">
              Suspensión De Labores
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quo odio odit magni laborum omnis ullam in, sit voluptatum optio,
              obcaecati culpa voluptate soluta temporibus debitis ex totam
              magnam iure!
            </p>
            <Link href="/">
              <button className="bg-[#374151] max-md:w-full mt-4 px-4 rounded py-1 text-white font-bold">
                Leer Más...
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-10 max-md:px-4 mb-6 flex flex-wrap gap-4 justify-evenly">
        <CardSalaPrensa
          image={img}
          title="Inicia oficialmente el programa de obras públicas 2023 en la comunidad
          de Col. Agrícola"
        />
        <CardSalaPrensa
          image={img}
          title="Inicia oficialmente el programa de obras públicas 2023 en la comunidad
          de Col. Agrícola"
        />
        <CardSalaPrensa
          image={img}
          title="Inicia oficialmente el programa de obras públicas 2023 en la comunidad
        de Col. Agrícola"
        />
        <CardSalaPrensa
          image={img}
          title="Inicia oficialmente el programa de obras públicas 2023 en la comunidad
          de Col. Agrícola"
        />
        <CardSalaPrensa
          image={img}
          title="Inicia oficialmente el programa de obras públicas 2023 en la comunidad
          de Col. Agrícola"
        />
        <CardSalaPrensa
          image={img}
          title="Inicia oficialmente el programa de obras públicas 2023 en la comunidad
        de Col. Agrícola"
        />
      </section>
    </Layout>
  )
}
