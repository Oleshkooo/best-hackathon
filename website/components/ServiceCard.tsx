import { type Service } from '@prisma/client'
import Link from 'next/link'

import { Card, CardDescription, CardTitle } from '@/components/ui/Card'

interface ServiceCardProps {
    id: Service['id']
    title: Service['name']
    description?: Service['description']
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description }) => {
    return (
        <Link href={`/dashboard/${id}`}>
            <Card className="py-5 px-7">
                <CardTitle>{title}</CardTitle>
                <CardDescription className="mt-1">{description}</CardDescription>
            </Card>
        </Link>
    )
}
