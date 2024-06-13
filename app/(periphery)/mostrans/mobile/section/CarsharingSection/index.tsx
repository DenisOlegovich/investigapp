import { ComponentPropsWithoutRef } from 'react'

import { cards } from './constants'
import { cn } from '@/utils'
import Card from '@/components/Card'

export default function CarsharingSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn('flex flex-wrap gap-x-10 gap-y-[2.4rem]', 'body-s md:body', 'mt-[4rem] md:mt-3xl', className)}
        >
            <div className="xl:w-[421px]">
                <h1 className="h2 md:h1 mb-10">Каршеринг</h1>
                <p>
                    Компании-участники проекта
                    <br /> «Московский каршеринг»
                </p>
            </div>
            <div
                className={cn(
                    'flex flex-wrap',
                    'w-full xl:max-w-[700px]',
                    'gap-x-sm gap-y-sm lg:gap-y-lg md:gap-x-xl',
                    'sm:p-1'
                )}
            >
                {cards.map(({ ...props }, idx) => (
                    <Card
                        key={idx}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}
