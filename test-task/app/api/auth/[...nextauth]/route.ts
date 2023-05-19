import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/server/db/prisma'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',

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

    pages: {
        signIn: '/login',
    },

    callbacks: {
        session: async ({ session, token }) => {
            // @ts-expect-error
            session.user = token.user
            return await Promise.resolve(session)
        },
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
