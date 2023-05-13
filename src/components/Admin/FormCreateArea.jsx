import Image from 'next/image'

import logoDefault from '/public/default.png'
import bannerDefault from '/public/images/default-banner.jpg'
import InputText from '../UI/InputText'
import InputFile from '../UI/InputFile'
import { useState } from 'react'
import { uploadImage } from '@/services/uploadCloudinary'
import { createNewArea } from '@/services/postArea'

export default function FormCreateArea() {
  const [nameArea, setNameArea] = useState('')
  const [director, setDirector] = useState('')
  const [logo, setLogo] = useState('')
  const [banner, setBaneer] = useState('')

  const handleSelectLogo = (newLogo) => {
    setLogo(newLogo)
  }

  const handleSelectBanner = (newBanner) => {
    setBaneer(newBanner)
  }

  const createArea = async (evt) => {
    evt.preventDefault()

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

      const newArea = {
        name: nameArea,
        banner: bannerUrl.secure_url,
        logo: logoUrl.secure_url,
        director: director,
      }

      const data = await createNewArea(newArea)

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={createArea} className="mt-8">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <InputText
            handleValueInput={(evt) => setNameArea(evt.target.value)}
            title="Nombre del area"
            placeholder="Ingresa el nombre del area"
            name="nameArea"
            required
          />
        </div>

        <div>
          <InputText
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
              src={logo.url || logoDefault}
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
            src={banner.url || bannerDefault}
            alt={banner.file?.name || 'Banner de area'}
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <button
          type="submit"
          className="text-white text-center mt-2 inline-flex justify-center items-center bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
          <svg
            className="mr-1 -ml-1 w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"></path>
          </svg>
          Agregar Nueva Area
        </button>
      </div>
    </form>
  )
}
