import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

const heading = 'Оплата телефоном'

export default function PaymentByPhone({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-xl')}>{heading}</h2>
            <p>
                Если телефон поддерживает технологию NFC, к нему можно подключить сервис «Мобильный билет». Для этого
                нужна NFC сим-карта и приложение «Мобильный билет». Сервис работает только для абонентов Tele2.
                <br />
                <br />
                В настоящий момент функционал работает для абонентов Теле2, сим-карты которых действительны до
                01.05.2025.
                <br />
                <br />
                При оплате «Мобильным билетом» стоимость поездок такая же, как при использовании «Кошелька» на карте
                «Тройка».
            </p>
        </div>
    )
}
