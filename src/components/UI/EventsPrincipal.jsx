import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { formatDate } from 'config/formDate'

export default function EventsPrincipals({ data }) {
  const eventsRecents = data.slice(1, 4)

  return (
    <section className="flex max-md:flex-col justify-between mb-8 gap-6">
      <div className="w-2/4 max-md:w-full bg-gray-200 h-max rounded-2xl p-4">
        <h2 className="text-2xl font-bold text-justify text-gray-700 max-md:text-center max-md:text-xl">
          {data[0].title}
        </h2>
        <p className="mt-2 mb-2 line-clamp-4 text-justify text-gray-500 max-md:text-justify">
          {data[0]?.content}
        </p>
        <Image
          priority
          width={1000}
          height={1000}
          className="mt-4 mb-4 max-h-[300px] w-full object-cover"
          alt="principal"
          src={data[0].image}
        />
      </div>

      <div className="w-2/4 max-md:w-full flex flex-col h-min p-4 max-md:p-0 gap-4">
        {eventsRecents.map((event, index) => (
          <>
          <div
            key={index}
            className="flex relative items-center gap-4 bg-gray-200 p-2 rounded-2xl">
            <Image
              loading="lazy"
              width={500}
              height={500}
              className="h-30 w-44 max-md:w-[120px] max-md:h-36 object-cover rounded-2xl"
              alt="principal"
              src={event.image}
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-lg max-md:text-sm max-md:text-justify font-bold text-gray-700 leading-6 max-md:mb-7">
                {event.title}
              </h2>
              <p>{event.content}</p>
            </div>
          </div>
            </>
        ))}
      </div>
    </section>
  )
}
