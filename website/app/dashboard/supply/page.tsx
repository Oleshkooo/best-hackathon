import { type Service } from '@prisma/client'
import { type NextPage } from 'next'

import { PageHeading } from '@/components/PageHeading'
import { ServiceCard } from '@/components/ServiceCard'

const Supply: NextPage = () => {
    const dummyServices: Service[] = [
        {
            id: 1,
            name: 'test1',
            description: 'desc1',
            type: 'SUPPLIER',
            price: 1,
            volunteerId: 1,
        },
        {
            id: 2,
            name: 'test2',
            description: 'desc2',
            type: 'SUPPLIER',
            price: 2,
            volunteerId: 2,
        },
        {
            id: 3,
            name: 'test3',
            description: 'desc3',
            type: 'SUPPLIER',
            price: 3,
            volunteerId: 3,
        },
    ]

    return (
        <div className="services flex flex-col gap-[40px]">
            <PageHeading heading="Supplying services">
                You can hire users here to do work for you!
            </PageHeading>
            <main className="flex flex-col gap-4">
                {dummyServices.map(service => (
                    <ServiceCard
                        key={service.id}
                        title={service.name}
                        description={service.description}
                    />
                ))}
            </main>
        </div>
    )
}

export default Supply
