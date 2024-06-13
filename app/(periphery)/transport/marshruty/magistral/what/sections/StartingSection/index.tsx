import { ComponentPropsWithoutRef } from 'react'

import { list } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'
import Image from '@/components/Image'
import { magistralBusStation } from '@/Images'

import { styles } from '../../styles'

export default function StartingSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', 'xl:max-w-[755px]', className)}>
            <h3 className={cn('h3', 'mb-sm md:mb-lg')}>С чего всё началось</h3>
            <p>
                С 2016 года в Москве работает сеть наземных маршрутов «Магистраль». Основной её принцип — интервальное
                движение автобусов, поэтому наземный транспорт ходит так же регулярно, как и поезда метро.
            </p>
            <p className={styles.text}>
                Новая сеть поэтапно вводилась в Центральном округе Москвы, чтобы соединить центр с другими районами
                прямыми и быстрыми маршрутами. Для этого изменили 49 маршрутов, организовали выделенные полосы,
                построили комфортные пересадочные узлы, улучшили расписание движения и обновили инфраструктуру.
            </p>
            <p className={styles.text}>
                Чтобы пассажиры могли определять время прибытия своего автобуса, маршруты разделили на три категории.
            </p>
            <List
                {...list}
                className="mt-xs md:mt-base"
            />
            <Image
                img={magistralBusStation}
                alt="Остановка"
                className={cn(
                    'mt-[1.6rem] md:mt-[2.4rem]',
                    'rounded-[0.8rem]',
                    'object-cover',
                    'md:h-[410px] xl:h-[450px]'
                )}
            />
            <p className={styles.text}>
                В результате изменений пользоваться общественным транспортом в центре стало удобнее, а общее количество
                пассажиров выросло на 40%. Там, где раньше приходилось делать несколько пересадок на метро, теперь можно
                напрямую добраться на автобусе или трамвае. Транспорт стал меньше зависеть от пробок.
            </p>
        </div>
    )
}
