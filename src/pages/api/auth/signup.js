import { MongoClient } from 'mongodb'
import { hash } from 'bcryptjs'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (!email || !email.includes('@') || !password) {
      res.status(422).json({ message: 'Invalid Data', ...status })
      return
    }

    const client = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    const db = client.db()
    const checkExisting = await db.collection('users').findOne({ email: email })

    if (checkExisting) {
      res.status(422).json({
        message: 'El email ingresado ya se encuentra registrado',
        status: 201,
      })
      client.close()
      return
    }

    const user = await db.collection('users').insertOne({
      email,
      password: await hash(password, 12),
    })

    res.status(201).json({ message: 'Usuario creado', status: 201, ...user })
    client.close()
  } else {
    res.status(500).json({ message: 'Ruta no valida', status: 500 })
  }
}

export default handler
