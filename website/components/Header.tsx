import Link from 'next/link'
import { memo } from 'react'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/Button'

interface HeaderProps {
    children?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = memo(({ children }) => {
    return (
        <header className="sticky top-0 z-40 border-b bg-background">
            <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <Logo />
                        <span className="font-bold">SkillSwap</span>
                    </Link>
                    <div className="flex items-center gap-1">{children}</div>
                </div>
                <div className="flex gap-5 text-center">
                    <Button variant="outline" href="/dashboard/new">
                        New service
                    </Button>
                    <Button variant="outline" href="/dashboard/donate">
                        Donate
                    </Button>
                </div>
            </div>
        </header>
    )
})
