import { ComponentPropsWithoutRef } from 'react'

import { serviceCenterEntrance, serviceCenterKidsArea, serviceCenterQueue } from '@/Images'
import { generalCenterServices, parkingServices, troikaServices, workstations } from './constants'
import { cn } from '@/utils'
import List from '@/components/List'
import Image from '@/components/Image'

export default function ServiceCenters({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <div>
                <h2 className={cn('h2', 'mb-lg md:mb-xl')}>Сервисные центры</h2>
                <p className="mb-xs md:mb-base">
                    Сервисные центры «Московский&nbsp;транспорт» работают на&nbsp;станциях Большой кольцевой
                    линии&nbsp;(БКЛ):
                </p>
                <List {...workstations} />
            </div>

            <div className={cn('flex', 'flex-col', 'gap-sm md:gap-base')}>
                <h4 className="h4">График работы:</h4>
                <p>Понедельник&nbsp;–&nbsp;воскресенье с&nbsp;8:00&nbsp;до&nbsp;20:00 (без&nbsp;перерывов).</p>
            </div>

            <div className={cn('flex', 'flex-col', 'gap-sm md:gap-base')}>
                <h4 className="h4">Выходные дни:</h4>
                <p>1 января, 7 января, 23 февраля, 8 марта, 1 мая, 9 мая, 12 июня и 4 ноября.</p>
            </div>

            <div className={cn('flex', 'flex-col', styles.gap)}>
                <p>
                    В них можно решить проблемы с картой «Тройка», возникшие при оплате проезда в метро, на МЦК или в
                    наземном транспорте, в том числе:
                </p>
                <List {...troikaServices} />
            </div>

            <div className={cn('flex', 'flex-col', styles.gap)}>
                <p>
                    В сервис-центрах на станциях БКЛ «Кунцевская», «Проспект&nbsp;Вернадского» и&nbsp;«Текстильщики»
                    можно получить услуги, связанные с&nbsp;работой московского парковочного пространства:
                </p>
                <List {...parkingServices} />
                <p>
                    Также обращайтесь в&nbsp;сервисный центр «Московский&nbsp;транспорт» по адресу:
                    ул.&nbsp;Старая&nbsp;Басманная, д.&nbsp;20, корп.&nbsp;1.
                </p>
                <p>
                    Проезд до станций метро <b>«Бауманская», «Курская» или «Красные Ворота».</b>
                </p>
            </div>

            <Image
                img={serviceCenterEntrance}
                className={styles.image}
            />

            <div className={cn('flex', 'flex-col', 'gap-sm md:gap-base')}>
                <h4 className="h4">График работы:</h4>
                <p>Понедельник&nbsp;–&nbsp;воскресенье с&nbsp;8:00&nbsp;до&nbsp;20:00 (без&nbsp;перерывов).</p>
            </div>

            <div className={cn('flex', 'flex-col', 'gap-sm md:gap-base')}>
                <h4 className="h4">Выходные дни:</h4>
                <p>1 января, 7 января, 23 февраля, 8 марта, 1 мая, 9 мая, 12 июня и 4 ноября.</p>
            </div>

            <div className={cn('flex', 'flex-col', styles.gap)}>
                <h4 className="h4">В сервисном центре можно:</h4>
                <List {...generalCenterServices} />
                <p>
                    Также вас проконсультируют по вопросам, регламентируемым постановлением Правительства Москвы от
                    22.08.2011 № 379 — ПП «Об ограничении движения грузового автотранспорта в городе Москве и признании
                    утратившими силу отдельных правовых актов Правительства Москвы»,{' '}
                    <b>в соответствии с графиком работы ГКУ ЦОДД:</b> понедельник — четверг с 8:00 до 17:00, пятница с
                    8:00 до 15:45, суббота и воскресенье — выходные дни.
                </p>
                <div className={cn('grid grid-cols-2', 'gap-lg')}>
                    <Image
                        img={serviceCenterQueue}
                        className={styles.image}
                    />
                    <Image
                        img={serviceCenterKidsArea}
                        className={styles.image}
                    />
                </div>
                <p>
                    В сервисном центре организованы комфортные зоны самообслуживания и ожидания, а для посетителей с
                    маленькими детьми — детские уголки.
                </p>
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex flex-col', 'gap-sm md:gap-lg'),
    gap: 'gap-xs md:gap-base',
    image: cn('h-[17.2rem] md:h-[45rem]', 'object-cover', 'rounded-[0.8rem]'),
}
