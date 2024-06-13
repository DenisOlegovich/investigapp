import TextAlert from '@/components/TextAlert'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import Cards from '../../../../components/Cards'
import { alert, cards } from './constants'

export default function Main({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <Cards cards={cards} />
            <TextAlert {...alert} />
            <p>
                Проездными билетами «Единый» можно оплатить проезд на Московском метрополитене, Московском центральном
                кольце, монорельсе и наземном городском пассажирском транспорте на территории всей Москвы. Безлимитным
                проездным «ТАТ» — на наземном транспорте «старой» Москвы, Новомосковском АО, Троицком АО и
                Зеленоградском АО, а месячным проездным билетом «Автобус» стоимостью 2500 ₽ можно оплатить проезд между
                зонами А и Б (Москвой и Зеленоградом).
                <br />
                <br />
                Купить проездные билеты можно в кассах и билетных автоматах.
            </p>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-lg md:gap-xl'),
}
