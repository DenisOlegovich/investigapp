import List from '@/components/List'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import { list } from './constants'

export default function Main({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <p>
                Благодаря новой тарифной системе, при поездках по Москве пассажиры МЦД ежедневно экономят на проезде до
                50%, а пассажиры, приезжающие из Московской области в границах МЦД, до 75% затрат на проезд. С запуском
                новых диаметров стоимость проезда для пассажиров МЦД-3 и МЦД-4 снизилась до 3-3,5 раз.
            </p>
            <div>
                <p className={cn('h4', 'mb-2xs md:mb-sm')}>На первых двух диаметрах МЦД действуют 3 тарифные зоны:</p>
                <List {...list} />
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-sm md:gap-xl'),
}
