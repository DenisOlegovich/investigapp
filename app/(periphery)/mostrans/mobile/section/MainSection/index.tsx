import { ComponentPropsWithoutRef } from 'react'

import { cards } from './constants'
import { cn } from '@/utils'
import Card from '@/components/Card'

export default function MainSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('grid', 'grid-cols-1 xl:grid-cols-2', 'gap-sm md:gap-base lg:gap-lg', className)}>
            {cards.map(({ ...props }, idx) => (
                <Card
                    key={idx}
                    {...props}
                />
            ))}
        </div>
    )
}
