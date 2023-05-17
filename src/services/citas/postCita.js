export const createNewCita = async (newCita) => {
  try {
    const res = await fetch('/api/citas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCita),
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
