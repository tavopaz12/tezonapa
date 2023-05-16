import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

export default function CardSalaPrensa({ image, title, slug }) {
  return (
    <div className="flex relative items-center w-[48%] max-md:w-full gap-6 max-md:gap-2 max-md:mb-6 justify-around bg-gray-100 rounded-2xl p-2">
      <figure className="w-2/4 max-md:w-[150px]">
        <Image
          className="h-[200px] max-md:h-[150px] w-full object-cover rounded-2xl"
          alt="hola"
          src={image}
          width={1000}
          height={1000}
          priority
        />
      </figure>
      <div className="w-2/4">
        <Link href={`/sala-prensa/${slug}`}>
          <h2 className="text-gray-600 font-bold text-lg max-md:text-base">
            {title}
          </h2>
        </Link>
        <Link href={`/sala-prensa/${slug}`}>
          <button className="absolute shadow bg-[black] p-2 rounded-[50%] right-0 bottom-0 m-4 max-md:m-2">
            <FontAwesomeIcon className="h-4 w-4 text-white" icon={faPlus} />
          </button>
        </Link>
      </div>
    </div>
  )
}
