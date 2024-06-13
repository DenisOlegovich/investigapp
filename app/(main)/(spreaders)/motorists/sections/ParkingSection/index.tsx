import Card from '@/components/Card'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards } from './constants'

const heading = 'Парковка'

export default function ParkingSection({ className }: ComponentProps<'div'>) {
    return (
        <div className={cn(className)}>
            <h2 className={cn('h2', 'mb-[2rem] md:mb-[4.8rem]')}>{heading}</h2>
            <div
                className={cn(
                    'h-auto md:min-h-[40.8rem]',
                    'grid',
                    'md:grid-cols-12',
                    'md:grid-rows-[31rem_19rem] lg:grid-rows-3',
                    'gap-sm md:gap-base lg:gap-lg'
                )}
            >
                {cards.map((card, idx) => (
                    <Card
                        key={idx}
                        {...card}
                    />
                ))}
            </div>
        </div>
    )
}
