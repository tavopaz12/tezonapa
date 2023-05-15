import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
import InputText from '../UI/InputText'
import InputFile from '../UI/InputFile'
import TextArea from '../UI/TextArea'
import InputSelect from '../UI/InputSelect'
import { useState } from 'react'
import Image from 'next/image'
import { uploadImage } from '@/services/uploadCloudinary'
import { separateTitle } from 'config/separateText'
import { createNewArticle } from '@/services/article/postArticle'
import { useRouter } from 'next/router'
import Notification from './Notification'

export default function FormCreateNotice({ areas }) {
  const [title, setTitle] = useState('')
  const [areaName, setAreaName] = useState('Principal')
  const [content, setContent] = useState('')
  const [imgPrincipal, setImgPrincipal] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [res, setRes] = useState('')

  const validateInputTrim = () => {
    return Boolean(title && content && imgPrincipal && images.length !== 0)
  }

  const router = useRouter()

  const delay = 5000

  const handleSelectImgPrincipal = (newImg) => {
    setImgPrincipal(newImg)
  }

  const clearInputs = () => {
    setTitle('')
    setContent('')
    setImgPrincipal('')
    setImages('')
  }

  const handleSelectImages = (newImages) => {
    setImages([...images, ...newImages])
  }

  const handleCreateArticle = async (evt) => {
    evt.preventDefault()

    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('upload_preset', 'crdrsp9k')

      let imgPrincipalUrl
      let imagesUrls = []

      if (imgPrincipal) {
        formData.append('file', imgPrincipal.file)
        imgPrincipalUrl = await uploadImage(formData)
      }

      if (images) {
        for (let i = 0; i < images.length; i++) {
          const file = images[i]

          formData.append('file', file.file)
          const data = await uploadImage(formData)

          if (data.secure_url !== '') {
            imagesUrls.push(data.secure_url)
          }
        }
      }

      const slug = separateTitle(title)

      const newNotice = {
        title,
        banner: imgPrincipalUrl.secure_url,
        content,
        images: imagesUrls,
        slug,
        areaName,
      }

      const res = await createNewArticle(newNotice)

      setRes({ success: true, status: 201 })
      setLoading(false)
      clearInputs()

      router.push(router.asPath)
    } catch (error) {
      setRes({ success: false, status: 404 })
      setLoading(false)
    }

    setTimeout(() => {
      setRes(null)
    }, delay)
  }

  const handleRemove = (fileToRemove) => {
    setImages(images.filter((file) => file !== fileToRemove))
  }

  return (
    <>
      {res?.status === 201 && (
        <Notification
          success
          title="Articulo creado"
          message="El articulo ha sido creado exitosamente"
          timeout={delay}
        />
      )}
      {res?.status === 404 && (
        <Notification
          error
          title="Error al crear el articulo"
          message="No se pudo crear el articulo correctamente"
          timeout={delay}
        />
      )}
      <form onSubmit={handleCreateArticle} className="my-6">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <InputText
              required
              value={title}
              handleValueInput={(evt) => setTitle(evt.target.value)}
              title="Titulo / Encabezado"
              name="title"
              placeholder="Ingrese el titulo de la noticia"
            />
          </div>

          <div>
            <InputSelect
              required
              value={areaName}
              handleValueInput={(evt) => setAreaName(evt.target.value)}
              title="Selecionar Area"
              defaultSelect="Selecciona una area"
              options={areas.map((area) => area.name)}
            />
          </div>

          <div>
            <InputFile
              required
              title="Seleccionar imagen principal"
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
              required
              handleValueInput={(evt) => setContent(evt.target.value)}
              value={content}
              title="Contenido"
              name="content"
              rows={8}
              placeholder="Ingresa el contenido"
              helperText="Cada punto final, sera tomado en cuenta como un parrafo"
            />
          </div>

          <div className="sm:col-span-2">
            <InputFile
              title="Seleccionar imagenes"
              multiple
              required
              handleValueFile={handleSelectImages}
            />
          </div>
        </div>

        {images && (
          <div className="sm:col-span-2 flex gap-2 flex-wrap">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  className="h-[200px] w-[200px] object-cover"
                  alt={title}
                  src={image.url}
                  width={500}
                  height={500}
                  priority
                />

                <FontAwesomeIcon
                  onClick={() => handleRemove(image)}
                  className="h-5 w-5 text-white cursor-pointer bg-red-700 top-0 right-0 absolute"
                  icon={faXmark}
                />
              </div>
            ))}
          </div>
        )}

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
            {loading ? 'Creando Articulo' : 'Crear nuevo articulo'}
          </button>
        </div>
      </form>
    </>
  )
}
