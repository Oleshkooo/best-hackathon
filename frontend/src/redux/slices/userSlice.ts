import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { FullUser } from '@/types'

type UserState = FullUser

const initialState: UserState = {
    id: '',
    username: '',
    email: '',
    password: '',
    balance: 0,
    transactions: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAction: (state, action: PayloadAction<UserState>) => {
            const { id, username, email, password, balance, transactions } = action.payload
            state.id = id
            state.username = username
            state.email = email
            state.password = password
            state.balance = balance
            state.transactions = transactions
        },
        logOutAction: state => {
            state.id = ''
            state.username = ''
            state.email = ''
            state.password = ''
            state.balance = 0
            state.transactions = []
        },
    },
})

export const { setUserAction, logOutAction } = userSlice.actions
