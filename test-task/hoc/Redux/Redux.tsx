'use client'

import { memo } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from '@/redux'

interface ReduxProps {
    children: React.ReactNode
}

export const Redux: React.FC<ReduxProps> = memo(({ children }) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>
})

Redux.displayName = 'Redux'
