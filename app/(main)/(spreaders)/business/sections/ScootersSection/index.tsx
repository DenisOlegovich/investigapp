import HotLinks from '@/components/HotLinks'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { questions } from './constants'

const heading = 'Самокаты'

export default function ScootersSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-[2rem] md:mb-3xl')}>{heading}</h2>
            <HotLinks
                className="max-w-[42rem]"
                items={questions}
            />
        </div>
    )
}
