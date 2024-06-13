import List from '@/components/List'
import { cn } from '@/utils'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { heading, list } from './constants'

export default function Spots(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h3 className={styles.title}>{heading}</h3>
            <div className={styles.map} />
            <p className={cn('mt-sm md:mt-lg', 'mb-xs md:mb-base')}>
                Адреса сувенирных магазинов ГУП «Московский метрополитен»:
            </p>
            <List {...list} />
        </div>
    )
}

const styles = {
    title: cn('h3', 'mb-sm md:mb-xl', 'mt-lg md:mt-3xl'),
    map: cn('w-full', 'h-[40rem] md:h-[60rem]', 'bg-grey-extra-light', 'rounded-[0.8rem]'),
}
