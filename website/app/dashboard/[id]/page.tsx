import { type Service } from '@prisma/client'
import { type NextPage } from 'next'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import Coin from '@/public/coin.svg'
import User from '@/public/user.svg'

const ServicePage: NextPage = () => {
    const dummyData: Service = {
        id: '1',
        name: 'test1',
        description: 'desc1',
        type: 'SUPPLIER',
        price: 1,
        volunteerId: '1',
    }

    return (
        <div className="pr-6 flex justify-between">
            <div className="flex flex-col gap-6 w-[50%]">
                <h2 className="text-5xl">{dummyData.name}</h2>
                <p className="text-2xl">{dummyData.description}</p>
                <p>{dummyData.type === 'SUPPLIER' ? 'Supplier' : 'Reciever'}:</p>
                <div className="flex gap-2">
                    <Image
                        className="border-2 border-solid border-black rounded-full"
                        width={48}
                        height={48}
                        src={User}
                        alt="user"
                    />
                    <Button href={`/profile/${dummyData.volunteerId as string}`}>John Doe</Button>
                </div>
            </div>
            <div className="flex flex-col items-end w-[40%]">
                <p className="flex">
                    Price: {dummyData.price} <Image width={16} height={16} src={Coin} alt="coin" />
                </p>
                <button
                    className="w-full py-2 px-4 text-center 
            bg-black text-white rounded-lg
            border-2 border-solid border-transparent
            hover:text-black hover:bg-white hover:border-black
            transition"
                >
                    Buy it!
                </button>
            </div>
        </div>
    )
}

export default ServicePage
