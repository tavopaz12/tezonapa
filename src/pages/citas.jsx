import Layout from '@/components/Home/Layout'
import InputDate from '@/components/UI/InputDate'
import InputSelect from '@/components/UI/InputSelect'
import InputText from '@/components/UI/InputText'
import { generatePdf } from 'config/generatePdf'
import React from 'react'
import { useState } from 'react'

export default function Citas() {
  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [area, setArea] = useState('')
  const [error, setError] = useState(false)

  const newCita = {
    nombre,
    fecha,
    hora,
    correo,
    telefono,
    area,
  }

  console.log(newCita)

  const validateDate = (evt) => {
    const day = new Date(evt.target.value).getDay()
    if (day === 6 || day === 5) {
      setError(true)
    } else {
      setError(false)
      setFecha(evt.target.value)
    }
  }

  const validateInputTrim = () => {
    return Boolean(
      nombre && fecha && hora && correo && telefono && area && !error,
    )
  }

  const onSubmit = (event) => {
    event.preventDefault()

    generatePdf()
  }

  return (
    <Layout title="Generar Cita - H. Ayuntamiento, Tezonapa" activeLink="citas">
      <section className="grid place-items-center my-8">
        <form
          onSubmit={onSubmit}
          className="w-2/4 bg-gray-100 p-10 text-2xl rounded-md flex flex-col gap-4">
          <h2 className="text-center font-bold">Generar Cita</h2>
          <div>
            <InputText
              value={nombre}
              handleValueInput={(evt) => setNombre(evt.target.value)}
              title="Nombre Completo"
            />
          </div>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <InputDate
                value={fecha}
                handleValueInput={validateDate}
                title="Seleccionar fecha"
              />
            </div>
            <div>
              <InputSelect
                value={hora}
                handleValueInput={(evt) => setHora(evt.target.value)}
                title="Hora"
                defaultSelect="SELECCIONAR HORA"
                options={[
                  '8:00 AM',
                  '9:00 AM',
                  '10:00 AM',
                  '11:00 AM',
                  '12:00 PM',
                  '1:00 PM',
                  '2:00 PM',
                ]}
              />
            </div>
          </div>
          <div>
            <InputText
              value={correo}
              handleValueInput={(evt) => setCorreo(evt.target.value)}
              title="Correo Electronico"
            />
          </div>
          <div>
            <InputText
              value={telefono}
              handleValueInput={(evt) => setTelefono(evt.target.value)}
              title="Telefono"
            />
          </div>
          <div>
            <InputSelect
              value={area}
              handleValueInput={(evt) => setArea(evt.target.value)}
              title="Area"
              defaultSelect="SELECCIONAR AREA"
              options={[
                'Comude',
                'Educación',
                'Comercio',
                'Desarrollo Social',
                'Fomento Agropecuario',
              ]}
            />
          </div>

          <button
            type="submit"
            className={`text-white ${
              validateInputTrim() && 'bg-gray-700 pointer-events-none'
            } mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}>
            Generar Cita
          </button>
        </form>
      </section>
    </Layout>
  )
}
