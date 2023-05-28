'use client'

import { type NextPage } from 'next'
import Link from 'next/link'
import { Icons } from '@/components/ui/Icons'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { toast } from '@/hooks/use-toast'

import { PostReqBody } from '@/app/api/login/route'
import { Fetch } from '@/utils/Fetch'
import { signIn } from 'next-auth/react'
import { stringify } from 'querystring'

const Register: NextPage = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = e.currentTarget.elements[0].value;
        const pass = e.currentTarget.elements[1].value;

        if (!email || !pass) {
            toast({
                title: 'Error',
                description: 'Please fill out email and password', variant: 'destructive'
            });
            return;
        }
        const creds = JSON.stringify({
            email: email,
            password: pass
        })
        const res = await Fetch('/api/login', {
            body: {
                creds
            }
        })

        void signIn(
            "credentials",
            {
                username: email,
                password: pass,
                redirect: true,
                dashboard: '/dashboard/recieve'
            }
        )

        toast({
            title: 'Success',
            description: 'Successfully logged in!', variant: 'default'
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
                    <Button type='submit'>Sign in</Button>
                </form>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link
                        href="/register"
                        className="hover:text-brand underline underline-offset-4 hover:text-gray-400 transition"
                    >
                        Don't have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register
