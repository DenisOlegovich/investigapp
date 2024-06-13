import ContentLimiter from '@/components/common/ContentLimiter'
import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import HowGetTickets from './sections/HowGetTickets'
import Main from './sections/Main'
import Prices from './sections/Prices'
import Tariffs from './sections/Rates'

export default function ForBusiness() {
    return (
        <ContentLimiter className={cn('pt-[6.4rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className={cn('h1', 'mt-[0.8rem] md:mt-0')}>{PagesDisplayNames[Pages.farePaymentBusiness]}</h1>
                <Main className="col-start-1" />
                <Prices className="md:row-span-2 md:mt-[46rem]" />
                <Tariffs />
                <HowGetTickets className="col-start-1" />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn(
        'body-s md:body',
        'grid',
        // 'grid-cols-1 md:grid-cols-[auto_32%]',
        'grid-cols-1 md:grid-cols-[fit-content(755px)_auto]',
        'gap-x-[5%] lg:gap-x-[10%]',
        'gap-y-xl md:gap-y-3xl'
    ),
}
