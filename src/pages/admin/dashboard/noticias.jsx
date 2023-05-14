import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import Image from 'next/image'

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
import { useRouter } from 'next/router'
import { deleteArticle } from '@/services/article/deleteArticle'

export default function Noticias({ areas, articles }) {
  const [showEditModal, setShowEditModal] = useState(false)
  const [dataArticles, setDataArticles] = useState(articles)
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState('')

  const onSearch = async (evt) => {
    evt.preventDefault()
    setQuery(evt.target.value)
    try {
      const res = await fetch(`/api/articles?title=${evt.target.value}`)

      if (!res.ok) {
        throw new Error('Something went wrong with the request')
      }

      const articles = await res.json()

      setDataArticles(articles)
    } catch (error) {
      console.log(error)
    }
  }

  const nextPage = async (evt) => {
    evt.preventDefault()

    if (currentPage < articles?.pages) {
      router.push(
        `/api/articles?page=${currentPage + 1}&title=${query && query}`,
      )
    }
  }

  const prevPage = async (evt) => {
    evt.preventDefault()

    if (currentPage > 1) {
      router.push(
        `/api/articles?page=${currentPage - 1}&title=${query && query}`,
      )
    }
  }

  return (
    <LayoutAdmin title="Noticias - Dashboard | H. Ayuntamiento Tezonapa, Ver">
      <section className="bg-gray-200 w-full p-4">
        <InputSearch
          handleInputValue={onSearch}
          handleSearch={onSearch}
          placeholder="Buscar alguna noticia..."
        />
        <header className="flex justify-between">
          <h2 className="font-bold text-xl">Noticias Publicadas</h2>
          <button
            onClick={() => setShowEditModal(!showEditModal)}
            className="flex right-0 items-center gap-2 bg-blue-700 text-white px-5 py-1 rounded-lg font-bold">
            <FontAwesomeIcon className="h-4 w-4" icon={faPlus} />
            <span className="">Agregar Nueva noticia</span>
          </button>
        </header>

        <div className="grid mt-12 place-content-center font-bold">
          {dataArticles.articles <= 0 && (
            <h2 className="text-3xl capitalize">Sin resultados</h2>
          )}
        </div>

        <div className="flex max-md:flex-col mt-8 flex-wrap gap-2 justify-between">
          {articles.articles.map((article, index) => (
            <CardNotice key={index} data={article} />
          ))}
        </div>

        <div className="flex flex-col items-center mt-6">
          <span className="text-sm text-gray-700">
            Pagina
            <span className="font-semibold mx-1 text-gray-900">
              {dataArticles.articles <= 0 ? '0' : currentPage}
            </span>
            de
            <span className="font-semibold mx-1 text-gray-900">
              {dataArticles?.pages}
            </span>
            paginas totales
          </span>
          <div className="inline-flex mt-2 xs:mt-0">
            <button
              onClick={prevPage}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"></path>
              </svg>
              Prev
            </button>
            <button
              onClick={nextPage}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900">
              Next
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
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

function CardNotice({ data }) {
  const [showOptions, setShowOptions] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const router = useRouter()

  const fecha = new Date(data?.createdAt)
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  const formatDate = new Intl.DateTimeFormat('es-MX', options).format(fecha)

  const handleClickDelete = async (evt) => {
    evt.preventDefault()

    try {
      const res = await deleteArticle(data._id)
      router.push('/admin/dashboard/noticias')

      setShowDelete(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-100 relative shadow p-3 rounded-lg">
      <Image
        className="h-[250px] w-[300px] max-md:w-full object-cover"
        alt="hola"
        src={data?.banner}
        width={1000}
        height={1000}
        priority
      />

      <div className="flex justify-between">
        <p className="mt-1 text-base text-gray-600">Area: {data?.area.name}</p>
        <p className="mt-1 text-base text-gray-600">{formatDate}</p>
      </div>
      <h2 className="text-gray-700 leading-5 mt-2 text-justify w-[300px] max-md:w-full text-lg font-bold">
        {data.title}
      </h2>
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="mt-3 text-lg text-blue-700 font-semibold hover:underline">
        Editar
      </button>

      {showOptions && (
        <DropDown
          slug={data?.slug}
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
        <Modal title={data?.title} onClose={() => setShowEdit(!showEdit)}>
          <FormEditNotice data={data} />
        </Modal>
      )}

      {showDelete && (
        <DeleteConfirmationModal
          handleClickConfirmate={handleClickDelete}
          toogleOpen={() => setShowDelete(!showDelete)}
        />
      )}
    </div>
  )
}

function DropDown({
  handleClickRead,
  handleClickEdit,
  handleClickDelete,
  slug,
}) {
  return (
    <div className="z-10 absolute bottom-0 mb-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32">
      <ul
        className="py-2 text-sm text-gray-700"
        aria-labelledby="dropdownMenuIconButton">
        <li>
          <Link
            onClick={handleClickRead}
            href={`/sala-prensa/${slug}`}
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

export async function getServerSideProps(context) {
  const { page, title } = context.query

  const articles = await getArticles(page, title)
  const areas = await getAreas()

  return {
    props: {
      articles,
      areas,
    },
  }
}
