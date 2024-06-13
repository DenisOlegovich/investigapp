import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export interface H5Props extends ComponentPropsWithoutRef<'h5'> {
    gutter?: boolean
    gutterTop?: boolean
    gutterBottom?: boolean
}

export default function H5({
    gutter = true,
    gutterTop = true,
    gutterBottom = true,
    className,
    children,
    ...props
}: H5Props) {
    return (
        <h5
            className={cn(
                'text-base sm:text-xl',
                { 'mt-xs': gutter && gutterTop, 'mb-xs': gutter && gutterBottom },
                className
            )}
            {...props}
        >
            {children}
        </h5>
    )
}
