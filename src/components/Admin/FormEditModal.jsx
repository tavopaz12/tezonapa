import Image from 'next/image'

import logoDefault from '/public/default.png'
import bannerDefault from '/public/images/default-banner.jpg'
import InputText from '../UI/InputText'
import InputFile from '../UI/InputFile'
import { useState } from 'react'
import { uploadImage } from '@/services/uploadCloudinary'
import Notification from './Notification'
import { useRouter } from 'next/router'
import { updateArea } from '@/services/area/patchArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

export default function FormEditArea({
  id,
  nombreArea,
  nameDirector,
  urlLogo,
  urlBanner,
}) {
  const [nameArea, setNameArea] = useState('' || nombreArea)
  const [director, setDirector] = useState('' || nameDirector)
  const [logo, setLogo] = useState('')
  const [banner, setBaneer] = useState('')
  const [res, setRes] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const delay = 5000

  const handleSelectLogo = (newLogo) => {
    setLogo(newLogo)
  }

  const handleSelectBanner = (newBanner) => {
    setBaneer(newBanner)
  }

  const clearInputs = () => {
    setBaneer('')
    setLogo('')
    setNameArea('')
    setDirector('')
  }

  const handleUpdateArea = async (evt) => {
    evt.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()
      formData.append('upload_preset', 'crdrsp9k')
      let logoUrl
      let bannerUrl

      if (logo) {
        formData.append('file', logo.file)
        logoUrl = await uploadImage(formData)
      }

      if (banner) {
        formData.append('file', banner.file)
        bannerUrl = await uploadImage(formData)
      }

      const changes = {
        name: nameArea,
        banner: bannerUrl?.secure_url,
        logo: logoUrl?.secure_url,
        director: director,
      }

      const data = await updateArea(id, changes)

      setRes({ success: true, status: 201 })
      setLoading(false)

      router.push('/admin/dashboard/areas')
    } catch (error) {
      console.log(error)
      setRes({ success: false, status: 404 })
      setLoading(false)
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
          title="Area Actualizada"
          message="El area ha sido actualizada exitosamente"
          timeout={delay}
        />
      )}
      {res?.status === 404 && (
        <Notification
          error
          title="Error al actualizar el area"
          message="No se pudo actualizar el area correctamente"
          timeout={delay}
        />
      )}
      <form onSubmit={handleUpdateArea} className="mt-8">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <InputText
              value={nameArea}
              handleValueInput={(evt) => setNameArea(evt.target.value)}
              title="Nombre del area"
              placeholder="Ingresa el nombre del area"
              name="nameArea"
              required
            />
          </div>

          <div>
            <InputText
              value={director}
              handleValueInput={(evt) => setDirector(evt.target.value)}
              title="Nombre del director"
              placeholder="Ingresa el nombre del director"
              name="nameDirector"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Seleccionar Logo
            </label>

            <div className="flex gap-2 items-center justify-center">
              <Image
                priority
                className="w-14 h-14 rounded-full object-cover"
                src={logo.url || urlLogo || logoDefault}
                width={100}
                height={100}
                alt={logo.file?.name || 'Logo de area'}
              />
              <InputFile handleValueFile={handleSelectLogo} name="logo" />
            </div>
          </div>

          <div className="sm:col-span-2">
            <InputFile
              title="Seleccionar Banner"
              handleValueFile={handleSelectBanner}
              name="banner"
            />
          </div>
          <div className="sm:col-span-2">
            <Image
              priority
              className="w-full h-[150px] object-cover"
              src={banner.url || urlBanner || bannerDefault}
              alt={banner.file?.name || 'Banner de area'}
              width={1000}
              height={500}
            />
          </div>
        </div>

        <div className="flex justify-end mb-6">
          <button
            type="submit"
            className={`text-white text-center mt-2 inline-flex justify-center items-center gap-2 ${
              loading
                ? 'bg-gray-700 pointer-events-none'
                : 'bg-blue-700 hover:bg-blue-800'
            } font-medium rounded-lg text-sm px-4 py-2`}>
            <FontAwesomeIcon icon={faSave} className="mr-1 -ml-1 w-4 h-4" />
            {loading ? 'Actualizando Area' : 'Guardar cambios'}
          </button>
        </div>
      </form>
    </>
  )
}
