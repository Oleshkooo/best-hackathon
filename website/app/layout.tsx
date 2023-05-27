import { type NextPage } from 'next'

import { TailwindIndicator } from '@/components/ui/Tailwind-indicator'
import { Toaster } from '@/components/ui/Toaster'
import '@/styles/editor.css'
import '@/styles/global.css'
import '@/styles/mdx.css'
import '@/styles/toaster.css'
import SideBar from '@/components/SideBar'
import Link from 'next/link'
import Image from 'next/image'

import User from '@/public/User.svg'

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white">
                <div className="container flex flex-col gap-[40px]">
                    <div className='w-[300px] flex flex-row items-center justice-center'>
                        <Link href='/' className="flex p-4 font-bold text-2xl">SwapTasks<Image
                            width={32} height={32} src={User} alt='user' /></Link>
                    </div>
                    <div className='flex justify-between'>
                        <SideBar />
                        <div className='w-[75%]'>
                            {children}
                        </div>
                    </div>
                </div>
                <Toaster />
                <TailwindIndicator />
            </body>
        </html>
    )
}

export default RootLayout
