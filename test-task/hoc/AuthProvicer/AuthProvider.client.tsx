'use client'

import { SessionProvider, type SessionProviderProps } from 'next-auth/react'

interface AuthProviderProps {
    session: SessionProviderProps['session']
    children?: React.ReactNode
}

export const AuthProviderClient: React.FC<AuthProviderProps> = ({ session, children }) => {
    return (
        <SessionProvider session={session} refetchInterval={3600} refetchOnWindowFocus={true}>
            {children}
        </SessionProvider>
    )
}
