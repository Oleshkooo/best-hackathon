'use client'

import { signOut } from 'next-auth/react'
import { memo } from 'react'

import { CoinIcon, GridIcon, HomeIcon, LoginIcon, LogoutIcon } from '../Icons'
import { Link } from '../Link'

import s from './Navbar.module.scss'

export const Navbar: React.FC = memo(() => {
    const handleLogout = (): void => {
        void signOut({
            redirect: true,
            callbackUrl: '/',
        })
    }

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
                    <button onClick={handleLogout}>
                        <LogoutIcon />
                    </button>
                    <Link to="/login">
                        <LoginIcon />
                    </Link>
                </div>
            </nav>
        </div>
    )
})

Navbar.displayName = 'Navbar'
