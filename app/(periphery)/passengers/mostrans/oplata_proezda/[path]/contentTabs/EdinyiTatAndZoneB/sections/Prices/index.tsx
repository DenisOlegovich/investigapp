import Price from '@/components/Price'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { prices } from './constants'

export default function Prices({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            {prices.map((props, idx) => (
                <Price
                    key={idx}
                    className={styles.item}
                    {...props}
                />
            ))}
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-row md:flex-col', 'gap-lg md:gap-xl', 'flex-wrap'),
    item: cn('max-w-[13rem] md:max-w-none'),
}
