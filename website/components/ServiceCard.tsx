import { Service } from "@/app/services/recievers/page";
import Image from "next/image";
import Link from "next/link";

import Coin from "@/public/coin.svg"

const ServiceCard: React.FC<Service> = ({ id, name, description, type, price, volunteerId }) => {
    return (
        <Link href={`/services/${id}`} className="flex items-center justify-between 
        px-4 py-2 w-full
        border-solid border-black border-2 rounded-lg shadow
        hover:shadow-xl
        transition">
            <div className="flex flex-col">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="flex">
                <p>{price}</p>
                <Image width={16} height={16} src={Coin} alt='coin'/>
            </div>
        </Link>
    )
}

export default ServiceCard;