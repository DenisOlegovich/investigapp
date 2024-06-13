import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export default function Hero({ className, children, ...props }: ComponentPropsWithoutRef<'h1'>) {
    return (
        <h1
            className={cn('hero', className)}
            {...props}
        >
            {children}
        </h1>
    )
}
