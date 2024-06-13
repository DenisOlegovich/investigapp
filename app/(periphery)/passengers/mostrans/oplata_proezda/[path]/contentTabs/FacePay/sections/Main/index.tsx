import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

const heading = 'Биометрия'

export default function Main({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <h2 className={cn('h2', 'mb-lg md:mb-xl')}>{heading}</h2>
            <p>
                В октябре 2021 года в метро заработал сервис для оплаты проезда с помощью распознавания лица. Оплатить
                проезд бесконтактно можно на всех станциях метро, МЦК, речном транспорте и ж/д направлениях
                Аэроэкспресса.
            </p>
        </div>
    )
}
