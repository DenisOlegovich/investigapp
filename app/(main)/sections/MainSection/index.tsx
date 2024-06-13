import Card from '@/components/Card'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards, deliveryCard } from './constants'
import NewsListCardContainer from '@/app/containers/NewsListCardContainer'

export default function MainSection({ className }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'grid',
                'grid-cols-1 md:grid-cols-3 lg:grid-cols-4',
                'auto-rows-auto',
                'gap-sm md:gap-base lg:gap-lg',
                'mb-sm md:mb-base lg:mb-lg',
                className
            )}
        >
            <Card {...deliveryCard} />
            <div
                className={cn(
                    'col-span-1 col-start-1 row-span-1 row-start-2 bg-grey-light w-full h-full',
                    'md:row-span-2 lg:row-span-2'
                )}
            >
                Построение маршрута
            </div>
            {cards.map(({ ...props }, idx) => (
                <Card
                    key={idx}
                    type="link"
                    {...props}
                />
            ))}
            <NewsListCardContainer
                params={{ keywords: ['main'] }}
                className={cn(
                    'bg-white',
                    'md:col-span-3',
                    'row-start-6 md:row-start-4',
                    'md:col-start-1 lg:col-start-4',
                    'md:row-span-1 lg:row-span-2 '
                )}
            />
        </div>
    )
}
