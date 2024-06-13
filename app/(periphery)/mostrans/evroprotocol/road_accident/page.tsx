import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'
import Example from './sections/Example'
import Order from './sections/Order'

export default function RoadAccident() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <h1 className="h1">{PagesDisplayNames[Pages.accidentProtocol]}</h1>
            <p className={styles.text}>
                При оформлении полиса ОСАГО страховая компания выдает вам бланки извещения о ДТП — это и есть
                Европротокол, его и надо заполнить.
            </p>
            <Example className={styles.example} />
            <Order className={styles.order} />
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn(
        'md:body',
        'grid',
        'grid-cols-1 md:grid-cols-[fit-content(755px)_auto]',
        'gap-x-[5%] lg:gap-x-[10%]',
        'gap-y-2xl md:gap-y-3xl',
        'pt-[9.6rem] md:pt-[12rem]',
        'pb-[3rem] md:pb-[10rem]'
    ),
    text: cn('lead text-grey-dark', 'col-start-1'),
    example: cn('min-w-[230px]', 'md:row-start-3', 'md:col-start-2'),
    order: 'md:col-start-1',
}
