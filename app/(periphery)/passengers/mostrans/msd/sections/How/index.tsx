import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { list } from './constants'

import List from '@/components/List'

export default function How(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h2 className={cn('h2', 'mb-xl')}>Как это помогает жителям?</h2>
            <List {...list} />
            <p className="mt-xs sm:mt-base">
                Московский скоростной диаметр соединяет 10 крупнейших вылетных магистралей, связывает районы Москвы и
                области. На 13% снизилась нагрузка на северо-восточные участки МКАД благодаря запуску основного участка
                МСД.
            </p>
        </div>
    )
}
