import { ComponentPropsWithoutRef } from 'react'

import { list, heading } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../../styles'

export default function HowGet({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <h2 className={styles.title}>{heading}</h2>
            <List
                {...list}
                className="mb-xs md:mb-base"
            />
            <p>
                За пользование картой взимается залог в размере 80 рублей, который можно вернуть при возврате исправной
                карты в кассу в течение 5 лет с момента получения.
            </p>
            <p className={cn('body-s_bold md:body_bold', styles.text)}>
                Срок действия карты — Карта «Тройка» вечная. А вот деньги, которые на ней лежат, можно использовать в
                течение пяти лет с момента последнего прохода через турникет или пополнения.
            </p>
        </div>
    )
}
