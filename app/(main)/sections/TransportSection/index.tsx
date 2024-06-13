import Card from '@/components/Card'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards } from './constants'

export default function TransportSection({ className }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'grid',
                'gap-sm md:gap-base lg:gap-lg',
                'grid-cols-1 md:grid-cols-6',
                ' md:grid-rows-2',
                'mb-sm md:mb-base lg:mb-lg',
                className
            )}
        >
            {cards.map(({ ...props }, idx) => (
                <Card
                    key={idx}
                    type="link"
                    {...props}
                />
            ))}
        </div>
    )
}
