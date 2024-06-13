import Link from '@/components/Link'
import Tariffs from '@/components/Tariffs'
import { ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'
import Cards from '../../../../components/Cards'
import { cards, tariffs } from './constants'

export default function Main({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn(styles.wrapper, className)}>
            <div className={cn('flex', 'flex-col', 'gap-sm md:gap-xl')}>
                <Cards cards={cards} />
                <p>
                    Карта москвича — материальный носитель информации о держателе карты, предназначенная для обеспечения
                    доступа держателя социальной карты к получению мер социальной поддержки, государственной социальной
                    помощи и льгот и др.
                    <br />
                    <br />
                    Карта москвича, выдаваемая гражданам льготных категорий (пенсионерам, ветеранам труда, инвалидам I,
                    II, III групп, членам многодетных семей и др.) обеспечивает им право бесплатного проезда на
                    общественном транспорте города Москвы и право бесплатного проезда на пригородном железнодорожном
                    транспорте.Карта москвича, выдаваемая обучающимся, обеспечивает им проезд со скидкой.
                    <br />
                    <br />
                    Для обучающихся оформляются льготные проездные билеты без лимита поездок сроком 30 или 90 дней для
                    проезда на наземном городском пассажирском транспорте либо на Московском метрополитене, МЦК, МЦД
                    зона «Центральная» и монорельсе.
                    <br />
                    <br />
                    Отдельным категориям граждан (пенсионеры, ветераны труда, инвалиды I, II,III групп, члены
                    многодетных семей и др., полный список можно найти&ensp;
                    <Link
                        href={ExternalLinks.freeTicketsMCD}
                        type="external"
                    >
                        здесь
                    </Link>
                    ) предоставляется право бесплатного проезда на любом виде общественного транспорта города Москвы
                    транспорта (кроме такси) и право бесплатного проезда на железнодорожном транспорте пригородного
                    сообщения.
                </p>
            </div>
            <div className={cn('flex', 'flex-col', 'gap-lg md:gap-xl')}>
                {tariffs.map((props, idx) => (
                    <Tariffs
                        key={idx}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl'),
}
