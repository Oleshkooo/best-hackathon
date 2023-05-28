import { type NextPage } from 'next'
import Image from 'next/image'

import { Volunteer } from '@/app/layout'
import { Chat } from '@/app/layout'
import ChatCard from '@/components/ChatCard'

import User from '@/public/user.svg'

const Profile: NextPage = () => {
    const userData: Volunteer = {
        id: 1,
        email: 'ya@gmail.com',
        password: '1',
        name: 'John Doe',
        balance: 13,
        description: 'descProfile',
        servicesId: ['1', '2', '3'],
        messagesId: ['1', '2', '3'],
    }

    const dummyChat: Chat[] = [
        {
            id: '1',
            userAId: '1',
            userBId: '2',
            messages: [
                {
                    sender: '1',
                    text: 'a',
                },
            ],
        },
        {
            id: '2',
            userAId: '1',
            userBId: '2',
            messages: [
                {
                    sender: '1',
                    text: 'a',
                },
            ],
        },
        {
            id: '3',
            userAId: '1',
            userBId: '2',
            messages: [
                {
                    sender: '1',
                    text: 'a',
                },
            ],
        },
    ]

    return (
        <div className="flex gap-4">
            <Image
                className="border-4 border-solid border-black rounded-full"
                width={128}
                height={128}
                src={User}
                alt="user"
            />
            <div className="flex flex-col gap-3">
                <h2 className="text-3xl">{userData.name}</h2>
                <p className="text-xl font-bold">About me:</p>
                <p className="text-lg">{userData.description}</p>
                <p className="text-xl font-bold">Active services:</p>
                {userData.servicesId.length < 1 ? (
                    <p>No active services :(</p>
                ) : (
                    userData.servicesId.map(i => <ChatCard servicesId={i} />)
                )}
            </div>
        </div>
    )
}

export default Profile
