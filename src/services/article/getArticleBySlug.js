export const getArticleBySlug = async (slug) => {
  console.log(slug)
  try {
    const res = await fetch(
      `https://tezonapa.vercel.app/api/articles/slug/${slug}`,
    )

    const articles = res.json()

    return articles
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
