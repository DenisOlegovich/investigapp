import Card from '@/components/Card'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards } from './constants'

const heading = 'Поездки по Подмосковью'

export default function TripsAroundMoscowAreaSection({ className }: ComponentProps<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-[2rem]', 'md:mb-3xl')}>{heading}</h2>
            <div
                className={cn(
                    'lg:h-[40rem]',
                    'grid',
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
                    'md:grid-rows-3 lg:grid-rows-2',
                    'gap-sm md:gap-base lg:gap-lg'
                )}
            >
                {cards.map((props, idx) => (
                    <Card
                        key={idx}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}
