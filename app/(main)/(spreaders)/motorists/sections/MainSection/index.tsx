import Card from '@/components/Card'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards } from './constants'
import RoutesCard from '@/components/RoutesCard'
import NewsListCardContainer from '@/app/containers/NewsListCardContainer'

export default function MainSection({ className }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'grid',
                'grid-cols-1 md:grid-cols-12',
                'lg:grid-rows-[48rem]',
                'gap-sm md:gap-base lg:gap-lg',
                className
            )}
        >
            <RoutesCard
                className={cn('w-full', 'min-h-[35rem]', 'md:col-span-6 lg:col-span-4', 'bg-grey-light', 'text-black')}
            />
            {cards.map((card, idx) => (
                <Card
                    key={idx}
                    {...card}
                />
            ))}
            <NewsListCardContainer
                params={{ keywords: ['main'] }}
                className={cn('col-span-1 md:col-span-12 lg:col-span-3', 'col-start-1 lg:col-start-10')}
            />
        </div>
    )
}
