export const separateTitle = (title) => {
  const texto = title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, "")
  return texto.toLowerCase().split(' ').join('-')
}