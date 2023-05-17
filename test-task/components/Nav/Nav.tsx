import { memo } from 'react'

import { Link, GridIcon, CoinIcon, LoginIcon, LogoutIcon } from '@/components'

import classes from './Nav.module.scss'

export const Nav: React.FC = memo(() => {
    const handleLogout = (): void => {
        // logout stuff
    }

    return (
        <nav className={classes.nav}>
            <div className={classes.groupNav}>
                <Link to="/dashboard">
                    <GridIcon />
                </Link>
                <Link to="/hmm">
                    <CoinIcon />
                </Link>
            </div>
            <div className={classes.groupNav}>
                <button>
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
