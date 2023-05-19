import { getServerSession } from 'next-auth/next'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { AuthProviderClient } from '@/hoc/AuthProvicer/AuthProviderClient'

interface AuthProviderProps {
    children?: React.ReactNode
}

// @ts-expect-error Async Server Component
export const AuthProvider: React.FC<AuthProviderProps> = async ({ children }) => {
    const session = await getServerSession(authOptions)

    return <AuthProviderClient session={session}>{children}</AuthProviderClient>
}
