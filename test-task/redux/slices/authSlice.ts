import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type User } from '@prisma/client'

type AuthState = User

const initialState: AuthState = {
    id: '',
    username: '',
    email: '',
    password: '',
    balance: 0,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserAction: (state, action: PayloadAction<AuthState>) => {
            const { id, username, email, password, balance } = action.payload
            state.id = id
            state.username = username
            state.email = email
            state.password = password
            state.balance = balance
        },
    },
})

export const { setUserAction } = authSlice.actions
