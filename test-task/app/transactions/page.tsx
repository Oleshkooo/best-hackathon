import { type NextPage } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getUser } from '@/app/dashboard/page'

import { TransactionsClient } from './Transactions.client'

export const dynamic = 'force-dynamic'

// @ts-expect-error
const Transactions: NextPage = async () => {
    const session = await getServerSession(authOptions)

    if (session == null) {
        redirect('/login')
    }

    const user = await getUser(session?.user?.email)

    return <TransactionsClient user={user} />
}

export default Transactions
