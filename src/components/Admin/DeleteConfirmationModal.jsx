export default function DeleteConfirmationModal({ toogleOpen }) {
  return (
    <div
      id="deleteModal"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto bg-[rgba(0,0,0,0.1)] flex overflow-x-hidden fixed top-[50%] right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
          <button
            onClick={toogleOpen}
            type="button"
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="deleteModal">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <svg
            className="text-gray-400 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <p className="mb-4 text-gray-500">
            ¿Estas seguro de eliminar este item?
          </p>
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={toogleOpen}
              data-modal-toggle="deleteModal"
              type="button"
              className="py-2 px-3 outline-none text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900">
              No, Cancelar
            </button>
            <button
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700">
              Si, estoy seguro
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}