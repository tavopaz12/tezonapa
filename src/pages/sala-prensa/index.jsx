import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import img from '/public/images/Cascada-1.webp'
import Link from 'next/link'
import CardSalaPrensa from '@/components/Sala-Prensa/CardSalaPrensa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { getArticles } from '@/services/article/getArticles'
import { useRouter } from 'next/router'
import InputSearch from '@/components/UI/InputSearch'

const links = [
  {
    title: 'Ver todo',
    slug: 'ver-todo',
  },
  {
    title: 'Comude',
    slug: 'comude',
  },
  {
    title: 'Comercio',
    slug: 'comercio',
  },
  {
    title: 'Desarrollo Social',
    slug: 'desarrollo%20social',
  },
  {
    title: 'Fomento Agropecuario',
    slug: 'fomento%20agropecuario',
  },
  {
    title: 'Educación',
    slug: 'educacion',
  },
]

export default function Index({ articles }) {
  const router = useRouter()
  const { area } = router.query
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState('')

  const onSearch = (evt) => {
    evt.preventDefault()
    setCurrentPage(1)

    router.push(
      `?page=1${query && `&title=${query}${area ? `&area=${area}` : ''}`}`,
    )
  }

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    router.push(`?page=${newPage}${query && `&title=${query}${area ? `&area=${area}` : ''}`}`)
  }

  const nextPage = (evt) => {
    evt.preventDefault()

    if (currentPage < articles?.pages) {
      handlePageChange(currentPage + 1)
    }
  }

  const prevPage = (evt) => {
    evt.preventDefault()

    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  return (
    <Layout
      title="Sala de prensa - H. Ayuntamiento, Tezonapa"
      activeLink="sala-prensa">
      <nav className="px-10 max-md:px-4 max-md:flex-col mb-6 flex justify-between items-center">
        <ul className="flex max-md:order-2 max-md:flex-wrap max-md:justify-start justify-around w-full">
          {links.map((link, index) => (
            <Link
              href={link.slug === 'ver-todo' ? '' : `?area=${link.slug}`}
              key={index}>
              <li
                className={`font-bold text-black hover:underline px-4 py-1 cursor-pointer rounded-2xl max-md:rounded max-md:text-sm max-md:px-2`}>
                {link.title}
              </li>
            </Link>
          ))}
        </ul>

        <div className="w-1/4 max-md:w-full max-md:mb-4">
          <InputSearch
            handleInputValue={(evt) => setQuery(evt.target.value)}
            handleSearch={onSearch}
            placeholder="Buscar alguna noticia..."
          />
        </div>
      </nav>

      {articles.articles.length === 0 && (
        <section className="px-10 mb-4 max-md:px-4 text-center">
          <h2 className="font-bold text-4xl">Sin resultados</h2>
        </section>
      )}

      {articles.error ? null : (
        <>
          {articles.articles.length > 0 && (
            <section className="px-10 mb-4 max-md:px-4">
              <div className="flex max-md:flex-col gap-6 justify-around bg-gray-100 rounded-2xl p-2">
                <figure className="w-2/4 max-md:w-full">
                  <Image
                    className="h-[300px] max-md:h-[200px] w-full object-cover rounded-lg"
                    alt="hola"
                    width={1000}
                    height={1000}
                    src={articles.articles[0].banner}
                  />
                </figure>
                <div className="w-2/4 max-md:w-full">
                  <h2 className="text-gray-600 font-bold text-2xl">
                    {articles.articles[0].title}{' '}
                  </h2>
                  <p className="mt-2 text-base line-clamp-4 text-gray-600">
                    {articles.articles[0].content}
                  </p>
                  <Link href={`/sala-prensa/${articles.articles[0].slug}`}>
                    <button className="bg-[#374151] max-md:w-full mt-4 px-4 rounded py-1 text-white font-bold">
                      Leer Más...
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      <section className="px-10 max-md:px-4 mb-6 flex flex-wrap gap-4 justify-between">
        {articles.articles.slice(1).map((article) => (
          <CardSalaPrensa
            slug={article.slug}
            key={article._id}
            image={article.banner}
            title={article.title}
          />
        ))}
      </section>

      <div className="flex flex-col items-center my-6">
        <span className="text-sm text-gray-700">
          Pagina
          <span className="font-semibold mx-1 text-gray-900">
            {articles.articles <= 0 ? '0' : currentPage}
          </span>
          de
          <span className="font-semibold mx-1 text-gray-900">
            {articles.articles <= 0 ? '0' : articles?.pages}
          </span>
          paginas totales
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={prevPage}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded-l hover:bg-blue-900">
            <svg
              aria-hidden="true"
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"></path>
            </svg>
            Anterior
          </button>
          <button
            onClick={nextPage}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded-r hover:bg-blue-900">
            Siguiente
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { page, title, area } = context.query

  const articles = await getArticles(page, title, area)

  if (articles.error) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      articles,
    },
  }
}
