import { ComponentPropsWithoutRef } from 'react'

import { controlWorkList } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../styles'

export default function MonitoringWorkCarriers({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <h2 className={styles.title}>Контроль работы перевозчиков</h2>
            <p className={styles.text}>
                Для коммерческих перевозчиков разработан перечень критериев, которым они обязаны соответствовать по
                условиям государственного контракта.
            </p>
            <p className={styles.text}>
                Контроль проводится ежедневно. Это автоматизированная проверка транспортной работы частных перевозчиков.
                Среди основных пунктов:
            </p>
            <List
                {...controlWorkList}
                className="mt-xs md:mt-base"
            />
            <p className={styles.text}>
                Если требования не соблюдены — к перевозчику применяются штрафные санкции. А в случае необходимости
                запрашиваются записи с камер видеонаблюдения, установленных в автобусах.
            </p>
            <p className={styles.text}>
                Строгие требования к обязанностям перевозчиков и возможность введения в случае их нарушения финансовых
                санкций, что позволяет значительно повысить качество обслуживания пассажиров.
            </p>
        </div>
    )
}
