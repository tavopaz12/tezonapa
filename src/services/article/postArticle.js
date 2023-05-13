export const createNewArticle = async (newArticle) => {
  try {
    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
