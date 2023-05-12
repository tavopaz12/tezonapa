import connectMongo from '@/db/conn'
import {
  getArticles,
  postArticle,
  patchArticle,
  deleteArticle,
} from '@/controllers/article.controller'

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' }),
  )

  // type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getArticles(req, res)
      break
    case 'POST':
      postArticle(req, res)
      break
    case 'PATCH':
      patchArticle(req, res)
      break
    case 'DELETE':
      deleteArticle(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowd`)
      break
  }
}
