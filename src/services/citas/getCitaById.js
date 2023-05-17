export const getArticleBySlug = async (citaId) => {
  try {
    const res = await fetch(
      `https://tezonapa.vercel.app/api/citas/${citaId}`,
    )

    const articles = res.json()

    return articles
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
