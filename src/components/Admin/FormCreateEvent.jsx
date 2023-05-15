import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputFile from '../UI/InputFile'
import InputSelect from '../UI/InputSelect'
import InputText from '../UI/InputText'
import TextArea from '../UI/TextArea'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Checkbox from '../UI/CheckBox'
import Image from 'next/image'
import { uploadImage } from '@/services/uploadCloudinary'
import { createNewEvent } from '@/services/event/postEvent'
import { useRouter } from 'next/router'
import Notification from './Notification'

export default function FormCreateEvent({ areas }) {
  const [title, setTitle] = useState('')
  const [areaName, setAreaName] = useState('Principal')
  const [content, setContent] = useState('')
  const [imgPrincipal, setImgPrincipal] = useState('')
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [res, setRes] = useState('')

  const router = useRouter()
  const delay = 5000

  const handleSelectImgPrincipal = (newImg) => {
    setImgPrincipal(newImg)
  }

  const clearInputs = () => {
    setTitle('')
    setAreaName('')
    setContent('')
    setImgPrincipal('')
  }

  const validateInputTrim = () => {
    return Boolean(title && content && imgPrincipal)
  }

  const handleCreateEvent = async (evt) => {
    evt.preventDefault()

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('upload_preset', 'crdrsp9k')

      let imgPrincipalUrl

      if (imgPrincipal) {
        formData.append('file', imgPrincipal.file)
        imgPrincipalUrl = await uploadImage(formData)
      }

      const newEvent = {
        title,
        image: imgPrincipalUrl.secure_url,
        content,
        show: checked,
        areaName,
      }

      const res = await createNewEvent(newEvent)

      setRes({ success: true, status: 201 })
      clearInputs()
      router.push(router.asPath)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setRes({ success: false, status: 404 })
    }
  }

  return (
    <>
      {res.status === 201 && (
        <Notification
          success
          title="Evento creado"
          message="El evento ha sido creado exitosamente"
          timeout={delay}
        />
      )}
      {res.status === 404 && (
        <Notification
          error
          title="Error al crear el evento"
          message="No se pudo crear el evento correctamente"
          timeout={delay}
        />
      )}
      <form onSubmit={handleCreateEvent} className="my-6">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <InputText
              handleValueInput={(evt) => setTitle(evt.target.value)}
              value={title}
              title="Titulo de el evento"
              name="title"
              required
              placeholder="Ingrese el titulo de la noticia"
            />
          </div>

          <div>
            <Checkbox
              isChecked={checked}
              title="Mostrar u ocultar evento"
              handleValueInput={(value) => setChecked(value)}
            />
          </div>

          <div>
            <InputSelect
              value={areaName}
              handleValueInput={(evt) => setAreaName(evt.target.value)}
              title="Selecionar Area"
              defaultSelect="Selecciona una area"
              options={areas.map((area) => area.name)}
            />
          </div>

          <div>
            <InputFile
              title="Seleccionar banner"
              required
              handleValueFile={handleSelectImgPrincipal}
            />
          </div>

          {imgPrincipal && (
            <div className="sm:col-span-2">
              <Image
                className="w-full h-[200px] object-cover"
                priority
                width={1000}
                height={1000}
                alt={title}
                src={imgPrincipal.url}
              />
            </div>
          )}
          <div className="sm:col-span-2">
            <TextArea
              title="Contenido"
              name="content"
              rows={8}
              required
              handleValueInput={(evt) => setContent(evt.target.value)}
              value={content}
              placeholder="Ingresa el contenido"
              helperText="Cada punto final, sera tomado en cuenta como un parrafo"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`text-white text-center mt-2 w-2/4 flex justify-center items-center gap-2 ${
              !validateInputTrim() && 'bg-gray-700 pointer-events-none'
            } ${
              loading
                ? 'bg-gray-700 pointer-events-none'
                : 'bg-blue-700 hover:bg-blue-800'
            } font-medium rounded-lg text-sm px-5 py-2.5`}>
            <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
            {loading ? 'Creando Evento' : 'Crear nuevo evento'}
          </button>
        </div>
      </form>
    </>
  )
}
