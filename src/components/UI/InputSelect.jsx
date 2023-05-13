export default function InputSelect({
  title,
  helperText,
  defaultSelect,
  options,
  handleValueInput,
  value,
  required,
}) {
  return (
    <>
      {title && (
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-bold text-gray-900">
          {title}
        </label>
      )}
      {helperText && (
        <p id="helper-text-explanation" className="my-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
      <select
        required={required && true}
        value={value}
        onChange={handleValueInput}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
        <option defaultValue disabled>
          {defaultSelect}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}
