export const deleteArea = async (areaId) => {
  try {
    const res = await fetch(`/api/areas/${areaId}`, {
      method: 'DELETE',
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
