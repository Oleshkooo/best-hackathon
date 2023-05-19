import { Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { Navbar } from '@/components'

import '@/styles/global.scss'

import s from './layout.module.scss'

interface RootLayoutProps {
    children: React.ReactNode
}

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic', 'cyrillic-ext'] })

export const metadata = {
    title: 'Finance App',
    description: 'Finance App',
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={`${montserrat.className} ${s.body}`}>
                <Toaster containerClassName="toaster" position="top-center" reverseOrder={false} />
                <Navbar />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
