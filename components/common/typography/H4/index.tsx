import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export interface H4Props extends ComponentPropsWithoutRef<'h4'> {
    gutter?: boolean
    gutterTop?: boolean
    gutterBottom?: boolean
}

export default function H4({
    gutter = true,
    gutterTop = true,
    gutterBottom = true,
    className,
    children,
    ...props
}: H4Props) {
    return (
        <h4
            className={cn(
                'h4',
                { 'mt-2xs sm:mt-sm': gutter && gutterTop, 'mb-2xs sm:mb-sm': gutter && gutterBottom },
                className
            )}
            {...props}
        >
            {children}
        </h4>
    )
}
