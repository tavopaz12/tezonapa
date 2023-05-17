import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { formatDate } from 'config/formDate'

export default function ArticlesPricipals({ data, events }) {
  const artcilesRecents = data?.articles?.slice(1, 4)

  return (
    <section
      className={`${
        data.articles.length <= 1 ? 'block' : 'flex'
      } max-md:flex-col justify-between mb-8 gap-6`}>
      <div
        className={`${
          data.articles.length <= 1 ? 'w-full' : 'w-2/4'
        } max-md:w-full bg-gray-200 h-max rounded-2xl p-4`}>
        <h2 className="text-2xl font-bold text-justify text-gray-700 max-md:text-center max-md:text-xl">
          <Link href={`/sala-prensa/${data?.articles[0]?.slug}`}>
            {data?.articles[0].title}
          </Link>
        </h2>
        <p className="mt-2 mb-2 line-clamp-4 text-justify text-gray-500 max-md:text-justify">
          Tezonpa, Ver. ({formatDate(data?.articles[0]?.createdAt)}).{' '}
          {data?.articles[0]?.content}
        </p>
        <Image
          priority
          width={1000}
          height={1000}
          className="mt-4 mb-4 max-h-[400px] w-full object-cover"
          alt="principal"
          src={data?.articles[0]?.banner}
        />
        <Link href={`/sala-prensa/${data?.articles[0]?.slug}`}>
          <button className="bg-gray-700 w-full rounded-2xl px-4 max-md:py-1 py-1 text-lg max-md:text-base text-white font-bold">
            Leer más...
          </button>
        </Link>
      </div>

      <div className="w-2/4 max-md:w-full flex flex-col h-max p-4 max-md:p-0 gap-4">
        {events[0]?.show ? (
          <>
            <h2 className="font-bold text-2xl text-center">EVENTO DESTACADO</h2>
            <div className="block relative h-full items-center gap-4 bg-gray-200 p-2 rounded-2xl">
              <h2 className="text-lg text-center mb-4 max-md:text-sm max-md:text-justify font-bold text-gray-700 leading-6 max-md:mb-7">
                {events[0]?.title}
              </h2>
              <p className="my-4 text-base font-medium text-gray-500">
                {events[0]?.content}
              </p>
              <Image
                loading="lazy"
                width={500}
                height={500}
                className="w-full h-[400px] max-md:h-36 object-fill rounded-2xl"
                alt="principal"
                src={events[0]?.image}
              />
            </div>
          </>
        ) : (
          <>
            {artcilesRecents.map((article, index) => (
              <div
                key={index}
                className="flex relative items-center gap-4 bg-gray-200 p-2 rounded-2xl">
                <Image
                  loading="lazy"
                  width={500}
                  height={500}
                  className="h-44 w-44 max-md:w-[120px] max-md:h-36 object-cover rounded-2xl"
                  alt="principal"
                  src={article.banner}
                />
                <Link href={`sala-prensa/${article.slug}`}>
                  <h2 className="text-lg max-md:text-sm max-md:text-justify font-bold text-gray-700 leading-6 max-md:mb-7">
                    {article.title}
                  </h2>
                </Link>
                <Link href={`sala-prensa/${article.slug}`}>
                  <button className="absolute shadow bg-black p-2 rounded-[50%] right-0 bottom-0 m-4 max-md:m-2">
                    <FontAwesomeIcon
                      className="h-4 w-4 text-white"
                      icon={faPlus}
                    />
                  </button>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  )
}
