import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import List from '@/components/List'
import { walletTicket } from './constants'

export default function WalletTicket(props: ComponentPropsWithoutRef<'div'>) {
    return (
        <div {...props}>
            <h4 className={cn('h4', 'mb-lg')}>
                Билет «Кошелек» (для проезда в пределах зачисленной суммы по фиксированным тарифам. Карту можно
                пополнить на сумму до 10 000 рублей).
            </h4>
            <h5 className={cn('body-s_bold md:h5', 'mb-sm')}>Стоимость 1 поездки по билету «Кошелек» составит:</h5>
            <List {...walletTicket} />
        </div>
    )
}
