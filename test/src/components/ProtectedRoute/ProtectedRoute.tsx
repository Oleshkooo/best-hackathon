import { Navigate } from 'react-router-dom'

import { useAppSelector } from '@/redux'

interface ProtectedRouteProps {
    children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const user = useAppSelector(state => state.user.user)

    if (user?.id === '') {
        return <Navigate to="/login" />
    }

    return <>{children}</>
}
