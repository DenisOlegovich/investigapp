import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

const heading = 'Прямое пополнение'

export default function PaymentDirectly({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-2xl')}>{heading}</h2>
            <p>
                Оплатить билет «Кошелек» карты «Тройка» можно в кассах и автоматах по продаже билетов ГУП «Московский
                метрополитен», автоматизированных киосках ГУП «Мосгортранс», через агентскую сеть терминалов партнеров:&ensp;
                <b>
                    АО «Центральная ППК», АО «Московско-Тверская ППК», ООО«Аэроэкспресс», «Элекснет», ПАО Сбербанк, Банк
                    ВТБ (ПАО) и другие.
                </b>
                <br />
                <br />
                Возможная сумма оплаты билета от 1 до 10&nbsp;000 рублей.
                <br />
                <br />
                Комиссия за пополнение не взимается.
            </p>
        </div>
    )
}
