import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'
import Modal from '@/components/UI/Modal'

import img from '/public/images/Cascada-1.webp'
import DeleteConfirmationModal from '@/components/Admin/DeleteConfirmationModal'
import FormCreateArea from '@/components/Admin/FormCreateArea'
import FormEditModal from '@/components/Admin/FormEditModal'
import Notification from '@/components/Admin/Notification'

import banner from '/public/images/banner.webp'

export default function Areas() {
  const [showModalCreate, setShowModalCreate] = useState(false)

  return (
    <LayoutAdmin title="Areas - Dashboard | H. Ayuntamiento Tezonapa, Ver">
      <section className="bg-gray-200 w-full p-4">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center justify-between bg-gray-50 p-4">
            <span className="font-bold text-lg">Areas Registradas</span>
            <button
              onClick={() => setShowModalCreate(!showModalCreate)}
              className="flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-1 rounded-xl font-bold">
              <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
              <span>Agregar Nueva Area</span>
            </button>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Logo
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre del area
                </th>
                <th scope="col" className="px-6 py-3">
                  Director
                </th>
                <th scope="col" className="px-6 py-3">
                  Banner
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <ListArea banner={banner} />
              <ListArea banner={banner} />
              <ListArea banner={banner} />
              <ListArea banner={banner} />
            </tbody>
          </table>
        </div>
      </section>
      {showModalCreate && (
        <Modal
          title="Agregar nueva area"
          onClose={() => setShowModalCreate(!showModalCreate)}>
          <FormCreateArea />
        </Modal>
      )}
    </LayoutAdmin>
  )
}

function ListArea({ id, banner, nombreArea, director, logo }) {
  const [showOptions, setShowOptions] = useState(false)
  const [showModalConfirmation, setShowModalConfirmation] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  return (
    <>
      <tr className="bg-white border-b relative">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          54109e9a
        </th>
        <th className="px-6 py-4">
          {logo ? (
            <Image
              className="w-10 h-10 rounded-full"
              src={img}
              alt="Jese image"
            />
          ) : (
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                JL
              </span>
            </div>
          )}
        </th>
        <td className="px-6 py-4">Fomento agropecuario</td>
        <td className="px-6 py-4">Jose Octavio Paz Juarez</td>
        <td className="px-6 py-4">
          <Image alt="hola" src={banner} className='w-96 h-14 object-cover'/>
        </td>

        <td className="px-6 py-6 flex flex-col items-center justify-center">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
            type="button">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>

          {showOptions && (
            <div className="z-10 absolute top-[-1rem] mr-[13rem] w-44 bg-white rounded divide-y divide-gray-300 shadow-xl border border-gray-300">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button
                    onClick={() => {
                      setShowEditModal(!showEditModal)
                      setShowOptions(!showOptions)
                    }}
                    className="flex items-center justify-center gap-4 font-semibold py-2 px-4 w-full hover:bg-gray-100 text-gray-700">
                    <FontAwesomeIcon
                      className="w-4 h-4 text-blue-600"
                      icon={faEdit}
                    />
                    <span>Editar</span>
                  </button>
                </li>
              </ul>
              <div className="py-1">
                <button
                  onClick={() => {
                    setShowModalConfirmation(!showModalConfirmation)
                    setShowOptions(!showOptions)
                  }}
                  className="flex items-center justify-center gap-4 font-semibold py-2 px-4 w-full text-sm text-gray-700 hover:bg-gray-100">
                  <FontAwesomeIcon
                    className="h-4 w-4 text-red-600"
                    icon={faTrash}
                  />
                  <span>Eliminar</span>
                </button>
              </div>
            </div>
          )}
        </td>
      </tr>

      {showEditModal && (
        <Modal
          title="Editar Area"
          onClose={() => setShowEditModal(!showEditModal)}>
          <FormEditModal />
        </Modal>
      )}

      {showModalConfirmation && (
        <DeleteConfirmationModal
          toogleOpen={() => setShowModalConfirmation(!showModalConfirmation)}
        />
      )}
    </>
  )
}
