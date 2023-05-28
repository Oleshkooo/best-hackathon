import { type NextPage } from 'next'
import Image from 'next/image'

import VolunteerCard from '@/components/VolunteerCard'

import User from '@/public/user.svg'

interface Volunteer {
    id: string,
    email: string,
    password: string,
    name: string,
    balance: string,
    description: string,
}

interface Service {
    id: string
    name: string
    description: string
    type: string
    price: number
    volunteer: Volunteer[]
    volunteerId: string
}

const Profile: NextPage = () => {
    const userData: Volunteer = {
        id: '1',
        email: 'ya@gmail.com',
        password: '1',
        name: 'John Doe',
        balance: '13',
        description: 'descProfile',
    }

    const usersData: Volunteer[] = [
        {
            id: '4',
            email: 'ya@gmail.com',
            password: '1',
            name: 'John Moe',
            balance: '13',
            description: 'descProfile',
        },
        {
            id: '2',
            email: 'ya@gmail.com',
            password: '1',
            name: 'John Shoe',
            balance: '13',
            description: 'descProfile',
        },
        {
            id: '3',
            email: 'ya@gmail.com',
            password: '1',
            name: 'John Shmoe',
            balance: '13',
            description: 'descProfile',
        },

    ]

    const servicesData: Service[] = [
        {
            id: '1',
            name: 'name1',
            description: 'desc1',
            type: 'RECIEVE',
            price: 2,
            volunteer: usersData,
            volunteerId: userData.id
        }
    ]

    return (
        <div className="flex gap-5 justify-between">
            <Image
                className="border-4 border-solid border-black rounded-full h-[128px]"
                width={128}
                height={128}
                src={User}
                alt="user"
            />
            <div className="flex flex-col gap-3 w-[100%]">
                <h2 className="text-3xl">{userData.name}</h2>
                <p className="text-xl font-bold">About me:</p>
                <p className="text-lg">{userData.description}</p>
                <p className="text-xl font-bold">Active services:</p>
                {servicesData.map(i =>
                    i.volunteer.length < 1 ? (
                        <p>No active services :(</p>
                    ) : (
                        i.volunteer.map(j => <VolunteerCard name={j.name} serviceName={i.name} />)
                    ))}
            </div>
        </div>
    )
}

export default Profile
