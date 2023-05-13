export const getAreas = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/areas')

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
