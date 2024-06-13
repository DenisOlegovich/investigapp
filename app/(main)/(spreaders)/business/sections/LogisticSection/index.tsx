import Card from '@/components/Card'
import HotLinks from '@/components/HotLinks'
import Link from '@/components/Link'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { cards, questions } from './constants'

const heading = 'Грузовая логистика'

export default function LogisticSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-[2rem]', 'md:my-3xl')}>{heading}</h2>
            <div
                className={cn(
                    'grid',
                    'grid-cols-1 md:grid-cols-[31rem_1fr] xl:grid-cols-[31rem_1fr_31rem]',
                    'md:grid-rows-2',
                    'gap-sm md:gap-base lg:gap-lg',
                    'md:h-[47.9rem]'
                )}
            >
                {cards.map((card, idx) => (
                    <Card
                        key={idx}
                        {...card}
                    />
                ))}
                {/* <Card {...cards.first} /> */}
                {/* <div className={cn('bg-grey-light', 'xl:row-span-2', 'h-[31.2rem] md:h-auto')}> */}
                {/*    Карта грузового каркаса */}
                {/* </div> */}
                {/* <Card {...cards.second} /> */}
                <HotLinks items={questions} />
            </div>
        </div>
    )
}
