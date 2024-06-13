import Card from '@/components/Card'
import HotLinks from '@/components/HotLinks'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { cards, questions } from './constants'

const heading = 'Такси'

export default function TaxiSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-[2rem] md:my-3xl')}>{heading}</h2>
            <div className={cn('flex', 'flex-col lg:flex-row', 'gap-sm md:gap-base lg:gap-lg')}>
                {cards.map((card, idx) => (
                    <Card
                        key={idx}
                        {...card}
                    />
                ))}
                <HotLinks
                    className="max-w-[42rem]"
                    title="Разрешение на работу такси"
                    items={questions}
                />
            </div>
        </div>
    )
}
