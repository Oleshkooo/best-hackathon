import { NextPage } from "next";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

import { Service } from "@/app/layout";

const RecievingServices: NextPage = () => {
    const dummyServices: Service[] = [
        {
            id: 1,
            name: 'test1',
            description: 'desc1',
            type: 'RECIEVER',
            price: 1,
            volunteerId: 1
        },
        {
            id: 2,
            name: 'test2',
            description: 'desc2',
            type: 'RECIEVER',
            price: 2,
            volunteerId: 2
        },
        {
            id: 3,
            name: 'test3',
            description: 'desc3',
            type: 'RECIEVER',
            price: 3,
            volunteerId: 3
        },
    ]

    return <div className="services flex flex-col gap-[40px]">
        <Header heading='Recieving services'>You can work for users here to earn coins!</Header>
        <main className="flex flex-col justify-center items-center gap-3">
            {dummyServices.map(i => <ServiceCard {...i} />)}
        </main>
    </div>
}

export default RecievingServices;