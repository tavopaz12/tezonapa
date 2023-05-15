import { useState } from 'react'

export default function Checkbox({
  title,
  name,
  handleValueInput,
  helperText,
  isChecked,
}) {
  const handleCheckedValue = () => {
    handleValueInput(!isChecked)
  }

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-bold text-gray-900">
        {title}
      </label>
      {helperText && (
        <p id="helper-text-explanation" className="my-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
      <div className="flex items-center pl-2">
        <input
          value={isChecked}
          defaultChecked={isChecked ? true : false}
          onClick={handleCheckedValue}
          id="bordered-checkbox-2"
          type="checkbox"
          name="bordered-checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100"
        />
        <span
          htmlFor="bordered-checkbox-2"
          className="w-full py-2 ml-2 text-sm font-medium text-gray-900">
          {isChecked ? 'Ocultar' : 'Mostrar'}
        </span>
      </div>
    </>
  )
}
