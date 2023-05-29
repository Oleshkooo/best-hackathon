import { forwardRef, memo } from 'react'

import { cn } from '@/utils/cn'

//

export const Card = memo(
    forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
        ({ className, ...props }, ref) => (
            <div
                ref={ref}
                className={cn(
                    'rounded-lg border bg-card text-card-foreground shadow-sm',
                    className,
                )}
                {...props}
            />
        ),
    ),
)
Card.displayName = 'Card'

//

export const CardHeader = memo(
    forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
        ({ className, ...props }, ref) => (
            <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
        ),
    ),
)
CardHeader.displayName = 'CardHeader'

//

export const CardTitle = memo(
    forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
        ({ className, ...props }, ref) => (
            <h3
                ref={ref}
                className={cn('text-lg font-semibold leading-none tracking-tight', className)}
                {...props}
            />
        ),
    ),
)
CardTitle.displayName = 'CardTitle'

//

export const CardDescription = memo(
    forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
        ({ className, ...props }, ref) => (
            <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
        ),
    ),
)
CardDescription.displayName = 'CardDescription'

//

export const CardContent = memo(
    forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
        ({ className, ...props }, ref) => (
            <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
        ),
    ),
)
CardContent.displayName = 'CardContent'

//

export const CardFooter = memo(
    forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
        ({ className, ...props }, ref) => (
            <div ref={ref} className={cn(' flex items-center p-6 pt-0', className)} {...props} />
        ),
    ),
)
CardFooter.displayName = 'CardFooter'
