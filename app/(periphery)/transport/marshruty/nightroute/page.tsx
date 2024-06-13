import { ExternalLinks, Pages, PagesDisplayNames, Tels } from '@/constants'
import { list } from './constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import List from '@/components/List'
import Link from '@/components/Link'
import Description from './sections/Description'
import Schema from './sections/Schema'

import { styles } from './styles'

export default function Page() {
    return (
        <ContentLimiter className={cn('pt-[9.5rem] md:pt-[11rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className={cn('h1', 'mb-2xl md:mb-3xl')}>{PagesDisplayNames[Pages.nightRoutes]}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <Description />
                <Schema />
            </div>
            <div className={cn('w-full sm:w-2/3', 'max-w-[755px]', 'body-s md:body')}>
                <p className={styles.text}>
                    Вот несколько фактов, которые вам помогут пользоваться ночными маршрутами:
                </p>
                <List
                    {...list}
                    className="mt-xs md:mt-base"
                />
                <p className={styles.text}>
                    Подробное расписание можно узнать по телефону контакт-центра&ensp;
                    <Link href={Tels.mosmetroContactCenterMobile}>{Tels.mosmetroContactCenterMobile}</Link>, в
                    приложении&ensp;
                    <Link
                        href={ExternalLinks.moscowTransportApp2}
                        type="external"
                    >
                        «Московский транспорт»
                    </Link>
                    &ensp;или на сайте&ensp;
                    <Link
                        href={ExternalLinks.mosgortransNight}
                        type="external"
                    >
                        mosgortrans.ru
                    </Link>
                    .
                </p>
            </div>
        </ContentLimiter>
    )
}
