import { Inter } from 'next/font/google'

import '@/styles/global.scss'

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
            <body className={inter.className}>{children}</body>
        </html>
    )
}

export default RootLayout
