import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import img from '/public/images/Cascada-1.webp'

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
const getAreas = [
  {
    id: 1,
    nombre_area: 'Fomento agropecuario',
    director: 'Jaimito lopez lopez',
  },
  {
    id: 2,
    nombre_area: 'Comude',
    director: 'Jaimito',
  },
  {
    id: 3,
    nombre_area: 'Comude',
    director: 'Jaimito',
  },
  {
    id: 4,
    nombre_area: 'Comude',
    director: 'Jaimito',
  },
]

export default function Index() {
  return (
    <LayoutAdmin>
      <section className="flex gap-4 justify-between">
        {statsDatos.map((stat, index) => (
          <div id="container" key={index}>
            <div className="w-auto p-4 grid place-items-center shadow-lg text-gray-500 bg-gray-200 rounded-lg">
              <FontAwesomeIcon icon={faUser} className="h-8 w-8" />
              <p className="mt-4 text-2xl font-bold">{stat.total}</p>
              <p className="text-lg font-bold">{stat.name} en total</p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex justify-between gap-6 mt-8">
        <div className="bg-gray-200 w-2/4 p-4 shadow-lg rounded-lg">
          <h1 className="text-center font-bold text-lg">Listado de areas</h1>

          <div className="relative mt-4 rounded-lg overflow-x-auto scrollbar-hide">
            <table className="w-full shadow-2xl rounded-xl text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre del area
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Director
                  </th>
                </tr>
              </thead>

              {getAreas.map((area) => (
                <tbody key={area.id}>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {area.id}
                    </th>
                    <td className="px-6 py-4">{area.nombre_area}</td>
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
            <Image alt="hola" src={img} />
            <h2 className='text-center font-bold text-xl my-4'>Titulo</h2>
            <p className='text-justify'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              fugiat quis quaerat dolorem, distinctio, vel consectetur ipsa
              delectus, nesciunt sint soluta provident explicabo amet quasi
              harum commodi corporis in odio.
            </p>
          </div>
        </div>
      </section>
    </LayoutAdmin>
  )
}
