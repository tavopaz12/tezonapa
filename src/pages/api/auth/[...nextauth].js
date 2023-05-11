import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoClient } from 'mongodb'
import { compare } from 'bcryptjs'

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',

      async authorize(credentials) {
        const client = await MongoClient.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })

        const users = await client.db().collection('users')

        const result = await users.findOne({
          email: credentials.email,
        })

        if (!result) {
          client.close()
          throw new Error('Contraseña o email incorrectos')
        }

        const checkPassword = await compare(
          credentials.password,
          result.password,
        )

        if (!checkPassword) {
          client.close()
          throw new Error('Contraseña o email incorrectos')
        }

        client.close()
        return { email: result.email }
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
})
