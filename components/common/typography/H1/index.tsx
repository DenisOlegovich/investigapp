import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export interface H1Props extends ComponentPropsWithoutRef<'h1'> {
    gutter?: boolean
    gutterTop?: boolean
    gutterBottom?: boolean
}

export default function H1({
    gutter = true,
    gutterTop = true,
    gutterBottom = true,
    className,
    children,
    ...props
}: H1Props) {
    return (
        <h1
            className={cn(
                'h1',
                { 'mt-2xl md:mt-3xl': gutterTop && gutter, 'mb-2xl md:mb-3xl': gutterBottom && gutter },
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}
