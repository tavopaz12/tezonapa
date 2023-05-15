export const formatDateWithTime = (date) => {
  const fecha = new Date(date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const formatDate = new Intl.DateTimeFormat('es-MX', options).format(fecha)

  return formatDate
}
