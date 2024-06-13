import { Pages, PagesDisplayNames, ExternalLinks } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Link from '@/components/Link'
import H1 from '@/components/common/typography/H1'

import { styles } from './styles'

export default function Page() {
    return (
        <ContentLimiter>
            <div className={cn('body-s md:body', 'max-w-[755px]')}>
                <H1 className={cn('h1', 'mb-xl md:mb-3xl')}>{PagesDisplayNames[Pages.zima]}</H1>
                <p>
                    Пригородные поезда переходят на зимний график движения. С 29 октября 2017 года, в связи с сезонным
                    изменением пассажиропотока, ОАО «Центральная пригородная пассажирская компания» ввело в действие
                    зимнее расписание движения электропоездов на Московской железной дороге. Изменения коснулись
                    поездов, которые были дополнительно назначены в период дачного сезона. Подробно ознакомиться с
                    изменениями в расписании можно на официальном сайте ОАО «Центральная пригородная пассажирская
                    компания» -&ensp;
                    <Link
                        href={ExternalLinks.cppk}
                        variant="default"
                        type="external"
                    >
                        central-ppk.ru
                    </Link>
                    и информационных стендах пригородных касс.
                </p>
                <p className={cn(styles.text)}>
                    С 10 декабря 2017 года вступает в силу новое расписание пригородных поездов на 2017-2018 годы.
                    Основные изменения в новом графике на 2017-2018 годы коснутся увеличения размеров движения поездов в
                    часы пик на направлениях Московской железной дороги и Ленинградском направлении Октябрьской железной
                    дороги, а также назначения дополнительных поездов «Экспресс».
                </p>
                <p className={cn(styles.text)}>
                    Для пассажиров поездов «Аэроэкспресс» Шереметьевского направления будет отменен дневной перерыв в
                    движении поездов и будут введены дополнительные рейсы в 12:00 из аэропорта «Шереметьево» и в 13:00 с
                    Белорусского вокзала. На Домодедовском направлении дополнительные рейсы поездов «Аэроэкспресс» будут
                    осуществляться по выходным и праздничным дням в 12:30 как с Павелецкого вокзала, так и в обратном
                    направлении.
                </p>
                <p className={cn(styles.text)}>
                    Подробно ознакомиться с новым расписанием можно на официальных сайтах ОАО «Центральная пригородная
                    пассажирская компания» -&ensp;
                    <Link
                        href={ExternalLinks.cppk}
                        variant="default"
                        type="external"
                    >
                        central-ppk.ru
                    </Link>
                    , АО «Московско-Тверская пригородная пассажирская компания» -&ensp;
                    <Link
                        href={ExternalLinks.mtppk}
                        variant="default"
                        type="external"
                    >
                        mtppk.ru
                    </Link>
                    , ООО «Аэроэкспресс» -&ensp;
                    <Link
                        href={ExternalLinks.aeroexpress}
                        variant="default"
                        type="external"
                    >
                        aeroexpress.ru
                    </Link>
                    и информационных стендах пригородных касс.
                </p>
            </div>
        </ContentLimiter>
    )
}
