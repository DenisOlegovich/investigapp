import Card from '@/components/Card'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards } from './constants'
import NewsListCardContainer from '@/app/containers/NewsListCardContainer'

export default function MainSection({ className }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'grid',
                'grid-cols-1 md:grid-cols-3 lg:grid-cols-4',
                'md:grid-rows-[210px_245px]',
                'gap-sm md:gap-base lg:gap-lg',
                className
            )}
        >
            <div className={cn(' bg-grey-light', 'w-full', 'h-full', 'md:row-span-2')}>Построение маршрута</div>
            {cards.map(({ ...props }, idx) => (
                <Card
                    key={idx}
                    {...props}
                />
            ))}
            <NewsListCardContainer
                params={{ keywords: ['main'] }}
                className={cn('row-start-5', 'md:row-span-2 md:col-span-3', 'lg:col-start-4')}
            />
        </div>
    )
}
