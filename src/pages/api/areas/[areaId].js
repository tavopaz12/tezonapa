import connectMongo from '@/db/conn'
import { getArea, patchArea, deleteArea } from '@/controllers/area.controller'

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' }),
  )

  // type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getArea(req, res)
      break
    case 'PATCH':
      patchArea(req, res)
      break
    case 'DELETE':
      deleteArea(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowd`)
      break
  }
}
