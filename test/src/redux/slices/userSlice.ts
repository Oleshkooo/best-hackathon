import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type User } from '@prisma/client'

type UserState = User

const initialState: UserState = {
    id: '',
    username: '',
    email: '',
    password: '',
    balance: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAction: (state, action: PayloadAction<UserState>) => {
            const { id, username, email, password, balance } = action.payload
            state.id = id
            state.username = username
            state.email = email
            state.password = password
            state.balance = balance
        },
    },
})

export const { setUserAction } = userSlice.actions
