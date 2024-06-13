import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export default function Signature({ className, children, ...props }: ComponentPropsWithoutRef<'p'>) {
    return (
        <p
            className={cn('signature', 'text-grey-dark', className)}
            {...props}
        >
            {children}
        </p>
    )
}
