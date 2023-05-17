import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'

export default function DynamicCalendar() {
  const [date, setDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(false)

  const days = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ]

  const monthDays = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days = []

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }

    for (let i = firstDay.getDay() - 1; i >= 0; i--) {
      days.unshift(new Date(year, month, -i))
    }

    for (let i = lastDay.getDay() + 1; i <= 6; i++) {
      days.push(new Date(year, month + 1, i))
    }

    return days
  }

  const handlePrevClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
  }

  const handleNextClick = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
  }

  useEffect(() => {
    const currentDate = document.querySelector('.current-date')
    currentDate.innerHTML = date.toLocaleDateString('es-MX', {
      month: 'long',
      year: 'numeric',
    })
  }, [date])

  return (
    <>
      <div className="wrapper bg-white rounded-2xl w-full shadow-xl">
        <header className="flex items-center justify-between px-6 py-3">
          <p className="current-date uppercase font-bold text-xl"></p>
          <div className="icons flex gap-8">
            <span
              id="prev"
              className="material-symbols-rounded cursor-pointer flex items-center gap-2"
              onClick={handlePrevClick}>
              <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
              Siguiente
            </span>
            <span
              id="next"
              className="material-symbols-rounded cursor-pointer flex items-center gap-2"
              onClick={handleNextClick}>
              Anterior
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </span>
          </div>
        </header>
        <div className="calendar px-6 py-4">
          <ul className="weeks flex border-b border-gray-200">
            {days.map((day) => (
              <li
                key={day}
                className="text-gray-500 font-semibold w-full text-center py-2">
                {day}
              </li>
            ))}
          </ul>
          <ul className="days grid place-content-center place-items-center grid-cols-7 mt-1">
            {monthDays(date).map((day) => (
              <li
                onClick={() => setSelectedDate(!selectedDate)}
                key={day}
                className={`mt-10 font-medium grid place-items-center rounded-[50%] cursor-pointer p-4 w-[3rem]
                ${day.getMonth() !== date.getMonth() ? 'opacity-0 pointer-events-none' : ''}
                `}>
                <p>{day.getDate()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedDate && <Modal onClose={() => setSelectedDate(!selectedDate)} />}
    </>
  )
}

function Modal({ onClose }) {
  const handleClickOutModal = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }
  return (
    <div className="fixed z-10 h-screen inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            onClick={handleClickOutModal}
            className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"></h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Aquí se mostrarían las citas para esta fecha.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
