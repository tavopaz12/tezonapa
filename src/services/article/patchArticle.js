export const updateArticle = async (id, changes) => {
  try {
    const res = await fetch(`/api/articles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changes),
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
