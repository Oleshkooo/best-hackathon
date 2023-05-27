import { type NextPage } from 'next'
import { Toaster } from 'react-hot-toast'

import '@/styles/global.scss'

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Toaster containerClassName="toaster" position="top-center" reverseOrder={false} />
                <div className="container">{children}</div>
            </body>
        </html>
    )
}

export default RootLayout
