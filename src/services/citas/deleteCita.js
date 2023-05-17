export const deleteCita = async (citaId) => {
  try {
    const res = await fetch(`/api/citas/${citaId}`, {
      method: 'DELETE',
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
