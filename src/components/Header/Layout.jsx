import Head from 'next/head'
import favicon from '@/assets/favicon.ico'
import Header from './Header'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnUp, faCaretUp } from '@fortawesome/free-solid-svg-icons'

export default function Layout({
  title,
  description,
  children,
  imgBanner,
  activeLink,
  ogImage,
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll suave al inicio de la página
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <meta property="og:image" content={ogImage.src} />
      </Head>

      <Header imgBanner={imgBanner} activeLink={activeLink} />

      <main>{children}</main>

      <button
        className="fixed bottom-10 right-10 bg-black z-50 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
        onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowTurnUp} className="h-4 w-4 font-bold" />
      </button>

      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'H. Ayuntamiento | Tezonapa, Veracruz',
  ogImage: favicon.src,
  description:
    'Página web oficial del Ayuntamiento de Tezonapa, con información sobre servicios, noticias y eventos relevantes. Trabajamos para brindar atención eficiente y transparente a todos los ciudadanos.',
}
