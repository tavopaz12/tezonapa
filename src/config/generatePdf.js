import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

export const generatePdf = async ({
  nombre,
  fecha,
  hora,
  correo,
  telefono,
  area,
  folio,
}) => {
  // Crear un nuevo documento PDF
  const pdfDoc = await PDFDocument.create()

  // Cargar la imagen del logo
  const imageUrl =
    'https://tezonapa.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4e0279d8.webp&w=640&q=75'
  const existingPdfBytes = await fetch(imageUrl).then((res) =>
    res.arrayBuffer(),
  )
  const logoImage = await pdfDoc.embedPng(existingPdfBytes)

  // Agregar una nueva página
  const page = pdfDoc.addPage()

  // Insertar el logo en la página
  const { width, height } = logoImage.scale(0.1)
  page.drawImage(logoImage, {
    x: 20,
    y: page.getHeight() - height - 25,
    width: width,
    height: height,
  })

  // Agregar el texto
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const text = `Yo, recibí el documento  el día .`

  const fontSize = 14
  const textWidth = helveticaFont.widthOfTextAtSize(text, fontSize)

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const formattedDate = `${day}-${month}-${year}`

  const tezonapaText = `Tezonapa, Veracruz - ${formattedDate}`
  const tezonapaTextWidth = helveticaFont.widthOfTextAtSize(
    tezonapaText,
    fontSize,
  )
  page.drawText(tezonapaText, {
    x: page.getSize().width - tezonapaTextWidth - 30,
    y: page.getSize().height - 60,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })

  const asunto = `Estimado(a): ${nombre}`
  const textAsunto =
    'Le informamos que su cita ha sido registrada exitosamente con los siguientes datos:'

  const heighRectangle = 590
  const heighSubtitule = 598
  const heighResult = 620
  const textX = 80 + (page.getWidth() - 300 - textWidth) / 2
  const borderWidth = 0.5
  const secondRectX = 20 + (page.getWidth() - 300)

  page.drawText(asunto, {
    x: 20,
    y: height + 690,
    size: 12,
    font: helveticaFont,
    color: rgb(0.2, 0.2, 0.2),
    lineHeight: 14,
  })

  page.drawText(textAsunto, {
    x: 20,
    y: height + 675,
    size: 12,
    font: helveticaFont,
    color: rgb(0.2, 0.2, 0.2),
    lineHeight: 14,
  })

  page.drawRectangle({
    x: 20,
    y: height + 640,
    width: page.getWidth() - 300,
    height: 30,
    borderColor: rgb(0, 0, 0),
    borderWidth: borderWidth,
  })

  page.drawText(`Fecha y hora de cita: ${`${fecha} / ${hora}`}`, {
    x: 30,
    y: height + 650,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    lineHeight: 14,
  })

  page.drawRectangle({
    x: secondRectX,
    y: height + 640,
    width: page.getWidth() - secondRectX - 20,
    height: 30,
    borderColor: rgb(0, 0, 0),
    borderWidth: borderWidth,
  })

  page.drawText(`Folio: ${folio}`, {
    x: secondRectX + 10,
    y: height + 650,
    size: 10,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    lineHeight: 14,
  })

  page.drawRectangle({
    x: 20,
    y: height + heighRectangle,
    width: page.getWidth() - 300,
    height: 50,
    borderColor: rgb(0, 0, 0),
    borderWidth: borderWidth,
  })

  page.drawText('Nombre Completo', {
    x: textX,
    y: height + heighSubtitule,
    size: 10,
    font: helveticaFont,
    color: rgb(0.2, 0.2, 0.2),
    lineHeight: 14,
  })

  page.drawText(nombre, {
    x: 30 + (page.getWidth() - 300 - textWidth) / 2,
    y: height + heighResult,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    lineHeight: 14,
  })

  page.drawRectangle({
    x: secondRectX,
    y: height + heighRectangle,
    width: page.getWidth() - secondRectX - 20,
    height: 50,
    borderColor: rgb(0, 0, 0),
    borderWidth: borderWidth,
  })

  page.drawText('Correo Electronico', {
    x: secondRectX + 80,
    y: height + heighSubtitule,
    size: 10,
    font: helveticaFont,
    color: rgb(0.2, 0.2, 0.2),
    lineHeight: 14,
  })

  page.drawText(correo, {
    x: secondRectX + 20,
    y: height + heighResult,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    lineHeight: 14,
  })

  page.drawRectangle({
    x: 20,
    y: height + heighRectangle - 50,
    width: page.getWidth() - 300,
    height: 50,
    borderColor: rgb(0, 0, 0),
    borderWidth: borderWidth,
  })

  page.drawText('Telefono', {
    x: textX,
    y: height + heighSubtitule - 50,
    size: 10,
    font: helveticaFont,
    color: rgb(0.2, 0.2, 0.2),
    lineHeight: 14,
  })

  page.drawText(telefono, {
    x: 30 + (page.getWidth() - 300 - textWidth) / 2,
    y: height + heighResult - 50,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    lineHeight: 14,
  })

  page.drawRectangle({
    x: secondRectX,
    y: height + heighRectangle - 50,
    width: page.getWidth() - secondRectX - 20,
    height: 50,
    borderColor: rgb(0, 0, 0),
    borderWidth: borderWidth,
  })

  page.drawText('Area de Cita', {
    x: secondRectX + 80,
    y: height + heighSubtitule - 50,
    size: 10,
    font: helveticaFont,
    color: rgb(0.2, 0.2, 0.2),
    lineHeight: 14,
  })

  page.drawText(area, {
    x: secondRectX + 20,
    y: height + heighResult - 50,
    size: 12,
    font: helveticaFont,
    color: rgb(0, 0, 0),
    lineHeight: 14,
  })

  const reglas = `
  - Cuenta con una tolerancia de 10 minutos máximo despues de su cita
  - Para recibir la atención es indispensable contar con su acuse y portar una identificación vigente
  - En caso de no requerir la cita agendada es importante cancelarla
  `

  page.drawText(reglas, {
    x: 20,
    y: height + 535,
    size: 10,
    font: helveticaFont,
    color: rgb(0.2, 0.2, 0.2),
    lineHeight: 14,
  })

  // Guardar el documento PDF y descargar el archivo resultante
  const pdfBytes = await pdfDoc.save()
  const blob = new Blob([pdfBytes], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = 'acuse.pdf'
  link.click()
}
