import DeleteConfirmationModal from '@/components/Admin/DeleteConfirmationModal'
import Layout from '@/components/Home/Layout'
import { deleteCita } from '@/services/citas/deleteCita'
import { getCitaById } from '@/services/citas/getCitaById'
import { generatePdf } from 'config/generatePdf'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Citas({ cita }) {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleClickGeneratePdf = () => {
    const dataCita = {
      nombre: cita.nombre,
      fecha: cita.date,
      hora: cita.hour,
      correo: cita.email,
      telefono: cita.tel,
      area: cita.area.name,
      folio: cita._id,
    }
    generatePdf(dataCita)
  }

  const handleDeleteCita = async () => {
    try {
      const res = await deleteCita(cita._id)

      router.push(router.asPath)
      setShowModal(!showModal)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout title="Generar Cita - H. Ayuntamiento, Tezonapa" activeLink="citas">
      <section className="grid place-items-center my-8 px-4">
        <div className="w-2/4 max-md:w-full bg-gray-100 shadow-md border border-gray-300 p-10 text-base rounded-md flex flex-col gap-4">
          <h2 className="text-center text-xl font-bold">Datos de Cita</h2>

          {cita.error ? (
            <h2 className="text-center text-lg">
              El numero de folio no existe en nuestro sistema de citas
            </h2>
          ) : (
            <>
              <div>
                <p>
                  <b>Estimado:</b> {cita.nombre}
                </p>
                <p>
                  Le informamos que su cita ha sido registrada exitosamente con
                  los siguientes datos:
                </p>
              </div>

              <div className="flex max-md:block justify-between border border-black p-2">
                <p>
                  <b>Fecha y hora de cita:</b>
                  <br />
                  {cita.date} - {cita.hour}
                </p>
                <p>
                  <b>Folio:</b>
                  <br />
                  {cita._id.toUpperCase()}
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
                  <b>Area de cita:</b> {cita.area.name}
                </p>
              </div>

              <ul className="text-sm">
                <li>
                  - Cuenta con una tolerancia de 10 minutos máximo despues de su
                  cita
                </li>
                <li>
                  - Para recibir la atención es indispensable contar con su
                  acuse y portar una identificación vigente
                </li>
              </ul>

              <div className="flex gap-4 place-items-center mt-2">
                <button
                  onClick={() => setShowModal(!showModal)}
                  className="bg-red-600 p-2 w-2/4 max-md:w-full text-white font-bold rounded-lg"
                  type="submit">
                  Cancelar Cita
                </button>
                <button
                  onClick={handleClickGeneratePdf}
                  className="bg-blue-600 p-2 w-2/4 max-md:w-full text-white font-bold rounded-lg"
                  type="submit">
                  Descargar Pdf
                </button>
              </div>
            </>
          )}
        </div>

        {showModal && (
          <DeleteConfirmationModal
            message="¿Esta seguro(a) de que quiere cancelar su cita?"
            handleClickConfirmate={handleDeleteCita}
            toogleOpen={() => setShowModal(!showModal)}
          />
        )}
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { citaId } = context.query

  const cita = await getCitaById(citaId)

  return {
    props: {
      cita,
    },
  }
}
