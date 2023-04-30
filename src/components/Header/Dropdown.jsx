import { useEffect } from 'react'
import { useState } from 'react'

const directorio = [
  {
    name: 'Policia Municipal',
    tel: '278 736 1590',
  },
  {
    name: 'Dif Municipal',
    tel: '278 736 0841',
  },
  {
    name: 'H. Ayuntamiento',
    tel: '278 736 0122',
  },
  {
    name: 'Proteccion Civil',
    tel: '278 102 3198',
  },
]

export default function Dropdown({ title }) {
  const [showList, setShowList] = useState(false)

  const handleClickShow = () => {
    setShowList(!showList)
  }
  const handleClickHidden = () => {
    setShowList(false)
  }

  return (
    <>
      <button
        onClick={handleClickShow}
        onMouseEnter={handleClickShow}
        onMouseOut={handleClickHidden}
        id="dropdownDelayButton"
        type="button"
        className='max-md:text-[0.7rem] font-bold max-md:font-bold'
        >
        {title}
      </button>

      {showList && (
        <div
          id="dropdownDelay"
          className="z-10 border border-gray-500 w-50 ml-[-5rem] max-md:ml-0 fixed bg-white divide-y divide-gray-100 rounded-lg shadow">
          <ul
            className="py-2 text-base text-gray-900"
            aria-labelledby="dropdownDelayButton">
            {directorio.map((area) => (
              <li key={area.name}>
                <p className="block px-4 py-2">
                  <span className="font-semibold max-md:text-sm">{area.name}</span>:{' '}
                  <span className="font-bold max-md:text-sm">{area.tel}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
