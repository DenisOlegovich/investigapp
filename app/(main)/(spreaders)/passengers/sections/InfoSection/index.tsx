import Card from '@/components/Card'
import HotLinks from '@/components/HotLinks'
import Link from '@/components/Link'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards, questions } from './constants'

const heading = 'Полезная информация'

export default function InfoSection({ className }: ComponentProps<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-[2rem]', 'md:mb-3xl')}>{heading}</h2>
            <div
                className={cn(
                    'xl:h-[42rem]',
                    'grid',
                    'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
                    'md:grid-rows-4 xl:grid-rows-3',
                    'gap-sm md:gap-base lg:gap-lg'
                )}
            >
                {cards.map((props, idx) => (
                    <Card
                        key={idx}
                        {...props}
                    />
                ))}
                <HotLinks
                    className={cn(
                        'grid',
                        'xl:col-start-3',
                        'md:col-span-2 xl:col-span-1',
                        'xl:row-span-1',
                        'md:row-start-4 xl:row-start-1',
                        'gap-[1.6rem]'
                    )}
                    items={questions}
                />
            </div>
        </div>
    )
}
