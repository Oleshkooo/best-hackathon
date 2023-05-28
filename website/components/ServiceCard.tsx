import { Card, CardDescription, CardTitle } from '@/components/ui/Card'

interface ServiceCardProps {
    title: string
    description?: string
    children?: React.ReactNode
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, children }) => {
    return (
        <Card className="py-5 px-7">
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
            {children}
        </Card>
    )
}
