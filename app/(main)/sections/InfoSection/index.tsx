import Card from '@/components/Card'
import HotLinks from '@/components/HotLinks'
import Link from '@/components/Link'
import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { cards, questions } from './constants'

export default function InfoSection({ className }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'grid',
                'gap-sm md:gap-base lg:gap-lg',
                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                'md:grid-rows-3 lg:grid-rows-2',
                'mb-sm md:mb-base lg:mb-lg',
                className
            )}
        >
            {cards.map(({ ...props }, idx) => (
                <Card
                    key={idx}
                    type="link"
                    {...props}
                />
            ))}
            <HotLinks
                className="row-span-2"
                items={questions}
            />
        </div>
    )
}
