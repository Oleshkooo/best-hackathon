import Link from 'next/link'

import { Logo } from '@/components/Logo'

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo></Logo>
                    <span className="font-bold">Voluntee</span>
                </Link>
            </div>
        </header>
    )
}
