import Link from "next/link";

export default function NavComude({menuLinks, active}) {
  return (
    <nav
      className="flex px-10 my-1 mb-4 rounded-lg bg-gray-50"
      aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="comude"
            className="inline-flex items-center text-base font-medium text-black hover:text-blue-600">
            <svg
              aria-hidden="true"
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Inicio
          </Link>
        </li>

        {menuLinks.map((link) => (
          <li key={link.title}>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"></path>
              </svg>
              <Link
                href={link.link}
                className={`ml-1 text-base font-medium ${
                  link.name === active ? 'text-blue-500' : 'text-black'
                }  hover:text-blue-600`}>
                {link.title}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
