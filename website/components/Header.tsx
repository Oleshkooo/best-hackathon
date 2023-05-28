import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { Button } from './ui/Button'

interface HeaderProps {
    children?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className="sticky top-0 z-40 border-b bg-background flex items-center justify-between">
            <div className="h-16 flex items-center gap-10 py-4 px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                    <span className="font-bold">Voluntee</span>
                </Link>
                <div className="flex items-center gap-1">{children}</div>
            </div>
            <div className='flex gap-5 w-[30%]'>
                <Button className='w-[40%]' href='/dashboard/new'>New service</Button>
                <Button className='w-[40%]' href='/dashboard/donate'>Donate</Button>
            </div>
        </header>
    )
}
