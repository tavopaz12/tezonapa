export const deleteEvent = async (eventId) => {
  try {
    const res = await fetch(`/api/events/${eventId}`, {
      method: 'DELETE',
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
