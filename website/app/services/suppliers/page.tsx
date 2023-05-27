import { NextPage } from "next";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { Service } from "../recievers/page";

const SupplyingServices: NextPage = () => {
const dummyServices: Service[] = [
    {
        id: 1,
        name: 'test1',
        description: 'desc1',
        type: 'SUPPLIER',
        price: 1,
        volunteerId: 1
    },
    {
        id: 2,
        name: 'test2',
        description: 'desc2',
        type: 'SUPPLIER',
        price: 2,
        volunteerId: 2
    },
    {
        id: 3,
        name: 'test3',
        description: 'desc3',
        type: 'SUPPLIER',
        price: 3,
        volunteerId: 3
    },
]

    return <div className="services flex flex-col gap-4">
        <Header heading='Supplying services'>You can hire users here to do work for you!</Header>
        <main className="flex flex-col justify-center items-center gap-3">
            {dummyServices.map(i => <ServiceCard {...i} />)}
        </main>
    </div>
}

export default SupplyingServices;