import connectMongo from '@/db/conn'
import { getArticleBySlug } from '@/controllers/article.controller'

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' }),
  )

  // type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getArticleBySlug(req, res)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowd`)
      break
  }
}
