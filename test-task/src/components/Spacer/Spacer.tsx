import { memo, useMemo, type FC, type HTMLAttributes } from 'react'

import { getMargin } from './Spacer.data'
import s from './Spacer.module.scss'

interface SpacerProps extends JSX.IntrinsicAttributes, HTMLAttributes<HTMLDivElement> {
    x?: number
    y?: number
}

export const Spacer: FC<SpacerProps> = memo(({ x = 0, y = 0 }) => {
    const marginLeft = useMemo(() => getMargin(x), [x])
    const marginTop = useMemo(() => getMargin(y), [y])

    return (
        <span
            aria-hidden
            className={s.Spacer}
            style={{
                marginLeft,
                marginTop,
            }}
        />
    )
})

Spacer.displayName = 'Spacer'
