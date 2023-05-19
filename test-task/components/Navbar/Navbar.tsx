import { memo } from 'react'

import { NavbarClient } from '@/components/Navbar/Navbar.client'
import { AuthProvider } from '@/hoc'

export const Navbar: React.FC = memo(() => {
    return (
        <AuthProvider>
            <NavbarClient />
        </AuthProvider>
    )
})

Navbar.displayName = 'Navbar'
