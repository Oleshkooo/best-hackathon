'use client'

import { AuthProvider } from '@/hoc/AuthProvider'

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>
}
