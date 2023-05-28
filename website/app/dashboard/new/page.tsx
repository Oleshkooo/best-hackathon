'use client'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { type Service } from '@prisma/client'
import { type NextPage } from 'next'
import { useInput } from '@/hooks/use-input'

import Link from 'next/link'

const NewServicePage: NextPage = () => {
    const { value: name, reset: resetName, bind: bindName } = useInput('')
    const { value: desc, reset: resetDesc, bind: bindDesc } = useInput('')
    const { value: type, reset: resetType, bind: bindType } = useInput('')
    const { value: time, reset: resetTime, bind: bindTime } = useInput('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    }

    return (
        <div className="px-3 sm:py-9 flex flex-col items-center gap-6">
            <h3 className='text-3xl'>Creating new service</h3>
            <form className='w-full sm:w-[70%] flex flex-col gap-4' onSubmit={handleSubmit}>
                <Input type='text' name='name' placeholder='Name of your service' {...bindName} />
                <Input type='text' name='desc' placeholder='Write a short description of your service...' {...bindDesc} />
                <div className='flex w-full'>
                    <Input className='' type='radio' id='ch1' name='type' value='You recieve service' {...bindType} />
                    <label htmlFor='ch1'>You recieve service</label>
                    <Input type='radio' id='ch2' name='type' value='You supply service' {...bindType} />
                    <label htmlFor='ch2'>You supply service</label>
                </div>
                <Input type='number' name='time' placeholder='How much time will it take?' {...bindTime} />
                <Button className='w-[40%]' type='submit'>Create new service</Button>
            </form>
        </div>
    )
}

export default NewServicePage
