import Layout from '@/components/Home/Layout'
import React from 'react'

export default function Citas() {
  return (
    <Layout title="Generar Cita - H. Ayuntamiento, Tezonapa" activeLink="citas">
      <section className="grid place-items-center my-8">
        <div className="w-2/4 bg-gray-100 shadow-md border border-gray-300 p-10 text-base rounded-md flex flex-col gap-4">
          <h2 className="text-center text-xl font-bold">Datos de Cita</h2>

          <div>
            <p>
              <b>Estimado:</b> Jose Octavio
            </p>
            <p>
              Le informamos que su cita ha sido registrada exitosamente con los
              siguientes datos:
            </p>
          </div>

          <div className="flex justify-between border border-black p-2">
            <p>
              <b>Fecha y hora de cita:</b> 12 - 03 - 25
            </p>
            <p>
              <b>Folio:</b> akakkakakaka
            </p>
          </div>

          <div className="border border-black p-2 leading-9">
            <p>
              <b>Nombre:</b> Jose octavio paz juarez
            </p>
            <p>
              <b>Correo:</b> Jose octavio paz juarez
            </p>
            <p>
              <b>Telefono:</b> Jose octavio paz juarez
            </p>
            <p>
              <b>Area de cita:</b> Jose octavio paz juarez
            </p>
          </div>

          <ul className="text-sm">
            <li>
              - Cuenta con una tolerancia de 10 minutos máximo despues de su
              cita
            </li>
            <li>
              - Para recibir la atención es indispensable contar con su acuse y
              portar una identificación vigente
            </li>
            <li>
              - Para recibir la atención es indispensable contar con su acuse y
              portar una identificación vigente
            </li>
          </ul>

          <div className="grid place-items-center mt-2">
            <button
              className="bg-blue-600 p-2 w-2/4 text-white font-bold rounded-lg"
              type="submit">
              Descargar Pdf
            </button>
          </div>
        </div>
      </section>
    </Layout>
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