import connectMongo from '@/db/conn'
import {
  getEvents,
  postEvent,
  patchEvent,
  deleteEvent,
} from '@/controllers/event.controller'

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' }),
  )

  // type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getEvents(req, res)
      break
    case 'POST':
      postEvent(req, res)
      break
    case 'PATCH':
      patchEvent(req, res)
      break
    case 'DELETE':
      deleteEvent(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowd`)
      break
  }
}
