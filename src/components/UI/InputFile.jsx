import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { selectImage } from 'config/selectImage'
import { selectImages } from 'config/selectImages'

export default function InputFile({
  title,
  required,
  handleValueFile,
  helperText,
  multiple,
  name,
}) {
  const handleSelectImages = selectImages(handleValueFile)
  const handleSelectImage = selectImage(handleValueFile)

  return (
    <>
      <label className="mb-2 block text-sm font-bold text-gray-700">
        {title}
      </label>

      {helperText && (
        <p id="helper-text-explanation" className="my-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}

      <label className="flex w-full gap-3 cursor-pointer items-center rounded-md border border-gray-200 px-6 py-2.5 transition-all">
        <FontAwesomeIcon icon={faUpload} className="h-4 w-4 text-gray-400" />
        <div className="text-gray-600">
          <p className="font-medium text-sm text-gray-400">
            Seleccionar Archivo
          </p>
        </div>
        <input
          name={name}
          onChange={multiple ? handleSelectImages : handleSelectImage}
          id="example5"
          type="file"
          className="sr-only"
          multiple={multiple && true}
          required={required && true}
        />
      </label>
    </>
  )
}
