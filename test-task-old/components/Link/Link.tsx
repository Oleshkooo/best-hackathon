'use client'

import NextLink from 'next/link'
import { useCallback } from 'react'

import { useScrollSelector } from '@/hooks'

import s from './Link.module.scss'

export interface LinkProps extends JSX.IntrinsicAttributes, React.HTMLAttributes<HTMLSpanElement> {
    to: string
    navigate?: boolean
    scroll?: boolean
    children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({
    to,
    scroll = false,
    children,
    id,
    className = '',
    style,
    ...props
}) => {
    const scrollSelector = useScrollSelector()

    const handleScrollClick = useCallback(() => {
        scrollSelector(to)
    }, [scrollSelector, to])

    const defaultProps = {
        id,
        style,
        ...props,
    }

    if (scroll) {
        return (
            <span
                onClick={handleScrollClick}
                className={`${s.Link} ${className}`}
                {...defaultProps}
            >
                {children}
            </span>
        )
    }

    return (
        <NextLink href={to} className={className} {...defaultProps}>
            {children}
        </NextLink>
    )
}
