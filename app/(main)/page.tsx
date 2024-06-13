import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'

import MainSection from './sections/MainSection'
import RoutesSection from './sections/RoutesSection'
import PaymentSection from './sections/PaymentSection'
import TransportSection from './sections/TransportSection'
import InfoSection from './sections/InfoSection'
import FAQContainer from '@/app/containers/FAQContainer'
import Header from '@/components/common/Header'

export default function Page() {
    return (
        <>
            <Header type="main" />
            <ContentLimiter className={cn('pb-[2.6rem] md:pb-[6.4rem] lg:pb-[10rem]')}>
                <MainSection />
                <RoutesSection />
                <PaymentSection />
                <TransportSection />
                <InfoSection />
                <FAQContainer params={{ keywords: ['main'] }} />
            </ContentLimiter>
        </>
    )
}
