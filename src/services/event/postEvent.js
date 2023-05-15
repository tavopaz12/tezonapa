export const createNewEvent = async (newEvent) => {
  try {
    const res = await fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
