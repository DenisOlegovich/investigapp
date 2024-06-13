import { ComponentPropsWithoutRef } from 'react'

import { newStandartList } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../styles'

export default function NewStandarts({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', className)}>
            <h2 className={styles.title}>Москва перешла на новый стандарт работы наземного городского транспорта</h2>
            <p>
                С 2015 года Москва перешла на новый стандарт работы наземного городского транспорта — работу по
                государственным контрактам коммерческих перевозчиков с городом.
            </p>
            <p className={styles.text}>
                Инновационный проект Департамента Транспорта подразумевает совершенно иной подход к использованию
                транспортных ресурсов.
            </p>
            <p className={styles.text}>
                В настоящее время в Москве работают 4 коммерческих компаний-перевозчиков, которые обслуживают 193
                маршрута наземного городского пассажирского транспорта:
            </p>
            <List
                {...newStandartList}
                className="mt-xs md:mt-base"
            />
        </div>
    )
}
