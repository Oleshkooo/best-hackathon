import { type NextPage } from 'next'
import { redirect } from 'next/navigation'

const Page: NextPage = () => {
    return redirect('/dashboard/recieve')
}

export default Page
