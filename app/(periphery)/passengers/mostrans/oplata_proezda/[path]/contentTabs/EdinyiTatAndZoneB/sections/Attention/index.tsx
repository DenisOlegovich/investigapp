import ClockStrokeIcon from '@/components/icons/ClockStrokeIcon'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

export default function Attention({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={className}>
            <ClockStrokeIcon className={cn('w-[7.1rem]', 'h-[7.1rem]', 'text-grey', 'mb-xs')} />
            <p className="text-[1.6rem]">
                Билет «Единый» с лимитом на 1 и 2 поездки действует 5 дней с момента продажи (включая день продажи).
                Билет «Единый» на 60 поездок действует 45 дней с момента продажи (включая день продажи) и реализуется
                только на карте «Тройка».
            </p>
        </div>
    )
}
