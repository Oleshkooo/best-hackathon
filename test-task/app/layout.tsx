import { type NextPage } from 'next'
import { Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { Navbar } from '@/components'

import '@/styles/global.scss'

import s from './main.module.scss'

interface RootLayoutProps {
    children: React.ReactNode
}

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic', 'cyrillic-ext'] })

export const metadata = {
    title: 'Finance App',
    description: 'Finance App',
}

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={`${montserrat.className} ${s.layout}`}>
                <Toaster containerClassName="toaster" position="top-center" reverseOrder={false} />
                <Navbar />
                {children}
            </body>
        </html>
    )
}

export default RootLayout
