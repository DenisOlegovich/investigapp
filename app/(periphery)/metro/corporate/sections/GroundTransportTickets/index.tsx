import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import List from '@/components/List'
import { groundTransportTickets } from './constants'

export default function GroundTransportTickets(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h5 className={cn('body-s_bold md:h5', 'mb-sm')}>Проездные билеты для проезда на наземном транспорте»:</h5>
            <List {...groundTransportTickets} />
            <p className={cn('mt-xs md:mt-base', 'md:text-grey-dark', 'body-xs md:body-s')}>
                Срок действия проездных билетов без лимита поездок начинает исчисляться с момента первого прохода, но не
                позднее 10 суток с момента продажи, включая день продажи.
            </p>
        </div>
    )
}
