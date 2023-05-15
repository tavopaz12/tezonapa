export const formatDate = (date) => {
  const fecha = new Date(date)
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  const formatDate = new Intl.DateTimeFormat('es-MX', options).format(fecha)

  return formatDate
}
