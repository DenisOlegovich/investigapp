import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export interface H2Props extends ComponentPropsWithoutRef<'h2'> {
    gutter?: boolean
    gutterTop?: boolean
    gutterBottom?: boolean
}

export default function H2({
    gutter = true,
    gutterTop = true,
    gutterBottom = true,
    className,
    children,
    ...props
}: H2Props) {
    return (
        <h2
            className={cn(
                'h2',
                { 'mt-lg md:mt-xl': gutter && gutterTop, 'mb-lg md:mb-xl': gutter && gutterBottom },
                className
            )}
            {...props}
        >
            {children}
        </h2>
    )
}
