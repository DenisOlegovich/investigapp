import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

export interface AspectRatioProps extends ComponentPropsWithoutRef<'div'> {
    ratio: number
}

export default function AspectRatio({ children, className = '', ratio, ...props }: AspectRatioProps) {
    return (
        <div
            className={cn('relative aspect-ratio', className)}
            {...props}
        >
            <div
                style={{
                    paddingBottom: `${(1 / ratio) * 100}%`,
                }}
            />
            {children}
        </div>
    )
}
