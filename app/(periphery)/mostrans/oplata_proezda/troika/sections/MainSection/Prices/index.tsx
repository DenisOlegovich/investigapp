import Price from '@/components/Price'
import { ComponentPropsWithoutRef } from 'react'

import { prices } from './constants'
import { cn } from '@/utils'

export default function Prices({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            {prices.map((props, idx) => (
                <Price
                    key={idx}
                    {...props}
                />
            ))}
        </div>
    )
}

const styles = {
    wrapper: cn(
        'flex',
        'flex-row xl:flex-col',
        'gap-2xl md:gap-xl',
        'flex-wrap',
        'xl:items-end',
        'justify-center xl:justify-start',
        'mt-2xl xl:mt-0'
    ),
}
