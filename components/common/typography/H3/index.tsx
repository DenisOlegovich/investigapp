import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export interface H3Props extends ComponentPropsWithoutRef<'h3'> {
    gutter?: boolean
    gutterTop?: boolean
    gutterBottom?: boolean
}

export default function H3({
    gutter = true,
    gutterTop = true,
    gutterBottom = true,
    className,
    children,
    ...props
}: H3Props) {
    return (
        <h3
            className={cn(
                'h3',
                { 'mt-sm sm:mt-lg': gutter && gutterTop, 'mb-sm sm:mb-lg': gutter && gutterBottom },
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
}
