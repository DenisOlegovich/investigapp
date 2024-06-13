import { cn } from '@/utils'
import { Pages, PagesDisplayNames } from '@/constants'

import ContentLimiter from '@/components/common/ContentLimiter'
import OffersForm from './sections/OffersForm'

export default function MSDOffers() {
    return (
        <ContentLimiter>
            <div className={styles.wrapper}>
                <h1 className="h1">{PagesDisplayNames[Pages.msdOffers]}</h1>
                <p>
                    Платность вводится с 1 января 2023 года для защиты жителей Москвы от транзитного движения
                    автомобилей на внутрирегиональной инфраструктуре.
                </p>
                <OffersForm />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn(
        'body-s md:body',
        'max-w-[755px]',
        'flex',
        'flex-col',
        'gap-2xl sm:gap-3xl',
        'pt-[9.6rem] md:pt-[12rem]',
        'pb-[4rem] sm:pb-[7rem] md:pb-[10rem]'
    ),
}
