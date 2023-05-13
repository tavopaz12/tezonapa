export default function InputText({
  title,
  name,
  placeholder,
  required,
  handleValueInput,
  helperText,
  value
}) {
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
      <input
        value={value}
        onChange={handleValueInput}
        type="text"
        name={name}
        id={name}
        className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder={placeholder}
        required={required && true}
      />
    </>
  )
}
