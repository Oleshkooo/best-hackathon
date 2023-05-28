import { Gem, HelpingHand } from 'lucide-react'
import { type NextPage } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Nav, type NavItem } from '@/components/Nav'
import { TailwindIndicator } from '@/components/ui/Tailwind-indicator'
import { Toaster } from '@/components/ui/Toaster'
import '@/styles/editor.css'
import '@/styles/global.css'
import '@/styles/mdx.css'
import '@/styles/toaster.css'

interface RootLayoutProps {
    children: React.ReactNode
}

const navItems: NavItem[] = [
    {
        title: 'Recieve',
        href: '/dashboard/recieve',
        icon: <HelpingHand size={18} />,
    },
    {
        title: 'Supply',
        href: '/dashboard/supply',
        icon: <Gem size={18} />,
    },
]

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className="min-h-screen bg-background font-sans antialiased">
                <div className="flex flex-col min-h-screen justify-between">
                    <Header />
                    <div className="py-3" />
                    <div className="container flex gap-[40px] mb-auto">
                        <aside className="flex flex-col w-[200px]">
                            <Nav items={navItems} />
                        </aside>
                        <main className="flex flex-1 flex-col w-full overflow-hidden">
                            {children}
                        </main>
                    </div>
                    <Footer />
                </div>
                <Toaster />
                <TailwindIndicator />
            </body>
        </html>
    )
}

export default RootLayout
