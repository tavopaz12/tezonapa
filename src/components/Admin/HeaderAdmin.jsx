import Image from 'next/image'
import logo from '/public/logo.webp'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faCalendar,
  faHome,
  faNewspaper,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const links = [
  {
    title: 'Inicio',
    link: '/admin/dashboard',
    icon: <FontAwesomeIcon className="h-4 w-4" icon={faHome} />,
  },
  {
    title: 'Areas',
    link: '/admin/dashboard/areas',
    icon: <FontAwesomeIcon className="h-4 w-4" icon={faBuilding} />,
  },
  {
    title: 'Noticias',
    link: '/admin/dashboard/noticias',
    icon: <FontAwesomeIcon className="h-4 w-4" icon={faNewspaper} />,
  },
  {
    title: 'Eventos',
    link: '/admin/dashboard/eventos',
    icon: <FontAwesomeIcon className="h-4 w-4" icon={faCalendar} />,
  },
]

export default function HeaderAdmin() {

  return (
    <header className="w-[20%] max-md:bg-white max-md:sticky max-md:z-10 max-md:top-0 max-md:w-full max-md:h-auto p-4 h-screen relative md:border-r-2 border-gray-200 shadow-md">
      <div className="flex items-center gap-4 max-md:gap-2 max-md:justify-between">
        <figure className="flex gap-4 items-center">
          <Link href="/admin/dashboard">
            <Image
              className="h-12 w-12 max-md:h-6 max-md:w-6"
              alt="Tezonapa Logo"
              src={logo}
            />
          </Link>
          <h1 className="font-semibold text-lg max-md:text-sm text-gray-500">
            Tezonapa, Veracruz
          </h1>
        </figure>

        <div className="md:hidden">
          <button
            onClick={() => signOut({ callbackUrl: '/admin' })}
            className="font-bold text-gray-500 max-md:hover:text-red-600 flex gap-2 items-center">
            <FontAwesomeIcon className="h-4 w-4" icon={faRightFromBracket} />
            <span className="text-sm">Cerrar sesión</span>
          </button>
        </div>
      </div>

      <nav className="mt-12 max-md:mt-2">
        <ul className="max-md:flex max-md:flex-wrap">
          {links.map(({ link, title, icon }) => (
            <Link href={link} key={title}>
              <li className="mt-10 md:text-gray-700 max-md:mt-5 max-md:text-gray-600 ml-6 max-md:ml-4 text-center flex items-center gap-4">
                <i>{icon}</i>
                <span className="text-lg max-md:text-sm font-semibold">
                  {title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <button
        onClick={() => signOut({ callbackUrl: '/admin' })}
        className="absolute max-md:hidden bottom-0 m-8 font-bold text-gray-700 hover:text-red-600 flex gap-4 items-center">
        <FontAwesomeIcon className="h-5 w-5" icon={faRightFromBracket} />
        Cerrar sesión
      </button>
    </header>
  )
}
