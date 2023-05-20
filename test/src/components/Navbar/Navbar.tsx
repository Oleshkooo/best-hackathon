import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { CoinIcon, GridIcon, HomeIcon, LoginIcon, LogoutIcon } from '@/components'
import { useAppDispatch, useAppSelector } from '@/redux'
import { logOutAction } from '@/redux/slices/userSlice'

import s from './Navbar.module.scss'

export const Navbar: React.FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user.user)
    const navigate = useNavigate()

    const handleLogout = () => {
        const action = logOutAction()
        dispatch(action)
        navigate('/login')
    }

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div className={s.padding}>
            <nav className={s.Navbar}>
                <div className={s.iconsGrop}>
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                    <Link to="/dashboard">
                        <GridIcon />
                    </Link>
                    <Link to="/transactions">
                        <CoinIcon />
                    </Link>
                </div>
                <div className={s.iconsGrop}>
                    {user?.id === '' ? (
                        <Link to="/login">
                            <LoginIcon />
                        </Link>
                    ) : (
                        <button onClick={handleLogout}>
                            <LogoutIcon />
                        </button>
                    )}
                </div>
            </nav>
        </div>
    )
}
