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

export interface Volunteer {
    id: string
    email: string
    password: string
    name: string
    balance: number
    description: string
    servicesId: string[]
    messagesId: string[]
}

export interface Service {
    id: string
    name: string
    description: string
    type: string
    price: number
    volunteerId: string
}

export interface Chat {
    id: string
    userAId: string
    userBId: string
    messages: Message[]
}

export interface Message {
    sender: string
    text: string
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
