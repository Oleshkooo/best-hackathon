
import { useCallback } from 'react'
import { Link as ReactLink } from 'react-router-dom'

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
        <ReactLink to={to} className={className} {...defaultProps}>
            {children}
        </ReactLink>
    )
}