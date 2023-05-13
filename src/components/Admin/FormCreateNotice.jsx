import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons'
import InputText from '../UI/InputText'
import InputFile from '../UI/InputFile'
import TextArea from '../UI/TextArea'
import InputSelect from '../UI/InputSelect'
import { useState } from 'react'
import Image from 'next/image'

export default function FormCreateNotice({ areas }) {
  const [title, setTitle] = useState('')
  const [areaName, setAreaName] = useState('principal')
  const [content, setContent] = useState('')
  const [imgPrincipal, setImgPrincipal] = useState('')
  const [images, setImages] = useState([])

  const handleSelectImgPrincipal = (newImg) => {
    setImgPrincipal(newImg)
  }

  const handleSelectImages = (newImages) => {
    setImages([...images, ...newImages])
  }

  const handleCreateArticle = (evt) => {
    evt.preventDefault()

    console.log(evt)
  }

  const handleRemove = (fileToRemove) => {
    setImages(images.filter((file) => file !== fileToRemove))
  }

  return (
    <form onSubmit={handleCreateArticle} className="my-6">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <InputText
            value={title}
            handleValueInput={(evt) => setTitle(evt.target.value)}
            title="Titulo / Encabezado"
            name="title"
            required
            placeholder="Ingrese el titulo de la noticia"
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
            title="Seleccionar imagen principal"
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
            handleValueInput={(evt) => setContent(evt.target.value)}
            value={content}
            title="Contenido"
            name="content"
            rows={8}
            required
            placeholder="Ingresa el contenido"
            helperText="Cada punto final, sera tomado en cuenta como un parrafo"
          />
        </div>

        <div className="sm:col-span-2">
          <InputFile
            title="Seleccionar imagenes"
            required
            multiple
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
          className="text-white text-center mt-2 w-2/4 flex justify-center items-center gap-2 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
          <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
          Agregar Nueva Noticia
        </button>
      </div>
    </form>
  )
}
