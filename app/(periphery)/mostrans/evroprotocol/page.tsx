import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'

import FAQContainer from '@/app/containers/FAQContainer'
import ContentLimiter from '@/components/common/ContentLimiter'
import Files from './sections/Files'
import How from './sections/How'
import Main from './sections/Main'
import Order from './sections/Order'
import Rules from './sections/Rules'

export default function Evroprotocol() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className="h1">{PagesDisplayNames[Pages.protocol]}</h1>
                <p className={styles.text}>
                    «Европротокол» (Европейский протокол) — это оформление документов о ДТП без вызова сотрудников
                    полиции. Иными словами, это возможность самостоятельно зафиксировать факт ДТП для дальнейшего
                    обращения в страховую компанию за получением возмещения, и оперативно покинуть место ДТП, не
                    создавая заторов на дороге. Такая практика широко применяется во многих странах мира, она ежегодно
                    экономит водителям тысячи часов.
                </p>
                <Main />
                <How />
                <Rules />
                <Order />
                <Files />
                <FAQContainer params={{ keywords: ['main'] }} />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    text: 'lead text-grey-dark',
    wrapper: cn('md:body', 'flex flex-col', 'gap-2xl md:gap-3xl', 'max-w-[755px]'),
}
