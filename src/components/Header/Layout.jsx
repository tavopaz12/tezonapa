import Head from 'next/head'
import favicon from '@/assets/favicon.ico'
import Header from './Header'
import Footer from '../Footer/Footer'

export default function Layout({
  title,
  description,
  children,
  imgBanner,
  activeLink,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="utf-8" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>

      <Header imgBanner={imgBanner} activeLink={activeLink} />

      <main>{children}</main>

      <Footer/>
    </>
  )
}

Layout.defaultProps = {
  title: 'H. Ayuntamiento | Tezonapa, Veracruz',
  description:
    'Página web oficial del Ayuntamiento de Tezonapa, con información sobre servicios, noticias y eventos relevantes. Trabajamos para brindar atención eficiente y transparente a todos los ciudadanos.',
}
