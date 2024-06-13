import { ComponentPropsWithoutRef } from 'react'

import { StatisticProps, statistics } from './constants'
import { cn } from '@/utils'

import { styles } from '../../styles'

export default function StatisticsSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.statistics, className)}>
            {statistics.map((props: StatisticProps, idx) => (
                <div
                    key={idx}
                    className="max-w-[332px]"
                >
                    <p className={cn('factorid md:factorid-s', 'mb-[1.2rem]')}>{props.title}</p>
                    <p className="body-s">{props.description}</p>
                </div>
            ))}
        </div>
    )
}
