import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

export interface GridContentLayoutProps extends ComponentPropsWithoutRef<'div'> {
    template?: 'grid' | 'column'
}

export default function GridContentLayout({
    template = 'column',
    className,
    children,
    ...props
}: GridContentLayoutProps) {
    return (
        <div
            className={cn(
                'grid',
                'grid-cols-[fit-content(755px)]',
                { 'lg:grid-cols-[fit-content(755px)_1fr]': template === 'grid' },
                'gap-x-[10%]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
