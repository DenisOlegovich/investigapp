import { ComponentPropsWithoutRef } from 'react'

import { Pages } from '@/constants'
import { cn } from '@/utils'
import Link from '@/components/Link'

import { styles } from '../../styles'

export default function Schedule({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <h2 className={styles.title}>Расписание</h2>
            <p className={styles.text}>
                Коммерческие автобусы строго придерживаются расписания. Время начала и окончания движения индивидуально
                для каждого маршрута.
            </p>
            <Link
                href={Pages.transportSchedule}
                className={cn('inline-block', 'mt-xs md:mt-base')}
            >
                Посмотреть расписание
            </Link>
        </div>
    )
}
