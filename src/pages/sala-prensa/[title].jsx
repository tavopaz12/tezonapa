import Layout from '@/components/Header/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

import img from '/public/images/sala-prensa/obra1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Article() {
  const router = useRouter()
  const { title } = router.query

  const text = title
    ?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  const texto =
    'Con la finalidad de seguir impulsando el desarrollo de Tezonapa, el día de ayer dio inicio oficialmente el programa de obras públicas 2023 en la comunidad de Col Agrícola. Nuestra Presidenta Municipal Claudia Rosales Colina, arribó a dicha comunidad para que en compañía de ciudadanos Tezonapeños realizaran el banderazo de inicio de obra referente a una apertura de camino que abarca 1,200 metros. Con esta apertura, se beneficia directamente a los habitantes de las comunidades de Morelos, Francisco Villa II Fracción y Col Agrícola. #UnidosAvanzamos 💚'

  const parrafos = texto?.split('.').filter((p) => p !== '')

  return (
    <Layout title={`${text} - H. Ayuntamiento, Tezonapa`} ogImage={img}>
      <section className="px-10 h-[300px] max-md:h-[200px] mb-8 relative max-md:px-4">
        <Image
          alt="hola"
          src={img}
          className="object-cover h-[300px] max-md:h-[200px]"
          priority
        />
        <div className="absolute top-0 grid place-items-center bg-[rgba(0,0,0,0.5)] w-[94%] max-md:w-[92%] h-[100%]">
          <h1 className="text-white w-3/4 text-center capitalize text-4xl font-bold">
            {text}
          </h1>
        </div>
      </section>

      <article className="px-10 max-md:px-4 mb-8 text-lg flex max-md:flex-col gap-6">
        <section className="w-3/4 max-md:w-full">
          <div className="mb-4 flex items-center gap-4 max-md:gap-2 text-gray-600">
            <FontAwesomeIcon
              className="h-4 w-4 text-gray-400 max-md:h-3 max-md:w-3"
              icon={faCalendar}
            />
            <span className="max-md:text-sm">
              4 de mayo de 2023 - 4:05 p. m.
            </span>
          </div>
          <p className="mb-4 text-justify max-md:text-base">
            Tezonapa, Ver. - {parrafos[0]}.
          </p>
          {parrafos.slice(1).map((parrafo, index) => (
            <p className="mb-4 text-justify max-md:text-base" key={index}>
              {parrafo}.
            </p>
          ))}

          <p className="font-bold mb-2 max-md:text-base">Compartir en:</p>

          <div className="flex items-center gap-4 w-full">
            <IconsShare text={text} />
          </div>
        </section>

        <aside className="w-1/4 max-md:w-full">
          <h2 className="text-2xl max-md:text-xl text-center font-bold">
            Artículos recientes
          </h2>
          <div className="flex relative bg-gray-200 p-2 rounded-md gap-4 my-4 justify-between">
            <Image
              src={img}
              alt="hola"
              className="w-2/4 object-cover max-md:h-[100px] h-[150px]"
            />
            <p className="w-2/4 text-base max-md:text-sm font-semibold">
              Vence el 10 de mayo plazo para participar en el desfile del 21 de
              mayo
            </p>
            <button className="absolute shadow bg-black p-[0.4rem] rounded-[50%] right-0 bottom-0 m-3 max-md:m-2">
              <FontAwesomeIcon
                className="h-4 w-4 max-md:h-3 max-md:w-3 text-white"
                icon={faPlus}
              />
            </button>
          </div>
          <div className="flex relative bg-gray-200 p-2 rounded-md gap-4 my-4 justify-between">
            <Image
              src={img}
              alt="hola"
              className="w-2/4 object-cover h-[150px]"
            />
            <p className="w-2/4 text-base font-semibold">
              Vence el 10 de mayo plazo para participar en el desfile del 21 de
              mayo
            </p>
            <button className="absolute shadow bg-black p-[0.4rem] rounded-[50%] right-0 bottom-0 m-3 max-md:m-2">
              <FontAwesomeIcon className="h-4 w-4 text-white" icon={faPlus} />
            </button>
          </div>
          <div className="flex relative bg-gray-200 p-2 rounded-md gap-4 my-4 justify-between">
            <Image
              src={img}
              alt="hola"
              className="w-2/4 object-cover h-[150px]"
            />
            <p className="w-2/4 text-base font-semibold">
              Vence el 10 de mayo plazo para participar en el desfile del 21 de
              mayo
            </p>
            <button className="absolute shadow bg-black p-[0.4rem] rounded-[50%] right-0 bottom-0 m-3 max-md:m-2">
              <FontAwesomeIcon className="h-4 w-4 text-white" icon={faPlus} />
            </button>
          </div>

          <button className="bg-[#374151] px-4 w-full rounded-lg text-white font-bold py-1">
            Ver más...
          </button>
        </aside>
      </article>
    </Layout>
  )
}

function IconsShare({ text }) {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (process.browser) {
      setCurrentUrl(window.location.href)
    }
  }, [])
  return (
    <>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        className="bg-[#3c589a] rounded-lg px-6 max-md:px-3 flex items-center gap-4 max-md:gap-2 py-1"
        rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 max-md:h-3 max-md:w-3 text-white"
          fill="#ffff"
          viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
        <span className="text-white font-bold max-md:text-sm">Facebook</span>
      </a>
      <a
        href={`whatsapp://send?text=Ver: ${text}:%20${currentUrl}`}
        target="_blank"
        className="bg-[#55EB4C] rounded-lg px-6 max-md:px-3 flex items-center gap-4 max-md:gap-2 py-1"
        rel="noopener noreferrer">
        <svg
          fill="#ffff"
          className="h-4 w-4 max-md:h-3 max-md:w-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        <span className="text-white font-bold max-md:text-sm">WhatsApp</span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`}
        target="_blank"
        className="bg-[#55ACEE] rounded-lg px-6 max-md:px-3 flex items-center gap-4 max-md:gap-2 py-1"
        rel="noopener noreferrer">
        <svg
          fill="#ffff"
          className="h-4 w-4 max-md:h-3 max-md:w-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
        <span className="text-white font-bold max-md:text-sm">Twitter</span>
      </a>
    </>
  )
}
