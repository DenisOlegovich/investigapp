import { ComponentPropsWithoutRef } from 'react'

import { cards } from './constants'
import { cn } from '@/utils'
import Card from '@/components/Card'

export default function SecondarySection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(
                'flex justify-between flex-wrap',
                'gap-x-sm md:gap-x-base lg:gap-x-lg gap-y-base md:gap-y-3xl',
                className
            )}
        >
            {cards.map(({ ...props }, idx) => (
                <Card
                    key={idx}
                    {...props}
                />
            ))}
        </div>
    )
}
