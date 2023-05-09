import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import logo from '/public/default.png'

export default function FormEditModal() {
  return (
    <form action="#" className="mt-8">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="nameArea"
            className="block mb-2 text-sm font-medium text-gray-900">
            Nombre del area
          </label>
          <input
            type="text"
            name="nameArea"
            id="nameArea"
            className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Escribe el nombre del area"
            required
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900">
            Director del area
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Ingresa el nombre del director"
            required
          />
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Seleccionar Logo
          </label>

          <div className="flex gap-4 items-center justify-center">
            <Image
              className="w-14 h-14 rounded-full object-cover"
              src={logo}
              alt="Rounded avatar"
            />

            <div class="relative overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                class="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>

            <label className="flex w-full gap-3 cursor-pointer items-center rounded-md border border-gray-200 px-6 py-2 transition-all">
              <FontAwesomeIcon
                icon={faUpload}
                className="h-4 w-4 text-gray-400"
              />
              <div className="text-gray-600">
                <p className="font-medium text-sm text-gray-400">
                  Click to upload
                </p>
              </div>
              <input id="example5" type="file" className="sr-only" />
            </label>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Seleccionar Banner
          </label>

          <label className="flex w-full gap-3 cursor-pointer items-center rounded-md border border-gray-200 px-6 py-2 transition-all">
            <FontAwesomeIcon
              icon={faUpload}
              className="h-4 w-4 text-gray-400"
            />
            <div className="text-gray-600">
              <p className="font-medium text-sm text-gray-400">
                Click to upload
              </p>
            </div>
            <input id="example5" type="file" className="sr-only" />
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="text-white text-center mt-2 w-2/4 inline-flex justify-center items-center bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
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
          Actualizar Area
        </button>
      </div>
    </form>
  )
}
