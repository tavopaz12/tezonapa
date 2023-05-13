import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function InputSearch({ placeholder, required }) {
  return (
    <div className="flex items-center mb-4">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon className="text-gray-400 w-4 h-4" icon={faSearch} />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full pl-10 p-2.5"
          placeholder={placeholder}
          required={required && true}
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800">
        <FontAwesomeIcon className="text-white w-4 h-4" icon={faSearch} />
      </button>
    </div>
  )
}
