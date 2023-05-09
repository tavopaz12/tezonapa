import Head from 'next/head'
import favicon from '@/assets/favicon.ico'
import HeaderAdmin from './HeaderAdmin'

export default function LayoutAdmin({ title, description, ogImage, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <meta property="og:image" content={ogImage.src} />
      </Head>

      <main className="w-full flex max-md:flex-col">
        <HeaderAdmin />
        <article className="bg-gray-100 md:h-screen overflow-y-auto md:scrollbar-hide w-[80%] max-md:p-5 max-md:w-full md:p-8">
          {children}
        </article>
      </main>
    </>
  )
}

LayoutAdmin.defaultProps = {
  title: 'Dashboard |  H. Ayuntamiento Tezonapa, Ver',
  ogImage: favicon.src,
  description:
    'Página web oficial del Ayuntamiento de Tezonapa, con información sobre servicios, noticias y eventos relevantes. Trabajamos para brindar atención eficiente y transparente a todos los ciudadanos.',
}
