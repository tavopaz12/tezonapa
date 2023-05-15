export const getEvents = async (nameArea) => {
  try {
    const res = await fetch(
      `https://tezonapa.vercel.app/api/events${
        nameArea ? `?area=${nameArea}` : ''
      }`,
    )
    console.log(res)

    const areas = res.json()

    return areas
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
