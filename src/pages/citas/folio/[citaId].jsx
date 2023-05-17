import Layout from '@/components/Home/Layout'
import { getCitaById } from '@/services/citas/getCitaById'
import React from 'react'

export default function Citas({ cita }) {
  console.log(cita)
  return (
    <Layout title="Generar Cita - H. Ayuntamiento, Tezonapa" activeLink="citas">
      <section className="grid place-items-center my-8">
        <div className="w-2/4 max-md:w-3/4 bg-gray-100 shadow-md border border-gray-300 p-10 text-base rounded-md flex flex-col gap-4">
          <h2 className="text-center text-xl font-bold">Datos de Cita</h2>

          <div>
            <p>
              <b>Estimado:</b> {cita.nombre}
            </p>
            <p>
              Le informamos que su cita ha sido registrada exitosamente con los
              siguientes datos:
            </p>
          </div>

          <div className="flex justify-between border border-black p-2">
            <p>
              <b>Fecha y hora de cita:</b> {cita.date} - {cita.hour}
            </p>
            <p>
              <b>Folio:</b> {cita._id}
            </p>
          </div>

          <div className="border border-black p-2 leading-9">
            <p>
              <b>Nombre:</b> {cita.nombre}
            </p>
            <p>
              <b>Correo:</b> {cita.email}
            </p>
            <p>
              <b>Telefono:</b> {cita.tel}
            </p>
            <p>
              <b>Area de cita:</b> {cita.area.nombre}
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
  const { citaId } = context.query

  const cita = await getCitaById(citaId)

  if (cita.error) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      cita,
    },
  }
}
