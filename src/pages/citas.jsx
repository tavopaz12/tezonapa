import Layout from '@/components/Home/Layout'
import InputDate from '@/components/UI/InputDate'
import InputSelect from '@/components/UI/InputSelect'
import InputText from '@/components/UI/InputText'
import { createNewCita } from '@/services/citas/postCita'
import { generatePdf } from 'config/generatePdf'
import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'

export default function Citas() {
  const fechaActual = new Date()
  const fechaPorDefecto = fechaActual.toISOString().slice(0, 10) //obtiene la fecha en formato 'AAAA-MM-DD'
  const currentHour = fechaActual.getHours()

  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState(fechaPorDefecto)
  const [hora, setHora] = useState('08:00 AM')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [area, setArea] = useState('Comude')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dataCitas, setDataCita] = useState({})
  const router = useRouter()

  const horas = [
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
  ]

  const filteredOptions = horas.filter((hora) => {
    const optionHour = parseInt(hora.split(':')[0])
    const optionPeriod = hora.split(' ')[1]
    const hour24Format = optionPeriod === 'PM' ? optionHour + 12 : optionHour
    return hour24Format > currentHour
  })

  console.log(filteredOptions)

  const clearInputs = () => {
    setNombre('')
    setFecha(fechaPorDefecto)
    setHora('08:00 AM')
    setCorreo('')
    setArea('Comude')
    setTelefono('')
  }

  const validateDate = async (evt) => {
    setLoading(true)
    const day = new Date(evt.target.value).getDay()
    if (day === 6 || day === 5) {
      setError(true)
    } else {
      setError(false)
      setFecha(evt.target.value)
    }

    try {
      const res = await fetch(`/api/citas/fecha/${evt.target.value}`)

      const citas = await res.json()

      if (citas.horasOcupadasPorArea) {
        setDataCita(citas)
      } else {
        setDataCita(null)
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const validateDateWithHour = () => {
    return dataCitas?.horasOcupadasPorArea?.some(
      (cita) =>
        cita.nombre === area &&
        cita.horasOcupadas.some((cita) => cita.hora === hora),
    )
  }

  const validateInputTrim = () => {
    return Boolean(
      nombre &&
        fecha &&
        hora &&
        correo &&
        telefono &&
        area &&
        !error &&
        !validateDateWithHour(),
      !loading,
    )
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const newCita = {
      areaName: area,
      nombre,
      tel: telefono,
      date: fecha,
      hour: hora,
      email: correo,
    }

    try {
      const res = await createNewCita(newCita)

      router.push(router.asPath)
      clearInputs()

      generatePdf({
        nombre,
        fecha,
        hora,
        correo,
        telefono,
        area,
        folio: res._id,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout title="Generar Cita - H. Ayuntamiento, Tezonapa" activeLink="citas">
      <section className="grid place-items-center my-8">
        <form
          onSubmit={onSubmit}
          className="w-2/4 bg-gray-200 p-10 text-2xl rounded-md flex flex-col gap-4">
          <h2 className="text-center font-bold">Generar Cita</h2>
          <div>
            <InputText
              value={nombre}
              handleValueInput={(evt) => setNombre(evt.target.value)}
              title="Nombre Completo"
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
                'Educacion',
                'Comercio',
                'Desarrollo Social',
                'Fomento Agropecuario',
              ]}
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
                errorText={
                  validateDateWithHour()
                    ? 'La hora seleccionada ya esta ocupada'
                    : ''
                }
                value={hora}
                handleValueInput={(evt) => setHora(evt.target.value)}
                title="Hora"
                defaultSelect="SELECCIONAR HORA"
                options={filteredOptions}
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

          <button
            type="submit"
            className={`text-white ${
              !validateInputTrim()
                ? 'bg-gray-700 pointer-events-none'
                : 'bg-blue-700 hover:bg-blue-800'
            } mt-4 focus:ring-4 focus:outline-none font-bold rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center`}>
            Generar Cita
          </button>
        </form>
      </section>
    </Layout>
  )
}
