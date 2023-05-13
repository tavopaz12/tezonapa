export const createNewArea = async (newArea) => {
  try {
    const res = await fetch('/api/areas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArea)
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
