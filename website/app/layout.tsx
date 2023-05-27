import { type NextPage } from 'next'

import { TailwindIndicator } from '@/components/Tailwind-indicator'
import { Toaster } from '@/components/Toaster'
import '@/styles/editor.css'
import '@/styles/global.css'
import '@/styles/mdx.css'
import '@/styles/toaster.css'

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col justify-between bg-white">
                <div className="container">{children}</div>
                <Toaster />
                <TailwindIndicator />
            </body>
        </html>
    )
}

export default RootLayout
