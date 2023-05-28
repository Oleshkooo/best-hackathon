'use client'

import { type NextPage } from 'next'

import { Input } from '@/components/ui/Input'
import { useState } from 'react'

import { toast } from '@/hooks/use-toast'

const DonatePage: NextPage = () => {
    const [coins, setCoins] = useState<number>(0);

    const handleCoinsChange = (e: React.FormEvent<HTMLFormElement>) => {
        setCoins(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const coins = e.currentTarget.elements[0].value;
        const card = e.currentTarget.elements[1].value;
        const exp = e.currentTarget.elements[2].value;
        const cvv = e.currentTarget.elements[3].value;

        if (!coins || !card || !exp || !cvv) {
            toast({
                title: 'Error',
                description: 'Please fill out all fields', variant: 'destructive'
            });
            return;
        }

        if (card.length < 16) {
            toast({
                title: 'Error',
                description: 'Please provide a valid card number', variant: 'destructive'
            });
            return;
        }

        if (exp.length < 5 || exp[2] !== '/') {
            toast({
                title: 'Error',
                description: 'Please provide a valid expiration date', variant: 'destructive'
            });
            return;
        }

        if (cvv.length < 3) {
            toast({
                title: 'Error',
                description: 'Please provide a CVV/CVV2 code', variant: 'destructive'
            });
            return;
        }

        // TODO commit transaction

        toast({
            title: 'Success',
            description: `Successfully donated ${coins * 50}₴!`, variant: 'default'
        });

        // TODO redirect
    }

    return (
        <div className="pt-6 flex justify-center">
            <form className='w-[50%] flex flex-col gap-3' onSubmit={handleSubmit}>
                <Input onChange={handleCoinsChange} type='number' name='price' placeholder='Amount of coins you wish to purchase' />
                <Input type='text' maxLength={16} name='hex' placeholder='Card number' />
                <div className='flex gap-3'>
                    <Input type='text' maxLength={5} name='expire' placeholder='Expiration date' />
                    <Input type='text' maxLength={3} name='cvv' placeholder='CVV/CVV2' />
                </div>
                {coins > 0 ? <p className='text-2xl'>Price: {coins * 50}₴</p> : <></>}
                <button
                    className="w-full py-2 px-4 text-center 
            bg-black text-white rounded-lg
            border-2 border-solid border-transparent
            hover:text-black hover:bg-white hover:border-black
            transition"
                >
                    Donate!
                </button>
            </form>
        </div>
    )
}

export default DonatePage
