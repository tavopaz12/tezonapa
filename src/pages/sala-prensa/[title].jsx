import Layout from '@/components/Home/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

import img from '/public/images/sala-prensa/obra1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faCalendar,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getArticleBySlug } from '@/services/article/getArticleBySlug'
import { getArticles } from '@/services/article/getArticles'
import { formatDateWithTime } from 'config/formDateWithTime'

export default function Article({ article, articles }) {
  const parrafos = article.content?.split('.').filter((p) => p !== '')
  const [selectedImage, setSelectedImage] = useState(null)
  const [show, setShow] = useState(false)

  const nextImage = () => {
    if (selectedImage < article.images.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const prevImage = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const outClickModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      setShow(!show)
    }
  }

  return (
    <Layout
      title={`${article.title} - H. Ayuntamiento, Tezonapa`}
      ogImage={article.banner}
      activeLink="sala-prensa">
      {show && (
        <div
          onClick={outClickModal}
          className="fixed z-50 bg-[rgba(0,0,0,0.2)] top-0 left-0 w-full h-screen flex items-center justify-center">
          <div className="bg-white max-md:w-[80%] relative p-4 border border-gray-300 shadow-lg rounded-lg">
            <Image
              width={1000}
              height={1000}
              src={article.images[selectedImage]}
              alt="Selected image"
              className="w-full h-[500px] max-md:h-[300px] object-cover"
            />
            <FontAwesomeIcon
              onClick={prevImage}
              icon={faAngleLeft}
              className="h-8 w-8 bg-black cursor-pointer absolute top-[50%] text-white"
            />
            <FontAwesomeIcon
              onClick={nextImage}
              icon={faAngleRight}
              className="h-8 w-8 right-4 bg-black cursor-pointer absolute top-[50%] text-white"
            />

            <button
              onClick={() => {
                setSelectedImage(null), setShow(!show)
              }}
              className="mt-4 w-full bg-gray-500 font-bold text-white py-2 px-4 rounded-md">
              Cerrar
            </button>
          </div>
        </div>
      )}
      <section className="px-10 h-[300px] max-md:h-[200px] mb-8 relative max-md:px-4">
        <Image
          alt={article.title}
          width={1000}
          height={500}
          src={article.banner}
          className="object-cover h-[300px] w-full max-md:h-[200px]"
          priority
        />
        <div className="absolute top-0 grid place-items-center bg-[rgba(0,0,0,0.5)] w-[94%] max-md:w-[92%] h-[100%]">
          <h1 className="text-white w-3/4 text-center capitalize text-4xl font-bold">
            {article.title}
          </h1>
        </div>
      </section>

      <article className="px-10 max-md:px-4 mb-8 text-lg flex max-md:flex-col gap-6">
        <section className="w-3/4 max-md:w-full">
          <div className="mb-4 flex items-center gap-4 max-md:gap-2 text-gray-600">
            <FontAwesomeIcon
              className="h-4 w-4 text-gray-400 max-md:h-3 max-md:w-3"
              icon={faCalendar}
            />
            <span className="max-md:text-sm">
              {formatDateWithTime(article.createdAt)}
            </span>
          </div>
          <p className="mb-4 text-justify max-md:text-base">
            Tezonapa, Ver. - {parrafos[0]}.
          </p>
          {parrafos.slice(1).map((parrafo, index) => (
            <p className="mb-4 text-justify max-md:text-base" key={index}>
              {parrafo}.
            </p>
          ))}
          <p className="font-bold mb-2 max-md:text-base">Compartir en:</p>
          <div className="flex items-center gap-4 w-full">
            <IconsShare text={article.title} />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            {article.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Images"
                width={500}
                onClick={() => {
                  setSelectedImage(index)
                  setShow(!show)
                }}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
        </section>

        <aside className="w-1/4 max-md:w-full">
          <h2 className="text-2xl max-md:text-xl text-center font-bold">
            Artículos recientes
          </h2>
          {articles.articles.slice(0, 3).map((article, index) => (
            <div
              key={index}
              className="flex relative bg-gray-200 p-2 rounded-md gap-4 my-4 justify-between">
              <Image
                src={article.banner}
                width={500}
                height={500}
                alt="hola"
                className="w-2/4 object-cover max-md:h-[100px] h-[150px]"
              />
              <p className="w-2/4 text-base max-md:text-sm font-semibold">
                <Link href={`/sala-prensa/${article.slug}`}>
                  {article.title}
                </Link>
              </p>
              <Link href={`/sala-prensa/${article.slug}`}>
                <button className="absolute shadow bg-black p-[0.4rem] rounded-[50%] right-0 bottom-0 m-3 max-md:m-2">
                  <FontAwesomeIcon
                    className="h-4 w-4 max-md:h-3 max-md:w-3 text-white"
                    icon={faPlus}
                  />
                </button>
              </Link>
            </div>
          ))}

          <Link href="/sala-prensa">
            <button className="bg-[#374151] px-4 w-full rounded-lg text-white font-bold py-1">
              Ver más...
            </button>
          </Link>
        </aside>
      </article>
    </Layout>
  )
}

function IconsShare({ text }) {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (process.browser) {
      setCurrentUrl(window.location.href)
    }
  }, [])
  return (
    <>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        className="bg-[#3c589a] rounded-lg px-6 max-md:px-3 flex items-center gap-4 max-md:gap-2 py-1"
        rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 max-md:h-3 max-md:w-3 text-white"
          fill="#ffff"
          viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
        <span className="text-white font-bold max-md:text-sm">Facebook</span>
      </a>
      <a
        href={`whatsapp://send?text=Ver: ${text}:%20${currentUrl}`}
        target="_blank"
        className="bg-[#55EB4C] rounded-lg px-6 max-md:px-3 flex items-center gap-4 max-md:gap-2 py-1"
        rel="noopener noreferrer">
        <svg
          fill="#ffff"
          className="h-4 w-4 max-md:h-3 max-md:w-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        <span className="text-white font-bold max-md:text-sm">WhatsApp</span>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`}
        target="_blank"
        className="bg-[#55ACEE] rounded-lg px-6 max-md:px-3 flex items-center gap-4 max-md:gap-2 py-1"
        rel="noopener noreferrer">
        <svg
          fill="#ffff"
          className="h-4 w-4 max-md:h-3 max-md:w-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
        </svg>
        <span className="text-white font-bold max-md:text-sm">Twitter</span>
      </a>
    </>
  )
}

export async function getServerSideProps(context) {
  const { title } = context.query

  const article = await getArticleBySlug(title)
  const articles = await getArticles()

  if (article.error) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
      articles,
    },
  }
}
