import { ServiceType } from '@prisma/client'
import { type NextPage } from 'next'

import { PageHeading } from '@/components/PageHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { prisma } from '@/prisma'

const fetchRecieves = async () => {
    return await prisma.service.findMany({
        where: {
            type: ServiceType.RECIEVER,
        },
    })
}

// @ts-expect-error Async Server Component
const Recieve: NextPage = async () => {
    const recieves = await fetchRecieves()

    return (
        <div className="flex flex-col gap-[40px]">
            <PageHeading heading="Recieving services">
                You can work for users here to earn coins!
            </PageHeading>
            <main className="flex flex-col gap-4">
                {recieves.map(service => (
                    <ServiceCard
                        key={service.id}
                        id={service.id}
                        title={service.name}
                        description={service.description}
                    />
                ))}
            </main>
        </div>
    )
}

export default Recieve
