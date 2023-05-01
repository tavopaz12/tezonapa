import Link from 'next/link'
import { useState } from 'react'
import { links } from 'config/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

// fixed top-0 w-[95%]

export default function Nav({ linkActive }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <nav className="bg-[#2A2D34] border-t-8 border-[#2D974B]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl max-md:p-1">
          <button
            onClick={() => setShow(!show)}
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg md:hidden md:hover:bg-gray-100 focus:outline-none"
            aria-controls="mega-menu-full"
            aria-expanded="false">
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>

          <p className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200">
            Tezonapa, Veracruz
          </p>

          <div
            id="mega-menu-full"
            className={`items-center font-medium ${
              show ? 'flex' : 'hidden'
            }  w-full md:flex md:w-auto md:order-1`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:mt-0 md:border-0 md:ml-4">
              {links.map((link) => (
                <LinkNav
                  key={link.title}
                  link={link.link}
                  linkActive={linkActive}
                  slug={link.slug}
                  subLinks={link.subLinks}
                  title={link.title}
                  listLinks={link.listLinks}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

function LinkNav({ link, linkActive, slug, subLinks, title, listLinks }) {
  const [activeLink, setActiveLink] = useState(linkActive)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleHiddenDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <li>
      {subLinks ? (
        <button
          onClick={handleHiddenDropdown}
          className={`flex items-center gap-1 max-md:text-base md:hover:text-[#BFFFF1] hover:[#BFFFF1] font-bold text-lg md:px-6 ${
            activeLink === link
              ? 'md:bg-white md:text-black max-md:text-blue-500 md:hover:text-gray-700'
              : ''
          } md:py-4 py-2 pl-3 pr-4 text-white `}
          aria-current="page">
          {title} <FontAwesomeIcon className="w-4 h-4" icon={faCaretDown} />
        </button>
      ) : (
        <Link
          href={slug}
          onClick={() => setActiveLink(link)}
          className={`block max-md:text-base md:hover:text-[#BFFFF1] hover:[#BFFFF1] font-bold text-lg md:px-6 ${
            activeLink === link
              ? 'md:bg-white md:text-black max-md:text-blue-500 md:hover:text-gray-700'
              : ''
          } md:py-4 py-2 pl-3 pr-4 text-white `}
          aria-current="page">
          <h2>{title}</h2>
        </Link>
      )}
      {subLinks && <Dropdown links={listLinks} visible={showDropdown} />}
    </li>
  )
}

function Dropdown({ links, visible }) {
  return (
    <div
      id="dropdownNavbar"
      className={`z-10 ${
        visible ? 'absolute' : 'hidden'
      }  md:mt-[0.04rem] max-md:ml-4 md:text-center max-md:relative block font-bold bg-[#2A2D34] rounded shadow w-[12rem]`}>
      <ul
        className="py-2 text-base text-white"
        aria-labelledby="dropdownLargeButton">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.slug}
              target={link.externo && '_blank'}
              className="block capitalize px-4 py-2 md:hover:bg-slate-50 max-md:text-gray-400 md:hover:text-black">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
