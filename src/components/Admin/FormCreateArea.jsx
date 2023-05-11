import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import logo from '/public/default.png'
import InputText from '../UI/InputText'
import InputFile from '../UI/InputFile'

export default function FormCreateArea() {
  return (
    <form action="#" className="mt-8">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <InputText
            title="Nombre del area"
            placeholder="Ingresa el nombre del area"
            name="nameArea"
            required
          />
        </div>

        <div>
          <InputText
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
              className="w-14 h-14 rounded-full object-cover"
              src={logo}
              alt="Rounded avatar"
            />
            <InputFile required/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <InputFile title="Seleccionar Banner" required />
        </div>
      </div>

      <div className="flex justify-end">
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
