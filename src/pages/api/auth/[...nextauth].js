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
        const client = await MongoClient.connect(
          'mongodb+srv://ayuntamiento:Y9Szpy8jyNPJN1ro@tezonapa.sgco6dh.mongodb.net/ayuntamiento?retryWrites=true&w=majority',
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          },
        )

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
})
