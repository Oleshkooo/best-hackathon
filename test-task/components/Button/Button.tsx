'use client'

import { memo } from 'react'

import s from './Button.module.scss'

interface ButtonProps extends JSX.IntrinsicAttributes, React.HTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset'
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = memo(
    ({ className = '', type, onClick, children, ...props }) => {
        return (
            <button className={`${s.Button} ${className}`} type={type} onClick={onClick} {...props}>
                {children}
            </button>
        )
    },
)

Button.displayName = 'Button'
