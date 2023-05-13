import { useEffect, useState } from 'react'

export default function Notification({
  toogleClose,
  success,
  error,
  warning,
  title,
  message,
  timeout,
}) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      toogleClose && toogleClose()
    }, timeout)

    return () => clearTimeout(timer)
  }, [toogleClose, timeout])

  if (!visible) {
    return null
  }

  return (
    <div className="fixed top-0 right-0 m-4 w-1/4 rounded-xl border border-secondary-50 bg-white p-4 text-sm shadow-lg z-50">
      {toogleClose && (
        <button
          onClick={toogleClose}
          className="top-4 absolute right-4 ml-auto text-secondary-500 hover:text-secondary-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
      <div className="flex space-x-4">
        {success && <IconSuccess />}
        {error && <IconError />}
        {warning && <IconWarning />}
        <div className="flex-1">
          <h2 className="pr-6 font-medium text-secondary-900">{title}</h2>
          <p className="mt-1 text-secondary-500">{message}</p>
          {toogleClose && (
            <div className="mt-2 flex space-x-4">
              <button
                onClick={toogleClose}
                className="inline-block font-medium leading-loose text-secondary-500 hover:text-secondary-900">
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function IconWarning() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

function IconSuccess() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

function IconError() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}
