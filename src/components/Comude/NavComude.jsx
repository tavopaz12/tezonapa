import Link from 'next/link'

export default function NavComude({ menuLinks, active }) {
  return (
    <nav className="flex px-10 max-md:px-4 my-1 mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 max-md:space-x-0">
        <li className="inline-flex items-center">
          <Link
            href="/departamento/comude"
            className="inline-flex max-md:font-semibold items-center text-lg max-md:text-sm font-medium text-black hover:text-blue-600">
            Comude
          </Link>
        </li>

        {menuLinks.map((link) => (
          <li key={link.title}>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 max-md:w-4 max-md:h-4 max-md:mt-1 text-black"
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
                className={`ml-1 max-md:font-semibold max-md:text-sm text-base font-medium ${
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
