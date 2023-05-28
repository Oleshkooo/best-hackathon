'use client'

import { type NextPage } from 'next'
import Link from 'next/link'
import { Icons } from '@/components/ui/Icons'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { toast } from '@/hooks/use-toast'

const Register: NextPage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = e.currentTarget.elements[0].value;
        const pass = e.currentTarget.elements[1].value;
        const cpass = e.currentTarget.elements[2].value;

        if (!email || !pass || !cpass) {
            toast({
                title: 'Error',
                description: 'Please fill out all the fields', variant: 'destructive'
            });
            return;
        }

        if (pass !== cpass) {
            toast({
                title: 'Error',
                description: 'Passwords don\'t match', variant: 'destructive'
            });
            return;
        }

        if (!email.includes('@')) {
            toast({
                title: 'Error',
                description: 'Please provide a valid email', variant: 'destructive'
            });
            return;
        }

        if (pass.length < 8) {
            toast({
                title: 'Error',
                description: 'Password is too short (8 symbols minimum)', variant: 'destructive'
            });
            return;
        }

        // TODO register fetch

        toast({
            title: 'Success',
            description: 'Successfully signed up!', variant: 'default'
        });

        // TODO redirect
    }

    return (
        <div className="container flex h-screen w-full flex-col gap-[50px]">
            <Link href="/" className='flex items-center hover:text-gray-400 transition justify-start'>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                Back
            </Link>
            <div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email and password to sign in to your account
                    </p>
                </div>
                <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit}>
                    <Input type='text' name='email' placeholder='name@example.com' />
                    <Input type='password' name='password' placeholder='Your password' />
                    <Input type='cpassword' name='password' placeholder='Confirm password' />
                    <Button type='submit'>Sign up</Button>
                </form>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link
                        href="/login"
                        className="hover:text-brand underline underline-offset-4 hover:text-gray-400 transition"
                    >
                        Already have an account? Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
