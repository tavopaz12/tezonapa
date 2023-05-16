import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import img from '/public/images/Cascada-1.webp'
import { getArticles } from '@/services/article/getArticles'
import { getAreas } from '@/services/area/getAreas'
import { getEvents } from '@/services/event/getEvents'
import {
  faBuilding,
  faCalendar,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons'

const statsDatos = [
  {
    name: 'Areas',
    total: 25,
  },
  {
    name: 'Articulos',
    total: 25,
  },
  {
    name: 'Avisos',
    total: 25,
  },
  {
    name: 'Eventos',
    total: 25,
  },
]

export default function Index({ articles, areas, events }) {
  console.log(articles.count)
  return (
    <LayoutAdmin>
      <section className="flex gap-4 justify-between">
        <div className="p-4 w-1/4 grid place-items-center shadow-lg text-gray-500 bg-gray-200 rounded-lg">
          <FontAwesomeIcon icon={faNewspaper} className="h-8 w-8" />
          <p className="mt-4 text-2xl font-bold">Articulos</p>
          <p className="text-lg font-bold">{articles.count} en total</p>
        </div>

        <div className="p-4 w-1/4 grid place-items-center shadow-lg text-gray-500 bg-gray-200 rounded-lg">
          <FontAwesomeIcon icon={faBuilding} className="h-8 w-8" />
          <p className="mt-4 text-2xl font-bold">Areas</p>
          <p className="text-lg font-bold">{areas.length} en total</p>
        </div>

        <div className="p-4 w-1/4 grid place-items-center shadow-lg text-gray-500 bg-gray-200 rounded-lg">
          <FontAwesomeIcon icon={faCalendar} className="h-8 w-8" />
          <p className="mt-4 text-2xl font-bold">Eventos</p>
          <p className="text-lg font-bold">{events.length} en total</p>
        </div>
      </section>

      <section className="flex justify-between gap-6 mt-8">
        <div className="bg-gray-200 w-2/4 p-4 shadow-lg rounded-lg">
          <h1 className="text-center font-bold text-lg">Listado de areas</h1>

          <div className="relative mt-4 rounded-lg overflow-x-auto scrollbar-hide">
            <table className="w-full shadow-2xl rounded-xl text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nombre del area
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Director
                  </th>
                </tr>
              </thead>

              {areas.map((area) => (
                <tbody key={area._id}>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 text-gray-500 font-bold">{area.name}</td>
                    <td className="px-6 py-4">{area.director}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        <div className="bg-gray-200 w-2/4 p-4 shadow-lg rounded-lg">
          <h1 className="text-center font-bold text-lg">
            Ultimo articulo publicado
          </h1>
          <div className="mt-6">
            <Image alt="hola" width={500} height={500} priority src={articles.articles[0].banner} />
            <h2 className="text-center font-bold text-xl my-4">{articles.articles[0].title}</h2>
            <p className="text-justify line-clamp-6">
              {articles.articles[0].content}
            </p>
          </div>
        </div>
      </section>
    </LayoutAdmin>
  )
}

export async function getServerSideProps(context) {
  const { page, title } = context.query

  const articles = await getArticles(page, title)
  const areas = await getAreas()
  const events = await getEvents()

  return {
    props: {
      articles,
      areas,
      events,
    },
  }
}
