import { type Service } from '@prisma/client'
import { type NextPage } from 'next'

import { PageHeading } from '@/components/PageHeading'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'

const RecievingServices: NextPage = () => {
    const dummyServices: Service[] = [
        {
            id: 1,
            name: 'test1',
            description: 'desc1',
            type: 'RECIEVER',
            price: 1,
            volunteerId: 1,
        },
        {
            id: 2,
            name: 'test2',
            description: 'desc2',
            type: 'RECIEVER',
            price: 2,
            volunteerId: 2,
        },
        {
            id: 3,
            name: 'test3',
            description: 'desc3',
            type: 'RECIEVER',
            price: 3,
            volunteerId: 3,
        },
    ]

    return (
        <div className="services flex flex-col gap-[40px]">
            <PageHeading heading="Recieving services">
                You can work for users here to earn coins!
            </PageHeading>
            <main className="flex flex-col gap-3">
                {dummyServices.map(service => (
                    <Card key={service.id} className="py-5 px-7">
                        <CardTitle>{service.name}</CardTitle>
                        <CardDescription className="mt-1">{service.description}</CardDescription>
                    </Card>
                ))}
            </main>
        </div>
    )
}

export default RecievingServices
