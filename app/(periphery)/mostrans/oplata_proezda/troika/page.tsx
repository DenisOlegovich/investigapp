import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import MainSection from './sections/MainSection'
import ServiceSection from './sections/ServiceSection'
import MobileTicketSection from './sections/MobileTicketSection'
import ToUpCardSection from './sections/ToUpCardSection'
import QuestionAndAnswerSection from './sections/QuestionAndAnswerSection'

export default function Page() {
    return (
        <ContentLimiter className={cn('text-xl pt-[9.5rem] md:pt-[11rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className="h1">{PagesDisplayNames[Pages.aboutTroika]}</h1>
            <MainSection className="mt-2xl md:mt-3xl" />
            <ServiceSection className="mt-2xl md:mt-3xl" />
            <MobileTicketSection className="mt-2xl md:mt-3xl" />
            <ToUpCardSection className="mt-2xl md:mt-3xl" />
            <QuestionAndAnswerSection className="mt-2xl md:mt-3xl" />
        </ContentLimiter>
    )
}
