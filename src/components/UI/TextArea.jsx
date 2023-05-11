export default function TextArea({
  title,
  name,
  placeholder,
  required,
  rows,
  helperText,
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

      <textarea
        id={name}
        rows={rows}
        required={required && true}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none"
        placeholder={placeholder}></textarea>
    </>
  )
}
