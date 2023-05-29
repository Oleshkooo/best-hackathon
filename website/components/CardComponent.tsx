import { memo } from 'react'

import { Card, CardDescription, CardTitle } from '@/components/ui/Card'

interface CardComponentProps {
    title?: string
    description?: string
    children?: React.ReactNode
}

export const CardComponent: React.FC<CardComponentProps> = memo(
    ({ title, description, children }) => {
        return (
            <Card className="px-7 py-5 transition-all duration-300 hover:bg-slate-50">
                {title != null ? <CardTitle>{title}</CardTitle> : null}
                {description != null ? (
                    <CardDescription className="mt-2">{description}</CardDescription>
                ) : null}
                {children}
            </Card>
        )
    },
)
