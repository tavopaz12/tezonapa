import Head from 'next/head'
import favicon from '@/assets/favicon.ico'

import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'
import Notification from '@/components/Admin/Notification'
import { useRouter } from 'next/router'

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState(null)
  const [loadind, setLoading] = useState(false)
  const { data: session, status } = useSession()
  const router = useRouter()

  console.log(status)

  if (status === 'authenticated') {
    router.replace('/admin/dashboard')
  }

  const delay = 5000

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      setData(result)

      if (!result.error) {
        router.replace('/admin/dashboard')
      }

      setLoading(false)
    } catch (error) {
      setData(error)
    }

    setTimeout(() => {
      setData(null)
    }, delay)
  }

  return (
    <>
      <Head>
        <title>Admin | H. Ayuntamiento Tezonapa, Ver</title>
        <meta
          name="description"
          content="Página web oficial del Ayuntamiento de Tezonapa, con información sobre servicios, noticias y eventos relevantes. Trabajamos para brindar atención eficiente y transparente a todos los ciudadanos."
        />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>

      {data?.status === 401 && (
        <Notification
          timeout={delay}
          error
          title="Inicio de sesión incorrecto"
          message={data.error}
        />
      )}

      <section className="bg-[#2A2D34] h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1
            href="#"
            className="flex font-bold items-center mb-6 text-2xl text-white">
            Administración
          </h1>
          <div className="w-full rounded-lg shadow-xl border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl text-white">
                Iniciar sesión
              </h2>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white">
                    Correo Electronico:
                  </label>
                  <input
                    onChange={(evt) => setEmail(evt.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="border outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    placeholder="example@hotmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña:
                  </label>
                  <input
                    onChange={(evt) => setPassword(evt.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="border outline-none sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    required
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className={`w-full text-white ${
                    loadind
                      ? 'bg-gray-600 pointer-events-none'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                  {loadind ? 'Iniciando sesión' : 'Ingresar'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
