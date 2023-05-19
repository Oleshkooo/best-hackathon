import { type NextPage } from 'next'

import { AuthProvider } from '@/hoc'

import { LoginClient } from './LoginClient'

const Login: NextPage = () => {
    return (
        <>
            <AuthProvider>asd</AuthProvider>
            <LoginClient />
        </>
    )
}

export default Login
