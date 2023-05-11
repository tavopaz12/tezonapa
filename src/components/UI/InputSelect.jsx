export default function InputSelect({
  title,
  helperText,
  defaultSelect,
  options,
}) {
  return (
    <>
      {title && (
        <label
          for="countries"
          class="block mb-2 text-sm font-bold text-gray-900">
          {title}
        </label>
      )}
      {helperText && (
        <p id="helper-text-explanation" className="my-2 text-sm text-gray-500">
          {helperText}
        </p>
      )}
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
        <option selected disabled>
          {defaultSelect}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}
