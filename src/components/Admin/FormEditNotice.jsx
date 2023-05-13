import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faSave,
  faUpload,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import InputText from '../UI/InputText'
import InputFile from '../UI/InputFile'
import TextArea from '../UI/TextArea'
import InputSelect from '../UI/InputSelect'
import { useState } from 'react'
import Image from 'next/image'
import { uploadImage } from '@/services/uploadCloudinary'
import { updateArticle } from '@/services/article/patchArticle'
import { data } from 'autoprefixer'

export default function FormEditNotice({ data }) {
  const [title, setTitle] = useState('' || data?.title)
  const [nameArea, setNameArea] = useState('' || data?.area.name)
  const [content, setContent] = useState('' || data?.content)
  const [imgPrincipal, setImgPrincipal] = useState('')
  const [images, setImages] = useState([])
  const [dataImages, setDataImages] = useState(data?.images)

  const [loading, setLoading] = useState(false)

  const handleSelectImgPrincipal = (newImg) => {
    setImgPrincipal(newImg)
  }

  const handleSelectImages = (newImages) => {
    setImages([...images, ...newImages])
  }

  const handleRemoveNewImages = (fileToRemove) => {
    setImages(images.filter((file) => file !== fileToRemove))
  }

  const handleRemoveImages = (fileToRemove) => {
    setDataImages(dataImages.filter((file) => file !== fileToRemove))
  }

  const handleSaveChanges = async (evt) => {
    evt.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('upload_preset', 'crdrsp9k')

      let newImgPrincipalUrl
      let newImagesUrls = []

      if (imgPrincipal) {
        formData.append('file', imgPrincipal.file)
        newImgPrincipalUrl = await uploadImage(formData)
      }

      if (images) {
        for (let i = 0; i < images.length; i++) {
          const file = images[i]

          formData.append('file', file.file)
          const data = await uploadImage(formData)

          if (data.secure_url !== '') {
            newImagesUrls.push(data.secure_url)
          }
        }
      }

      const allImages = [...dataImages, ...newImagesUrls]

      const changes = {
        title,
        banner: newImgPrincipalUrl
          ? newImgPrincipalUrl.secure_url
          : data.banner,
        content,
        areaName: nameArea,
        images: allImages,
      }

      const result = await updateArticle(data?._id, changes)

      console.log(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSaveChanges} className="my-6">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <InputText
            value={title}
            handleValueInput={(evt) => setTitle(evt.target.value)}
            title="Titulo / Encabezado"
            name="title"
            placeholder="Ingrese el titulo de la noticia"
          />
        </div>

        <div className="sm:col-span-2">
          <InputFile
            title="Seleccionar imagen principal"
            handleValueFile={handleSelectImgPrincipal}
          />
        </div>

        <div className="sm:col-span-2">
          <Image
            className="w-full h-[200px] object-cover"
            priority
            width={1000}
            height={1000}
            alt={title}
            src={imgPrincipal.url || data?.banner}
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

        <div className="sm:col-span-2">
          <InputFile
            title="Seleccionar imagenes"
            multiple
            handleValueFile={handleSelectImages}
          />
        </div>
      </div>

      {dataImages && (
        <div className="sm:col-span-2 flex gap-2 flex-wrap">
          {dataImages.map((image, index) => (
            <div key={index} className="relative">
              <Image
                className="h-[200px] w-[200px] object-cover"
                alt={title}
                src={image}
                width={500}
                height={500}
                priority
              />
              <FontAwesomeIcon
                onClick={() => handleRemoveImages(image)}
                className="h-5 w-5 text-white cursor-pointer bg-red-700 top-0 right-0 absolute"
                icon={faXmark}
              />
            </div>
          ))}
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
                onClick={() => handleRemoveNewImages(image)}
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
          className="text-white text-center mt-2 w-2/4 flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
          <FontAwesomeIcon icon={faSave} className="w-4 h-4" />
          {loading ? 'Guardando cambios' : 'Guardar cambios'}{' '}
        </button>
      </div>
    </form>
  )
}
