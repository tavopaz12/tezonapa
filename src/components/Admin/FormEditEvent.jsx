import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputFile from '../UI/InputFile'
import InputSelect from '../UI/InputSelect'
import InputText from '../UI/InputText'
import TextArea from '../UI/TextArea'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Checkbox from '../UI/CheckBox'
import { useState } from 'react'
import Image from 'next/image'
import { uploadImage } from '@/services/uploadCloudinary'
import { updateEvent } from '@/services/event/patchEvent'
import { useRouter } from 'next/router'
import Notification from './Notification'

export default function FormEditEvent({ data }) {
  const [title, setTitle] = useState('' || data?.title)
  const [checked, setChecked] = useState(data.show)
  const [content, setContent] = useState('' || data?.content)
  const [imgPrincipal, setImgPrincipal] = useState('')
  const [loading, setLoading] = useState(false)
  const [res, setRes] = useState('')

  const router = useRouter()
  const delay = 5000

  const handleSelectImgPrincipal = (newImg) => {
    setImgPrincipal(newImg)
  }

  const validateInputTrim = () => {
    return Boolean(title && content)
  }

  const handleSaveChanges = async (evt) => {
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
        image: imgPrincipalUrl ? imgPrincipalUrl.secure_url : data.image,
        content,
        show: checked,
      }

      const res = await updateEvent(data._id, newEvent)
      setRes({ success: true, status: 201 })
      setLoading(false)
      router.push(router.asPath)
    } catch (error) {
      setLoading(false)
      setRes({ success: false, status: 404 })
    }

    setTimeout(() => {
      setRes(null)
    }, delay)
  }

  return (
    <>
      {res?.status === 201 && (
        <Notification
          success
          title="Evento Actualizado"
          message="El evento ha sido actualizado exitosamente"
          timeout={delay}
        />
      )}
      {res?.status === 404 && (
        <Notification
          error
          title="Error al actualizar el evento"
          message="No se pudo actualizar el evento correctamente"
          timeout={delay}
        />
      )}
      <form onSubmit={handleSaveChanges} className="my-6">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <InputText
              value={title}
              handleValueInput={(evt) => setTitle(evt.target.value)}
              title="Titulo de el evento"
              name="title"
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
            <InputFile
              handleValueFile={handleSelectImgPrincipal}
              title="Seleccionar banner"
            />
          </div>

          <div className="sm:col-span-2">
            <Image
              className="w-full h-[200px] object-cover"
              priority
              width={1000}
              height={1000}
              alt={title}
              src={imgPrincipal?.url || data?.image}
            />
          </div>
          <div className="sm:col-span-2">
            <TextArea
              value={content}
              handleValueInput={(evt) => setContent(evt.target.value)}
              title="Contenido"
              name="content"
              rows={8}
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
            {loading ? 'Guardando Cambios' : 'Guardar cambios'}
          </button>
        </div>
      </form>
    </>
  )
}
