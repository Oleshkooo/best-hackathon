'use client'

import { signOut, useSession } from 'next-auth/react'
import { memo } from 'react'

import { CoinIcon, GridIcon, HomeIcon, LoginIcon, LogoutIcon } from '../Icons'
import { Link } from '../Link'

import s from './Navbar.module.scss'

export const NavbarClient: React.FC = memo(() => {
    const { status } = useSession()

    const handleLogout = () => {
        void signOut({
            redirect: true,
            callbackUrl: '/',
        })
    }

    const LogButton = (() => {
        if (status === 'authenticated') {
            return (
                <button onClick={handleLogout}>
                    <LogoutIcon />
                </button>
            )
        }

        return (
            <Link to="/login">
                <LoginIcon />
            </Link>
        )
    })()

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
                <div className={s.iconsGrop}>{LogButton}</div>
            </nav>
        </div>
    )
})
