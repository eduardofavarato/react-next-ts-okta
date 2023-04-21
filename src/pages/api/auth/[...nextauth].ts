import NextAuth, { NextAuthOptions } from 'next-auth'
import Okta from 'next-auth/providers/okta'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    Okta({
      clientId: process.env.OKTA_OAUTH2_CLIENT_ID as string,
      clientSecret: process.env.OKTA_OAUTH2_CLIENT_SECRET as string,
      issuer: process.env.OKTA_OAUTH2_ISSUER as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.access_token
        token.idToken = account.id_token
        token.oktaId = account.providerAccountId
      }

      // Decrypting JWT to check if expired
      const tokenParsed = JSON.parse(Buffer.from(token.idToken.split('.')[1], 'base64').toString())
      const dateNowInSeconds = new Date().getTime() / 1000
      if (dateNowInSeconds > tokenParsed.exp) {
        throw Error('expired token')
      }

      return token
    },
  },
}

export default NextAuth(authOptions)
