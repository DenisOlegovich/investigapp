import Card from '@/components/Card'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cardBlocks } from './constants'

const heading = 'Поездки по Москве'

export default function TripsAroundMoscowSection({ className }: ComponentProps<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-[2rem]', 'md:mb-3xl')}>{heading}</h2>
            <div
                className={cn(
                    'h-auto md:h-[30rem] xl:h-[40.8rem]',
                    'flex',
                    'flex-col',
                    'md:flex-row',
                    'gap-sm md:gap-base lg:gap-lg'
                )}
            >
                {cardBlocks.first.map(({ className, ...props }, idx) => (
                    <Card
                        key={idx}
                        className={cn('flex-1', className)}
                        {...props}
                    />
                ))}
            </div>
            <div
                className={cn(
                    'mt-sm md:mt-base lg:mt-lg',
                    'h-auto xl:h-[19.2rem]',
                    'grid',
                    'lg:grid-cols-2 xl:grid-cols-[20rem_20rem_1fr_1fr_1fr_1fr]',
                    'lg:grid-rows-2 xl:grid-rows-1',
                    'gap-sm md:gap-base lg:gap-lg'
                )}
            >
                {cardBlocks.second.map(({ className, ...props }, idx) => (
                    <Card
                        key={idx}
                        className={cn('min-h-[14.8rem]', className)}
                        {...props}
                    />
                ))}
                <div className={cn('xl:col-span-2 xl:col-start-3', 'flex')}>
                    {cardBlocks.third.map(({ className, ...props }, idx) => (
                        <Card
                            key={idx}
                            className={cn('text-black', 'bg-carsharing-orange', 'flex-1', 'min-w-0', className)}
                            {...props}
                        />
                    ))}
                </div>
                {cardBlocks.fourth.map((props, idx) => (
                    <Card
                        key={idx}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}
