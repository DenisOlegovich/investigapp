import { ComponentPropsWithoutRef } from 'react'

import { Pages } from '@/constants'
import { cn } from '@/utils'
import TextAlert from '@/components/TextAlert'
import Link from '@/components/Link'

import { styles } from '../../styles'

export default function Description({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', 'sm:col-span-2', 'md:max-w-[755px]', 'mb-[3.2rem]', className)}>
            <p>
                В Москве работают 16 ночных маршрутов: два кольцевых маршрута по Садовому кольцу «Б внешний» и
                «внутренний», а также 14 радиальных маршрутов от Китай-города.
            </p>
            <p className={styles.text}>
                Интервал движения по Садовому кольцу, а также от Китай-города до Сокола и Таганской — 15 минут, в другие
                районы — 30 минут.
            </p>
            <p className={styles.text}>Стоимость проезда не отличается от тарифов в дневное время суток.</p>
            <p className={styles.text}>
                На маршрутах действуют обычные городские билеты, включая карту «Тройка» и бесконтактные банковские карты
            </p>
            <TextAlert
                description={
                    <>
                        Узнать подробнее про оплату проезда в Москве можно по&ensp;
                        <Link
                            type="new-window"
                            href={Pages.oplataProezda}
                        >
                            ссылке
                        </Link>
                    </>
                }
                className="mt-xl"
            />
        </div>
    )
}
