import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import Image from 'next/image'

import img from '/public/images/Cascada-1.webp'
import InputSearch from '@/components/UI/InputSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from '@/components/UI/Modal'
import { useState } from 'react'
import DeleteConfirmationModal from '@/components/Admin/DeleteConfirmationModal'
import FormCreateArea from '@/components/Admin/FormCreateArea'
import FormCreateEvent from '@/components/Admin/FormCreateEvent'
import FormEditEvent from '@/components/Admin/FormEditEvent'

export default function Eventos() {
  const [showModalCreate, setShowCreateModal] = useState(false)
  return (
    <LayoutAdmin title="Eventos - Dashboard | H. Ayuntamiento Tezonapa, Ver">
      <section className="bg-gray-200 w-full p-4">
        <InputSearch placeholder="Buscar algun evento..." />
        <header className="flex justify-between">
          <h2 className="font-bold text-xl">Eventos / Avisos Publicados</h2>
          <button
            onClick={() => setShowCreateModal(!showModalCreate)}
            className="flex right-0 items-center gap-2 bg-blue-700 text-white px-5 py-1 rounded-lg font-bold">
            <FontAwesomeIcon className="h-4 w-4" icon={faPlus} />
            <span className="">Agregar Nuevo Evento</span>
          </button>
        </header>

        <div className="flex mt-8 gap-6">
          <CardEvent />
          <CardEvent />
        </div>
      </section>

      {showModalCreate && (
        <Modal
          title="Agregar nuevo evento"
          onClose={() => setShowCreateModal(!showModalCreate)}>
          <FormCreateEvent />
        </Modal>
      )}
    </LayoutAdmin>
  )
}

function CardEvent() {
  const [showEditEvent, setShowEditEvent] = useState(false)
  const [showDeleteEvent, setShowDeleteEvent] = useState(false)
  return (
    <>
      <div className="flex gap-4 w-2/4 bg-gray-50 p-4 rounded-lg">
        <Image className="h-auto w-[200px] object-cover" alt="hola" src={img} />

        <div>
          <p className="mb-2 text-lg font-bold text-gray-700">
            Suspension de labores
          </p>
          <p className="text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            nemo? Esse laborum odit dicta cupiditate obcaecati quas eveniet
            inventore numquam nesciunt possimus! Assumenda magni ab provident,
            libero hic sapiente eius.
          </p>

          <div className="flex gap-4 mt-2">
            <FontAwesomeIcon
              onClick={() => setShowEditEvent(!showEditEvent)}
              className="h-4 w-4 text-blue-700 cursor-pointer"
              icon={faEdit}
            />
            <FontAwesomeIcon
              onClick={() => setShowDeleteEvent(!showDeleteEvent)}
              className="h-4 w-4 text-red-700 cursor-pointer"
              icon={faTrash}
            />
          </div>
        </div>
      </div>

      {showEditEvent && (
        <Modal
          title="Editar Evento"
          onClose={() => setShowEditEvent(!showEditEvent)}>
          <FormEditEvent />
        </Modal>
      )}

      {showDeleteEvent && (
        <DeleteConfirmationModal
          toogleOpen={() => setShowDeleteEvent(!showDeleteEvent)}
        />
      )}
    </>
  )
}
