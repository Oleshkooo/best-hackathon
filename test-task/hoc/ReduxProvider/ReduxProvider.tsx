'use client'

import { memo } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/redux'

interface ReduxProviderProps {
    children?: React.ReactNode
}

export const ReduxProvider: React.FC<ReduxProviderProps> = memo(({ children }) => {
    return <Provider store={store}>{children}</Provider>
})

ReduxProvider.displayName = 'Redux'
