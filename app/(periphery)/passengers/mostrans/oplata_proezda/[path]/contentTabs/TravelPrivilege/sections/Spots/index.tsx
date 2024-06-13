import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

const heading = 'Места пополнения'

export default function Spots({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h3 className={styles.title}>{heading}</h3>
            <div className={styles.map} />
        </div>
    )
}

const styles = {
    title: cn('h3', 'mb-xl', 'mt-lg md:mt-3xl'),
    map: cn('w-full', 'h-[40rem] md:h-[60rem]', 'bg-grey-extra-light', 'rounded-[0.8rem]'),
}
