import { Provider as ReduxProvicer } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@/redux'

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ReduxProvicer store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </ReduxProvicer>
    )
}
