import { type NextPage } from 'next'

import { Button } from '@/components/ui/Button'

export const dynamic = 'force-dynamic'

const Index: NextPage = () => {
    return (
        <div className="mt-32 flex flex-col items-center justify-center text-center">
            <h1 className="max-w-[75rem] text-3xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
                A new approach to volunteering with personal growth
            </h1>
            <p className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Get not only the opportunity to make a charitable contribution, but also a chance to
                acquire new skills or services with the help of time-coins
            </p>
            <Button href="/login" variant="default" size="lg" className="mt-6">
                Get Started
            </Button>
        </div>
    )
}

export default Index
