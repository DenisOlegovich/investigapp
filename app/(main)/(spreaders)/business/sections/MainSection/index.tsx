import Card from '@/components/Card'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { cards } from './constants'
import NewsListCardContainer from '@/app/containers/NewsListCardContainer'

// app / main / containers

export default function MainSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(
                'grid',
                'grid-cols-1 md:grid-cols-3 lg:grid-cols-4',
                'md:grid-rows-3 lg:grid-rows-2',
                'gap-sm md:gap-base lg:gap-lg',
                className
            )}
        >
            <div className={cn('bg-grey-light', 'w-full', 'h-full', 'md:row-span-2', 'md:row-start-1')}>
                Построение маршрута
            </div>
            {cards.map(({ ...props }, idx) => (
                <Card
                    key={idx}
                    {...props}
                />
            ))}
            <NewsListCardContainer
                params={{ keywords: ['main'] }}
                className={cn(
                    'md:col-span-3',
                    'row-start-5 md:row-start-3',
                    'md:col-start-1 lg:col-start-4',
                    'md:row-span-1 lg:row-span-2 '
                )}
            />
        </div>
    )
}
