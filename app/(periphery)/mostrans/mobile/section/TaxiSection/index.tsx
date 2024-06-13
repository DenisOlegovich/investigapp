import { ComponentPropsWithoutRef } from 'react'

import { cards } from './constants'
import { Pages } from '@/constants'
import { cn } from '@/utils'
import Card from '@/components/Card'
import Link from '@/components/Link'

export default function TaxiSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn('flex flex-wrap gap-x-10 gap-y-[2.4rem]', 'body-s md:body', 'mt-[4rem] md:mt-3xl', className)}
        >
            <div className="xl:w-[421px]">
                <h1 className="h2 md:h1 mb-10">Такси</h1>
                <p className="mr-1">
                    Рекомендуемые агрегаторы такси,
                    <br /> предоставляющие только&ensp;
                    <Link
                        href={Pages.taxi}
                        variant="simple_gray"
                    >
                        легальные машины
                    </Link>
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
