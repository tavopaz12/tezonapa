import Layout from '@/components/Header/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

import img from '/public/images/sala-prensa/obra1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export default function Article() {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (process.browser) {
      setCurrentUrl(window.location.href)
    }
  }, [])

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
      <section className="px-10 h-[300px] mb-8 relative">
        <Image
          alt="hola"
          src={img}
          className="object-cover h-[300px]"
          priority
        />
        <div className="absolute top-0 grid place-items-center bg-[rgba(0,0,0,0.5)] w-[94%] h-[100%]">
          <h1 className="text-white w-3/4 text-center capitalize text-4xl font-bold">
            Prueba
          </h1>
        </div>
      </section>

      <article className="px-10 mb-8 text-lg flex gap-6">
        <section className="w-3/4">
          <div className="mb-4 flex items-center gap-4 text-gray-600">
            <FontAwesomeIcon
              className="h-4 w-4 text-gray-400"
              icon={faCalendar}
            />
            <span>4 de mayo de 2023 - 4:05 p. m.</span>{' '}
          </div>
          <p className="mb-4">Tezonapa, Ver. - {parrafos[0]}.</p>
          {parrafos.slice(1).map((parrafo, index) => (
            <p className="mb-4" key={index}>
              {parrafo}.
            </p>
          ))}

          <p className="font-bold mb-2">Compartir en:</p>

          <div className="flex gap-8 w-full">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
              target="_blank"
              className="bg-[#3c589a] rounded-lg px-6 flex items-center gap-4 py-1"
              rel="noopener noreferrer">
              <FontAwesomeIcon className="h-4 w-4 text-white" icon={faUser} />
              <span className="text-white font-bold">Facebook</span>
            </a>
            <a
              href={`whatsapp://send?text=Ver: ${text}:%20${currentUrl}`}
              target="_blank"
              className="bg-[#55EB4C] rounded-lg px-6 flex items-center gap-4 py-1"
              rel="noopener noreferrer">
              <FontAwesomeIcon className="h-4 w-4 text-white" icon={faUser} />
              <span className="text-white font-bold">WhatsApp</span>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`}
              target="_blank"
              className="bg-[#55ACEE] rounded-lg px-6 flex items-center gap-4 py-1"
              rel="noopener noreferrer">
              <FontAwesomeIcon className="h-4 w-4 text-white" icon={faUser} />
              <span className="text-white font-bold">Twitter</span>
            </a>
          </div>
        </section>

        <aside className="w-1/4">
          <h2 className="text-2xl text-center font-bold">
            Artículos recientes
          </h2>
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
