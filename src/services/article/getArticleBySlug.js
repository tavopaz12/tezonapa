export const getArticleBySlug = async (slug) => {
  console.log(slug)
  try {
    const res = await fetch(
      `https://tezonapa.vercel.app/api/articles/slug/${slug}`,
    )

    if (!res.ok) {
      throw new Error('Something went wrong with the request')
    }

    const articles = res.json()

    return articles
  } catch (error) {
    console.log('...logging error to our system...')

    throw error
  }
}
