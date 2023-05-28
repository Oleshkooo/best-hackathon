import { ServiceType } from '@prisma/client'
import { type NextPage } from 'next'

import { PageHeading } from '@/components/PageHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { prisma } from '@/prisma'

const fetchSupplies = async () => {
    return await prisma.service.findMany({
        where: {
            type: ServiceType.SUPPLIER,
        },
    })
}

// @ts-expect-error Async Server Component
const Supply: NextPage = async () => {
    const supplies = await fetchSupplies()

    return (
        <div className="flex flex-col gap-[40px]">
            <PageHeading heading="Supplying services">
                You can hire users here to do work for you!
            </PageHeading>
            <main className="flex flex-col gap-4">
                {supplies?.map(service => (
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

export default Supply
