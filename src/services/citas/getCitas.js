export const getCitas = async (nameArea) => {
  try {
    const res = await fetch(
      `https://tezonapa.vercel.app/api/citas${
        nameArea ? `?area=${nameArea}` : ''
      }`,
    )

    const citas = res.json()

    return citas
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
