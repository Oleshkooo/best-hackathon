import { type NextPage } from 'next'
import Image from "next/image";

import { Volunteer } from '@/components/SideBar'

import User from "@/public/user.svg"

const Profile: NextPage = () => {
    const userData: Volunteer = {
        id: 1,
        email: 'ya@gmail.com',
        password: '1',
        name: 'John Doe',
        balance: 13,
        description: 'descProfile'
    }

    return <div className='flex gap-4'>
        <Image className='border-4 border-solid border-black rounded-full'
         width={128} height={128} src={User} alt='user' />
         <div className='flex flex-col gap-3'>
            <h2 className='text-3xl'>{userData.name}</h2>
            <p className='text-xl font-bold'>About me:</p>
            <p className='text-lg'>{userData.description}</p>
         </div>
    </div>
}

export default Profile
