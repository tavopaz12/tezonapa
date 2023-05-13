import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import Image from 'next/image'

import imgPrueba from '/public/images/mision.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEdit,
  faEye,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Modal from '@/components/UI/Modal'
import FormCreateNotice from '@/components/Admin/FormCreateNotice'
import DeleteConfirmationModal from '@/components/Admin/DeleteConfirmationModal'
import Link from 'next/link'
import FormEditNotice from '@/components/Admin/FormEditNotice'
import InputSearch from '@/components/UI/InputSearch'
import { getArticles } from '@/services/article/getArticles'
import { getAreas } from '@/services/area/getAreas'

export default function Noticias({ areas, articles }) {
  const [showEditModal, setShowEditModal] = useState(false)

  return (
    <LayoutAdmin title="Noticias - Dashboard | H. Ayuntamiento Tezonapa, Ver">
      <section className="bg-gray-200 w-full p-4">
        <InputSearch placeholder="Buscar alguna noticia..." />
        <header className="flex justify-between">
          <h2 className="font-bold text-xl">Noticias Publicadas</h2>
          <button
            onClick={() => setShowEditModal(!showEditModal)}
            className="flex right-0 items-center gap-2 bg-blue-700 text-white px-5 py-1 rounded-lg font-bold">
            <FontAwesomeIcon className="h-4 w-4" icon={faPlus} />
            <span className="">Agregar Nueva noticia</span>
          </button>
        </header>

        <div className="flex max-md:flex-col mt-8 flex-wrap gap-2 justify-between">
          {articles.articles.map((article, index) => (
            <CardNotice key={index} />
          ))}
        </div>
      </section>

      {showEditModal && (
        <Modal
          title="Agregar Nueva Noticia"
          onClose={() => setShowEditModal(!showEditModal)}>
          <FormCreateNotice areas={areas} />
        </Modal>
      )}
    </LayoutAdmin>
  )
}

function CardNotice() {
  const [showOptions, setShowOptions] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  return (
    <div className="bg-gray-100 relative shadow p-3 rounded-lg">
      <Image
        className="h-[250px] w-[300px] max-md:w-full object-cover"
        alt="hola"
        src={imgPrueba}
      />

      <div className="flex justify-between">
        <p className="mt-1 text-base text-gray-600">Area: Principal</p>
        <p className="mt-1 text-base text-gray-600">12 - 06 - 2004</p>
      </div>
      <h2 className="text-gray-700 leading-5 mt-2 text-justify w-[300px] max-md:w-full text-lg font-bold">
        Inicia Oficialmente El Programa De Obras Publicas 2023 En La Comunidad
        De Col Agricola
      </h2>
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="mt-3 text-lg text-blue-700 font-semibold hover:underline">
        Editar
      </button>

      {showOptions && (
        <DropDown
          handleClickRead={() => setShowOptions(!showOptions)}
          handleClickEdit={() => {
            setShowEdit(!showEdit)
            setShowOptions(!showOptions)
          }}
          handleClickDelete={() => {
            setShowDelete(!showDelete)
            setShowOptions(!showOptions)
          }}
        />
      )}

      {showEdit && (
        <Modal title="Editar noticia" onClose={() => setShowEdit(!showEdit)}>
          <FormEditNotice />
        </Modal>
      )}

      {showDelete && (
        <DeleteConfirmationModal
          toogleOpen={() => setShowDelete(!showDelete)}
        />
      )}
    </div>
  )
}

function DropDown({ handleClickRead, handleClickEdit, handleClickDelete }) {
  return (
    <div className="z-10 absolute bottom-0 mb-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32">
      <ul
        className="py-2 text-sm text-gray-700"
        aria-labelledby="dropdownMenuIconButton">
        <li>
          <Link
            onClick={handleClickRead}
            href="/sala-prensa"
            target="_blank"
            className="flex justify gap-3 items-center w-full px-4 py-2 hover:bg-gray-100">
            <FontAwesomeIcon className="h-4 w-4 text-blue-500" icon={faEye} />
            <span className="font-bold">Ver</span>
          </Link>
        </li>
        <li>
          <button
            onClick={handleClickEdit}
            className="flex justify gap-3 items-center w-full px-4 py-2 hover:bg-gray-100">
            <FontAwesomeIcon className="h-4 w-4 text-blue-500" icon={faEdit} />
            <span className="font-bold">Editar</span>
          </button>
        </li>
        <li>
          <button
            onClick={handleClickDelete}
            className="flex justify gap-3 items-center w-full px-4 py-2 hover:bg-gray-100">
            <FontAwesomeIcon className="h-4 w-4 text-red-500" icon={faTrash} />
            <span className="font-bold">Eliminar</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const articles = await getArticles()
  const areas = await getAreas()

  return {
    props: {
      articles,
      areas,
    },
  }
}
