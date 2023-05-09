export default function Modal({ title, onClose, children }) {
  const handleClickOutModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  return (
    <article
      onClick={handleClickOutModal}
      id="crypto-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed grid bg-[rgba(0,0,0,0.2)] place-items-center top-0 left-0 right-0 z-50 w-full p-4 md:inset-0 h-screen max-h-full">
      <div className="relative w-[50%] max-h-full max-md:w-[80%]">
        <div className="relative bg-white rounded-lg border border-gray-400 shadow-xl">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-hide="crypto-modal">
            <span className="sr-only">Close modal</span>
            <IconClose />
          </button>

          <header className="px-6 py-4 border-b border-gray-400 rounded-t">
            {title && (
              <h3 className="text-2xl text-center font-bold text-gray-900 lg:text-xl">
                {title}
              </h3>
            )}
          </header>

          <section className="px-6 h-[500px] overflow-y-auto scrollbar-hide">
            {children}
          </section>
        </div>
      </div>
    </article>
  )
}

function IconClose() {
  return (
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
  )
}
