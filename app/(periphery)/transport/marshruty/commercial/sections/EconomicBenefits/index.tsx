import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'

import { styles } from '../../styles'

export default function EconomicBenefits({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <h2 className={styles.title}>Экономическая выгода</h2>
            <p className={styles.text}>
                Стоимость проезда для пассажиров стала выгоднее – в среднем поездка дешевле на 30-40%, чем тариф
                «маршруток», при этом на любом маршруте действуют специальные условия для льготных категорий граждан.По
                подсчетам экспертов, за 7 лет работы коммерческих перевозчиков по новым стандартам каждый пассажир в
                среднем сэкономил 12,5 тыс. рублей в год.
            </p>
        </div>
    )
}
