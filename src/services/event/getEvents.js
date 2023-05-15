export const getEvents = async (nameArea = '') => {
  try {
    const res = await fetch(
      `https://tezonapa.vercel.app/api/events?area=${nameArea}`,
    )
    console.log(res)

    if (!res.ok) {
      throw new Error('Something went wrong with the request')
    }

    const areas = res.json()

    return areas
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
