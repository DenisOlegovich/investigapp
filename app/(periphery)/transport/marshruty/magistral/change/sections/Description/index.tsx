import { ComponentPropsWithoutRef } from 'react'

import { busTravelIntervals, routeDescriptions, routeNetworkBenefits, taskList } from './constants'
import { bolshoyTheatreStation } from '@/Images'
import { cn } from '@/utils'
import List from '@/components/List'
import Image from '@/components/Image'

export default function Description({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, styles.typography, className)}
            {...props}
        >
            <div>
                <h3 className={styles.title}>Маршруты</h3>
                {routeDescriptions.map((text, idx) => (
                    <p
                        key={idx}
                        className={styles.text}
                    >
                        {text}
                    </p>
                ))}
            </div>
            <div>
                <h3 className={styles.title}>Что мы сделаем ещё</h3>
                <List
                    {...taskList}
                    anatomy={{ list: styles.typography }}
                />
                <Image
                    img={bolshoyTheatreStation}
                    alt="Остановка"
                    className={styles.image}
                />
                <p className={styles.signatureImg}>Планируется постепенная замена остановочных комплексов на новые.</p>
            </div>
            <div>
                <h3 className={styles.title}>Интервалы движения автобусов</h3>
                <p className={styles.text}>
                    Благодаря «Магистрали» автобусы ходят предсказуемо по всей Москве.В каждом районе появится несколько
                    видов маршрутов с разным интервалом движения.
                </p>
                <List
                    {...busTravelIntervals}
                    anatomy={{ list: styles.typography }}
                />
                <p className={styles.text}>
                    *Интервал движения в течение дня по будням, может быть увеличен поздно вечером и по выходным.
                </p>
            </div>
            <div>
                <h3 className={styles.title}>Карта новой маршрутной сети</h3>
                {routeNetworkBenefits.map((text, idx) => (
                    <p
                        key={idx}
                        className={styles.text}
                    >
                        {text}
                    </p>
                ))}
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl'),
    title: cn('h3', 'mb-sm md:mb-lg'),
    text: cn('mb-xs md:mb-base last:mb-0'),
    image: cn('mt-sm md:mt-lg', 'rounded-[0.8rem]', 'object-cover', 'h-[17.2rem] sm:h-[41rem] xl:h-[45rem]'),
    signatureImg: cn('signature', 'mt-base'),
    typography: cn('body-s sm:body'),
}
