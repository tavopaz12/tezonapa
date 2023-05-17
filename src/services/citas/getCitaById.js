export const getCitaById = async (citaId) => {
  try {
    const res = await fetch(`https://tezonapa.vercel.app/api/citas/${citaId}`)

    const citas = res.json()

    return citas
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
