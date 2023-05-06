import Layout from '@/components/Header/Layout'
import Title from '@/components/UI/Title'
import Image from 'next/image'
import { useRouter } from 'next/router'

import img from '/public/images/sala-prensa/obra1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

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
    <Layout title={`${text} - H. Ayuntamiento, Tezonapa`}>
      <section className="px-10 h-[300px] mb-8 relative">
        <Image
          alt="hola"
          src={img}
          className="object-cover h-[300px]"
          priority
        />
        <div className="absolute top-0 grid place-items-center bg-[rgba(0,0,0,0.5)] w-[94%] h-[100%]">
          <h1 className="text-white w-3/4 text-center capitalize text-4xl font-bold">
            {text}
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
        </section>

        <aside className="w-1/4">
          <h2>Artículos recientes</h2>
        </aside>
      </article>
    </Layout>
  )
}
