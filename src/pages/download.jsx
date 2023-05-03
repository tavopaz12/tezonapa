import fs from 'fs'
import Head from 'next/head'
import path from 'path'
import favicon from '@/assets/favicon.ico'
import { useRouter } from 'next/router'

export async function getServerSideProps({ query }) {
  const filePath = path.join(process.cwd(), 'public', 'pdf', `${query.pdf}.pdf`)

  if (!fs.existsSync(filePath)) {
    return {
      notFound: true,
    }
  }

  const fileContent = fs.readFileSync(filePath)
  const base64Content = Buffer.from(fileContent).toString('base64')

  return {
    props: {
      fileContent: base64Content,
    },
  }
}

export default function DownloadPage({ fileContent }) {
  const pdfUrl = `data:application/pdf;base64,${fileContent}`
  const params = useRouter()
  const file = params.query.pdf

  return (
    <>
      <Head>
        <title>{file} | H. Ayuntamiento Tezonapa</title>
        <meta
          name="description"
          content="Página web oficial del Ayuntamiento de Tezonapa, con información sobre servicios, noticias y eventos relevantes. Trabajamos para brindar atención eficiente y transparente a todos los ciudadanos."
        />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <div className="scrollbar-hide h-screen">
        <iframe src={pdfUrl} width="100%" height="100%" />
      </div>
    </>
  )
}
