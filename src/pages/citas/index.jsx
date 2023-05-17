import Layout from '@/components/Home/Layout'
import InputDate from '@/components/UI/InputDate'
import InputSearch from '@/components/UI/InputSearch'
import InputSelect from '@/components/UI/InputSelect'
import InputText from '@/components/UI/InputText'
import { createNewCita } from '@/services/citas/postCita'
import { generatePdf } from 'config/generatePdf'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Citas() {
  const fechaActual = new Date()
  const fechaPorDefecto = fechaActual.toISOString().slice(0, 10)

  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState(fechaPorDefecto)
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [area, setArea] = useState('Comude')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dataCitas, setDataCita] = useState({})
  const [options, setOptions] = useState([])
  const [hora, setHora] = useState(() => {
    const now = new Date()
    const hour = now.getHours()
    const amOrPm = hour < 12 ? 'AM' : 'PM'
    const formattedHour = hour % 12 || 12
    return `${formattedHour}:00 ${amOrPm}`
  })
  const [query, setQuery] = useState('')
  const router = useRouter()

  console.log(hora)

  useEffect(() => {
    const today = new Date()
    const currentHour = today.getHours()

    const year = today.getFullYear()
    const month = (today.getMonth() + 1).toString().padStart(2, '0')
    const day = today.getDate().toString().padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`

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
      const hour24Format =
        optionPeriod === 'PM' && optionHour !== 12
          ? optionHour + 12
          : optionHour

      return hour24Format >= currentHour
    })

    if (formattedDate === fecha) {
      setOptions(filteredOptions)
      return
    } else {
      setOptions(horas)
    }
  }, [fecha])

  const clearInputs = () => {
    setNombre('')
    setFecha(fechaPorDefecto)
    setHora('')
    setCorreo('')
    setArea('Comude')
    setTelefono('')
  }

  useEffect(() => {
    const today = new Date()
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`
    validateDate({ target: { value: formattedDate } })
  }, [])

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

      router.push(`${router.asPath}/folio/${res._id}`)
      clearInputs()
    } catch (error) {
      console.log(error)
    }
  }

  const onSearch = () => {
    router.push(`/citas/folio/${query}`)
  }

  return (
    <Layout title="Generar Cita - H. Ayuntamiento, Tezonapa" activeLink="citas">
      <section className="px-10 mb-4 max-md:px-4 flex">
        <div className="w-full flex max-md:block justify-end align-middle gap-4">
          <p className="mt-2">Buscar cita por numero de folio: </p>
          <div className="w-[30%] max-md:w-full">
            <InputSearch
              handleInputValue={(evt) => setQuery(evt.target.value)}
              handleSearch={onSearch}
              placeholder="Número de folio"
            />
          </div>
        </div>
      </section>
      <section className="grid place-items-center my-8 max-md:px-4">
        <form
          onSubmit={onSubmit}
          className="w-2/4 max-md:w-full bg-gray-200 p-10 text-2xl rounded-md flex flex-col gap-4">
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
                value={hora || options[0]}
                handleValueInput={(evt) => setHora(evt.target.value)}
                title="Hora"
                defaultSelect="SELECCIONAR HORA"
                options={options}
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
