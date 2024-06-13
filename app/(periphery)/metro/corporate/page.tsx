import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import SingleTicket from './sections/SingleTicket'
import WalletTicket from './sections/WalletTicket'
import GroundTransportTickets from './sections/GroundTransportTickets'
import WebsiteTickets from './sections/WebsiteTickets'
import Warning from './sections/Warning'

export default function Page() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.heading}>{PagesDisplayNames[Pages.metroCorporate]}</h1>
                <p className="mb-2xl md:mb-3xl">
                    ГУП «Московский метрополитен» предоставляет возможность организациям, предприятиям и индивидуальным
                    предпринимателям приобрести проездные билеты для своих сотрудников по безналичному расчету, для чего
                    необходимо заключить договор (контракт).
                </p>
                <h3 className={cn('h3', 'mb-xl')}>
                    Виды билетов, реализуемые по безналичному расчету (тарифы на проезд в городском транспорте с 15
                    октября 2023 года)
                </h3>
                <SingleTicket className="mb-xl" />
                <WalletTicket className="mb-lg" />
                <GroundTransportTickets className="mb-lg" />
                <WebsiteTickets className="mb-xl" />
                <Warning />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] md:pb-[10rem]'),
    content: cn('max-w-[755px]', 'body-s md:body'),
    heading: cn('h1', 'mb-2xl md:mb-3xl'),
}
