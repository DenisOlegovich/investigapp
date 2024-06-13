import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export interface LeadProps extends ComponentPropsWithoutRef<'p'> {
    gutter?: boolean
    gutterTop?: boolean
    gutterBottom?: boolean
}

export default function Lead({
    gutter = true,
    gutterTop = true,
    gutterBottom = true,
    className,
    children,
    ...props
}: LeadProps) {
    return (
        <p
            className={cn(
                'lead',
                { 'mt-2xl md:mt-3xl': gutter && gutterTop, 'mb-2xl md:mb-3xl': gutter && gutterBottom },
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}
