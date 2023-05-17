import { Inter } from 'next/font/google'

import { Nav } from '@/components'

import '@/styles/global.scss'

import s from './layout.module.scss'

interface RootLayoutProps {
    children: React.ReactNode
}

const inter = Inter({ subsets: ['latin', 'cyrillic', 'cyrillic-ext'] })

export const metadata = {
    title: 'Finance App',
    description: 'Finance App',
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={`${inter.className} ${s.body}`}>
                <Nav />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
