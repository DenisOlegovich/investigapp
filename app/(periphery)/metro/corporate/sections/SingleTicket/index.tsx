import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import List from '@/components/List'
import { singleTicket, singleTicketSecond } from './constants'

export default function SingleTicket(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h4 className={styles.title}>
                Билет «Единый» (для проезда на метро, монорельсе, МЦК, МЦД зона «Центральная», наземном транспорте и
                внутреннем водном транспорте на территории г. Москвы*):
            </h4>
            <List
                {...singleTicket}
                className="mb-xl"
            />
            <h4 className={styles.title}>
                Билет «Единый» (для проезда на метро, монорельсе, МЦК, МЦД зоны «Центральная», «Пригород», наземном
                транспорте и внутреннем водном транспорте на территории г. Москвы*):
            </h4>
            <List {...singleTicketSecond} />
            <p className="mt-xs md:mt-base">
                * Внутренний водный транспорт включен в тариф Единый проездной билет без лимита поездок на 90 дней и 365
                дней.
            </p>
            <p className={cn('mt-xs md:mt-base', ' md:text-grey-dark', 'body-xs md:body-s')}>
                Срок действия Единых проездных билетов без лимита поездок начинает исчисляться с момента первого
                прохода, но не позднее 10 суток с момента продажи, включая день продажи.
            </p>
        </div>
    )
}

const styles = {
    title: cn('h4', 'mb-lg'),
}
