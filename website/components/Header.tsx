import Link from 'next/link'

import { Logo } from '@/components/Logo'

interface HeaderProps {
    children?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container h-16 flex items-center gap-10 py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                    <span className="font-bold">Voluntee</span>
                </Link>
                <div className="flex items-center gap-1">{children}</div>
            </div>
        </header>
    )
}
