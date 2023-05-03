import { useState } from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ title, img, requisitos, namePdf }) {
  const [mostrarMasRequisitos, setMostrarMasRequisitos] = useState(false)
  const requisitosActuales = mostrarMasRequisitos
    ? requisitos
    : requisitos.slice(0, 3)

  const toggleMostrarMasRequisitos = () => {
    setMostrarMasRequisitos(!mostrarMasRequisitos)
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="p-5 grid place-items-center">
        <h2 className="mb-2 text-2xl capitalize font-bold tracking-tight text-gray-900">
          {title}
        </h2>

        <Image
          className="w-full h-[250px] max-md:h-[150px] object-cover"
          src={img}
          alt="imagen_solicitud"
        />

        <ol className="max-w-md mt-4 text-lg max-md:text-base mb-4 space-y-1 text-gray-700 list-disc list-inside">
          {requisitosActuales.map((requisito) => (
            <li key={requisito}>{requisito}</li>
          ))}

          {requisitos.length > 4 && (
            <li>
              <button
                className="text-lg max-md:text-base font-medium text-blue-700 hover:text-blue-800 focus:outline-none focus:underline"
                onClick={toggleMostrarMasRequisitos}>
                {mostrarMasRequisitos ? 'Ver menos' : 'Ver más requisitos...'}
              </button>
            </li>
          )}
        </ol>

        <Link
          target="_blank"
          className="inline-flex text-lg max-md:text-base items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          href={`/download?pdf=${namePdf}`}>
          Descargar Formato
          <FontAwesomeIcon className="w-4 h-4 ml-2 -mr-1" icon={faDownload} />
        </Link>
      </div>
    </div>
  )
}
