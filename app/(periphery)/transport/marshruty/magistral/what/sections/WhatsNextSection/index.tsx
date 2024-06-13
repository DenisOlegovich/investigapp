import { ComponentPropsWithoutRef } from 'react'

import { list } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'

import { styles } from '../../styles'

export default function WhatsNextSection({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s md:body', 'xl:max-w-[755px]', className)}>
            <h3 className={styles.title}>Что дальше</h3>
            <p className={styles.text}>
                В 2021 году мы пересмотрели результаты работы «Магистрали» в центре и обновили маршруты в ЦАО и ЮАО.
            </p>
            <p className={styles.text}>
                «Магистраль» поэтапно придёт в остальные районы города, чтобы пассажиры могли быстро доехать на работу и
                домой, в торговый центр, школу, поликлинику по всей Москве.
            </p>
            <p className={styles.text}>
                Мы спросили у москвичей, как бы они сами улучшили наземный транспорт. Вот что они ответили:
            </p>
            <List
                {...list}
                className="mt-xs md:mt-base"
            />
            <p className={styles.text}>
                Для таких изменений и улучшений необходима большая аналитическая работа. Нам нужно проанализировать все
                маршруты, понять, какие из них работают хорошо, а какие — не очень, выяснить, где есть проблемы, и
                предложить решения.
            </p>
            <p className={styles.text}>Эта работа ведется в том числе с учётом обратной связи от жителей.</p>
        </div>
    )
}
