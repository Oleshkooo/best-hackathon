'use client'

import { memo } from 'react'

import { CoinIcon, GridIcon, LoginIcon, LogoutIcon } from '../Icons'
import { Link } from '../Link'

import s from './Nav.module.scss'

export const Nav: React.FC = memo(() => {
    const handleLogout = (): void => {
        // logout stuff
    }

    return (
        <nav className={s.nav}>
            <div className={s.groupNav}>
                <Link to="/dashboard">
                    <GridIcon />
                </Link>
                <Link to="/hmm">
                    <CoinIcon />
                </Link>
            </div>
            <div className={s.groupNav}>
                <button onClick={handleLogout}>
                    <LogoutIcon />
                </button>
                <Link to="/login">
                    <LoginIcon />
                </Link>
            </div>
        </nav>
    )
})

Nav.displayName = 'Nav'
