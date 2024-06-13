import Card from '@/components/Card'
import HotLinks from '@/components/HotLinks'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards, questions } from './constants'

const heading = 'Штрафы и эвакуация'

export default function FinesAndEvacuationSection({ className }: ComponentProps<'div'>) {
    return (
        <div className={cn(className)}>
            <h2 className={cn('h2', 'mb-[2rem] md:mb-[4.8rem]')}>{heading}</h2>
            <div className={cn('lg:min-h-[40.8rem]', 'grid', 'md:grid-cols-6', 'gap-sm md:gap-base lg:gap-lg')}>
                {cards.map((card, idx) => (
                    <Card
                        key={idx}
                        {...card}
                    />
                ))}
                <HotLinks
                    className={cn('md:col-span-6 lg:col-span-2', 'mt-0 md:mt-[2.4rem] lg:mt-0')}
                    items={questions}
                />
            </div>
        </div>
    )
}
