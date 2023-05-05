import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function ArticlesPricipals({ articles }) {
  const artcilesRecents = articles.slice(1, 4)

  const separateTitle = (title) => {
    const texto = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "")
    return texto.toLowerCase().split(' ').join('-')
  }

  return (
    <section className="flex max-md:flex-col justify-between mb-8 gap-6">
      <div className="w-2/4 max-md:w-full bg-gray-200 h-max rounded-2xl p-4">
        <Link href={`sala-prensa/${separateTitle(articles[0]?.title)}`}>
          <h3 className="text-2xl font-bold text-justify text-gray-700 max-md:text-center max-md:text-xl">
            {articles[0]?.title}
          </h3>
        </Link>
        <p className="mt-2 mb-2 text-gray-500 max-md:text-justify">
          {articles[0]?.content}
        </p>
        <Image
          priority
          className="mt-4 mb-4 max-h-[400px] w-full object-cover"
          alt="principal"
          src={articles[0]?.img}
        />
        <Link href={`sala-prensa/${separateTitle(articles[0]?.title)}`}>
          <button className="bg-gray-700 w-full rounded-2xl px-4 max-md:py-1 py-1 text-lg max-md:text-base text-white font-bold">
            Leer más...
          </button>
        </Link>
      </div>

      <div className="w-2/4 max-md:w-full flex flex-col h-min p-4 max-md:p-0 gap-4">
        {artcilesRecents.map((article, index) => (
          <div
            key={index}
            className="flex relative items-center gap-4 bg-gray-200 p-2 rounded-2xl">
            <Image
              loading="lazy"
              className="h-44 w-44 max-md:w-[120px] max-md:h-36 object-cover rounded-2xl"
              alt="principal"
              src={article.img}
            />
            <Link href={`sala-prensa/${separateTitle(article.title)}`}>
              <h3 className="text-lg max-md:text-sm max-md:text-justify font-bold text-gray-700 leading-6 max-md:mb-7">
                {article.title}
              </h3>
            </Link>
            <Link href={`sala-prensa/${separateTitle(article.title)}`}>
              <button className="absolute shadow bg-black p-2 rounded-[50%] right-0 bottom-0 m-4 max-md:m-2">
                <FontAwesomeIcon className="h-4 w-4 text-white" icon={faPlus} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
