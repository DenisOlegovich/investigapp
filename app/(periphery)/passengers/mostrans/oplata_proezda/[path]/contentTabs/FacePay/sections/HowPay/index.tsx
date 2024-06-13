import List from '@/components/List'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { heading, list } from './constants'

export default function HowPay({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-lg md:mb-xl')}>{heading}</h2>
            <List {...list} />
            <p className={cn('mt-xs md:mt-base')}>
                Действует бесплатная пересадка на МЦК и МЦД. Для этого при проходе на станции нужно использовать ту же
                банковскую карту, с которой была оплачена поездка по биометрии.
            </p>
        </div>
    )
}
