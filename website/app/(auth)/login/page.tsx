import { type NextPage } from 'next'
import  Link  from 'next/link'
import {Camera} from 'lucide-react'

const Login: NextPage = ()=>{
    return <main>
        <Link href="/">Back</Link>
        <div>
            <h2>Welcome back!</h2>
            <form action="">
                <input name='email' type="email" placeholder='Enter your email' />
                <input name='password' type="password" placeholder='Enter your password' />
                <button type='submit' >Sign in</button>
            </form>
        </div>
    </main>
}

export default Login;