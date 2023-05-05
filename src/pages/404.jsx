import Image from 'next/image'

import bg from '/public/images/cabildo_municipio.jpg'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import favicon from '@/assets/favicon.ico'

export default function NotFound() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Page Not Found | H. Ayuntamiento Tezonapa</title>
        <meta
          name="description"
          content="Página web oficial del Ayuntamiento de Tezonapa, con información sobre servicios, noticias y eventos relevantes. Trabajamos para brindar atención eficiente y transparente a todos los ciudadanos."
        />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <section className="bg-white ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              Página no econtrada
            </h1>
            <p className="mt-4 text-gray-500 ">
              Lo sentimos pero la página solicitada no se encuentra disponible.
              Aqui te mostramos unos links de ayuda:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <button
                onClick={() => router.back()}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Ir Atras</span>
              </button>

              <Link
                href="/"
                className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                Llevame al inicio
              </Link>
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Image
              priority
              className="w-full max-w-lg lg:mx-auto rounded-xl border border-gray-300 p-1"
              src={bg}
              alt="H. Ayuntamiento"
            />
          </div>
        </div>
      </section>
    </>
  )
}
