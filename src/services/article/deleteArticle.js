export const deleteArticle = async (articleId) => {
  try {
    const res = await fetch(`/api/articles/${articleId}`, {
      method: 'DELETE',
    })

    const data = await res.json()

    return data
  } catch (error) {
    return error
  }
}
