import { type NextPage } from 'next'
import  Link  from 'next/Link'

const Register: NextPage = ()=>{
    return <main>
        <div className='ml-3 mt-3' >

        
        <Link className='' href="/">Back</Link>
        <div>
            <h2>Create an account</h2>
            <form action="">
                <input name='email' type="email" placeholder='Enter your email' />
                <input name='password' type="password" placeholder='Enter your password' />
                <input name='confirmPassword' type="password" placeholder='Enter your password' />
                <button type='submit' > Sign up</button>
            </form>
        </div>
        </div>
    </main>
}

export default Register;