import connectMongo from '@/db/conn'
import {
  getCitas,
  postCita,
  patchCita,
  deleteCita,
} from '@/controllers/cita.controller'

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: 'Error in the Connection' }),
  )

  // type of request
  const { method } = req

  switch (method) {
    case 'GET':
      getCitas(req, res)
      break
    case 'POST':
      postCita(req, res)
      break
    case 'PATCH':
      patchCita(req, res)
      break
    case 'DELETE':
      deleteCita(req, res)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowd`)
      break
  }
}
