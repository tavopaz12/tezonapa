import { useState } from 'react'

export default function InputDate({
  title,
  name,
  placeholder,
  required,
  handleValueInput,
  helperText,
  value,
  errorText
}) {
  const [error, setError] = useState('')
  const currentDate = new Date().toISOString().split('T')[0] // obtener fecha actual en formato yyyy-mm-dd

  const validateDate = (date) => {
    const day = new Date(date).getDay()
    if (day === 6 || day === 5) {
      setError('No se permiten fechas en fin de semana')
    } else {
      setError('')
    }
  }

  const handleChange = (evt) => {
    handleValueInput && handleValueInput(evt)
    validateDate(evt.target.value)
  }

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-bold text-gray-900">
        {title}
      </label>

      <input
        defaultValue={value}
        onChange={handleChange}
        type="date"
        name={name}
        id={name}
        min={currentDate}
        max="2025-12-31"
        className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeholder}
        required={required && true}
      />
      {errorText && <p className="text-red-500 text-sm">{errorText}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  )
}
