import { memo } from 'react'

import s from './Container.module.scss'

interface ContainerProps extends JSX.IntrinsicAttributes, React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = memo(
    ({ id, className = '', style, children }) => {
        return (
            <div id={id} className={`${s.Container} ${className}`} style={style}>
                {children}
            </div>
        )
    },
)

Container.displayName = 'Container'
