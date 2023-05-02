import Layout from '@/components/Header/Layout'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Index() {
  return (
    <Layout
      activeLink="areas-municipales"
      title="Comercio - H. Ayuntamiento, Tezonapa">
      <section className="px-10 mb-6">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#"></a>
          <div className="p-5">
            <a href="#">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Solicitud de baja
              </h2>
            </a>

            <ol className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>At least 10 characters (and up to 100 characters)</li>
              <li>At least one lowercase character</li>
              <li>
                Inclusion of at least one special character, e.g., ! @ # ?
              </li>
            </ol>

            <Link href="/download?pdf=solicitud_alta_comercio">
              Descargar archivo PDF
            </Link>

            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Descargar formato
              <FontAwesomeIcon
                className="w-4 h-4 ml-2 -mr-1"
                icon={faDownload}
              />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
