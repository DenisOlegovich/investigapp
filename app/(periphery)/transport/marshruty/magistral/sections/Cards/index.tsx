import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { cards } from './constants'
import Card from '@/components/Card'

export default function Cards({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            {cards.map(({ className, anatomy: { title: titleClassName, ...anatomy } = {}, ...props }, idx) => (
                <Card
                    key={idx}
                    className={cn('h-[190px] md:h-[220px]', 'text-[1.8rem]', className)}
                    anatomy={{
                        title: cn('text-[1.8rem] md:text-[2.2rem]', titleClassName),
                        ...anatomy,
                    }}
                    {...props}
                />
            ))}
        </div>
    )
}

const styles = {
    wrapper: cn('grid', 'sm:grid-cols-2 lg:grid-cols-4', 'gap-sm md:gap-lg'),
}
