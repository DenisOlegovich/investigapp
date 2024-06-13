import { cn } from '@/utils'
import { list } from './constants'

import List from '@/components/List'

export default function Main() {
    return (
        <div>
            <p className="mb-xl">
                В связи с открытием новых станций Люблинско-Дмитровской линии метро изменится работа ряда маршрутов
                наземного городского транспорта. Их сделают удобнее для ежедневных поездок пассажиров.
            </p>
            <h4 className={cn('h4', 'mb-lg')}>
                Что изменится возле открытых станций Люблинско-Дмитровской линии метро
            </h4>
            <List {...list} />
        </div>
    )
}
