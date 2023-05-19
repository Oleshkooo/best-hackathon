'use client'

import { memo } from 'react'

import { CoinIcon, GridIcon, LoginIcon, LogoutIcon, HomeIcon } from '../Icons'
import { Link } from '../Link'

import s from './Navbar.module.scss'

export const Navbar: React.FC = memo(() => {
    const handleLogout = (): void => {
        // logout stuff
    }

    return (
        <div className={s.padding}>
            <nav className={s.Navbar}>
                <div className={s.iconsGrop}>
                    <Link to="/home">
                        <HomeIcon />
                    </Link>
                    <Link to="/dashboard">
                        <GridIcon />
                    </Link>
                    <Link to="/hmm">
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
