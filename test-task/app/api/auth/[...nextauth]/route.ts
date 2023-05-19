import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/server/db/prisma'

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },

            authorize: async (credentials, req) => {
                const { username, password } = credentials as { username: string; password: string }

                const user = await prisma.user.findUnique({
                    where: {
                        [username.includes('@') ? 'email' : 'username']: username,
                    },
                })

                if (user === null || user.password !== password) {
                    return null
                }

                return user
            },
        }),
    ],

    session: {
        strategy: 'jwt',
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
