import { type Service } from '@prisma/client'
import Image from 'next/image'
import { redirect } from 'next/navigation'

import { PageHeading } from '@/components/PageHeading'
import { Button } from '@/components/ui/Button'
import { prisma } from '@/prisma'
import Coin from '@/public/coin.svg'
import User from '@/public/user.svg'

const fetchService = async (id: Service['id']) => {
    return await prisma.service.findUnique({
        where: {
            id,
        },
    })
}

// @ts-expect-error Async Server Component
const ServiceExact: React.FC<ServiceServerProps> = async ({ params }) => {
    const service = await fetchService(params.id)

    if (service == null || service.volunteerId == null) {
        redirect('/404')
    }

    return (
        <div className="pr-6 flex justify-between">
            <div className="flex flex-col gap-6 w-[50%]">
                <PageHeading heading={service.name}>{service.description}</PageHeading>
                <p>{service.type === 'SUPPLIER' ? 'Supplier' : 'Reciever'}:</p>
                <div className="flex gap-2">
                    <Image
                        className="border-2 border-solid border-black rounded-full"
                        width={48}
                        height={48}
                        src={User}
                        alt="user"
                    />
                    <Button href={`/profile/${service.volunteerId}`}>John Doe</Button>
                </div>
            </div>
            <div className="flex flex-col items-end w-[40%]">
                <p className="flex">
                    Price: {service.price} <Image width={16} height={16} src={Coin} alt="coin" />
                </p>
                <button className="w-full py-2 px-4 text-center bg-black text-white rounded-lg border-2 border-solid border-transparent hover:text-black hover:bg-white hover:border-black transition">
                    Buy it!
                </button>
            </div>
        </div>
    )
}

export default ServiceExact
