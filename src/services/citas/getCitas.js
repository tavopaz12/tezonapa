export const getCitas = async (nameArea) => {
  try {
    const res = await fetch(
      `https://tezonapa.vercel.app/api/citas${
        nameArea ? `?area=${nameArea}` : ''
      }`,
    )

    const areas = res.json()

    return areas
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
