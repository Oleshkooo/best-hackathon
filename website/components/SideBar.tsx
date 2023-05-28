import Link from "next/link";
import Image from "next/image";

import User from "@/public/user.svg"
import Coin from "@/public/coin.svg"
import { Button } from "./ui/Button";
import { Volunteer } from "@/app/layout";

const SideBar: React.FC = () => {
    const userData: Volunteer = {
        id: 1,
        email: 'ya@gmail.com',
        password: '1',
        name: 'John Doe',
        balance: 13,
        description: 'descProfile',
        servicesId: [],
        messagesId: []
    }

    return <div className="flex flex-col justify-center items-center gap-4
    w-[20%] h-full
    text-lg font-medium 
    transition-colors 
    hover:text-foreground/80 
    sm:text-sm">
        <Link className="border-2 border-solid border-black rounded-full"
            href={`/profile/${userData.id}`}>
            <Image width={64} height={64} src={User} alt="user" />
        </Link>
        <p className="flex">Balance: {userData.balance}<Image width={16} height={16} src={Coin} alt="user" /></p>
        <Button href="/services/recievers" variant="ghost" className="w-full">Recievers</Button>
        <Button href="/services/suppliers" variant="ghost" className="w-full">Suppliers</Button>
    </div>
}

export default SideBar;