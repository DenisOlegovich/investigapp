import { IDR } from '@/Images'
import Image from '@/components/Image'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

const heading = 'Акция МИР'

export default function Promotion({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-lg md:mb-xl', 'mt-2xs md:mt-0')}>{heading}</h2>
            <Image
                img={IDR}
                alt="акция МИР"
                className="mb-lg"
            />
            <p>
                С 1 сентября 2023 года до 31 декабря 2023 года по карте «Мир» при оплате смартфоном Android в метро,
                МЦК, МЦД и наземном транспорте можно экономить 10 рублей.
                <br />
                <br />
                Сначала спишется полная стоимость поездки, а в течение 30 минут после снятия средств сумма кешбэка
                автоматически вернется на счет.
            </p>
        </div>
    )
}
