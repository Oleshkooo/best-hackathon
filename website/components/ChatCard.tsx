import { type Service } from '@prisma/client'

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

interface ChatCardI {
    servicesId: string
}

const ChatCard: React.FC<ChatCardI> = ({ servicesId }) => {
    return <div>{servicesId}</div>
}

export default ChatCard
