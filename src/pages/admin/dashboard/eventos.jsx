import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import Image from 'next/image'

import InputSearch from '@/components/UI/InputSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Modal from '@/components/UI/Modal'
import { useState } from 'react'
import DeleteConfirmationModal from '@/components/Admin/DeleteConfirmationModal'
import FormCreateEvent from '@/components/Admin/FormCreateEvent'
import FormEditEvent from '@/components/Admin/FormEditEvent'
import { getEvents } from '@/services/event/getEvents'
import { getAreas } from '@/services/area/getAreas'
import { deleteEvent } from '@/services/event/deleteEvent'
import { useRouter } from 'next/router'

export default function Eventos({ events, areas }) {
  const [showModalCreate, setShowCreateModal] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()

  const onSearch = (evt) => {
    evt.preventDefault()

    router.push(`?area=${query}`)
  }

  return (
    <LayoutAdmin title="Eventos - Dashboard | H. Ayuntamiento Tezonapa, Ver">
      <section className="bg-gray-200 w-full p-4">
        <InputSearch
          placeholder="Buscar evento por area..."
          handleInputValue={(evt) => setQuery(evt.target.value)}
          handleSearch={onSearch}
        />
        <header className="flex justify-between">
          <h2 className="font-bold text-xl">Eventos / Avisos Publicados</h2>
          <button
            onClick={() => setShowCreateModal(!showModalCreate)}
            className="flex right-0 items-center gap-2 bg-blue-700 text-white px-5 py-1 rounded-lg font-bold">
            <FontAwesomeIcon className="h-4 w-4" icon={faPlus} />
            <span className="">Agregar Nuevo Evento</span>
          </button>
        </header>

        <div className="flex mt-8 gap-6 flex-wrap justify-between">
          {events.map((event, index) => (
            <CardEvent data={event} key={index} />
          ))}
        </div>
      </section>

      {showModalCreate && (
        <Modal
          title="Agregar nuevo evento"
          onClose={() => setShowCreateModal(!showModalCreate)}>
          <FormCreateEvent areas={areas} />
        </Modal>
      )}
    </LayoutAdmin>
  )
}

function CardEvent({ data }) {
  const [showEditEvent, setShowEditEvent] = useState(false)
  const [showDeleteEvent, setShowDeleteEvent] = useState(false)
  const router = useRouter()

  const handleClickDelete = async (evt) => {
    evt.preventDefault()

    try {
      const res = await deleteEvent(data._id)
      router.push(router.asPath)

      setShowDeleteEvent(false)
    } catch (error) {
      console.log('...logging error to our system...')
    }
  }
  return (
    <>
      <div className="flex gap-4 w-[48%] bg-gray-50 p-4 rounded-lg">
        <Image
          className="h-auto w-[150px] object-cover"
          alt={data.title}
          src={data.image}
          width={500}
          height={500}
          priority
        />

        <div>
          <p className="mb-2 text-lg font-bold text-gray-700">{data.title} </p>
          <p className="text-base text-gray-600">{data.content}</p>

          <p
            className={`font-bold my-2 ${
              data.show ? 'text-green-700' : 'text-red-700'
            }`}>
            Estado: {data.show ? 'Activo' : 'Desactivado'}
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
          title={data.title}
          onClose={() => setShowEditEvent(!showEditEvent)}>
          <FormEditEvent data={data} />
        </Modal>
      )}

      {showDeleteEvent && (
        <DeleteConfirmationModal
          handleClickConfirmate={handleClickDelete}
          toogleOpen={() => setShowDeleteEvent(!showDeleteEvent)}
        />
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const { area } = context.query

  const events = await getEvents(area)
  const areas = await getAreas()

  return {
    props: {
      events,
      areas,
    },
  }
}
