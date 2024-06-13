import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import MainSection from './section/MainSection'
import SecondarySection from './section/SecondarySection'
import TaxiSection from './section/TaxiSection'
import CarsharingSection from './section/CarsharingSection'

export default function Page() {
    return (
        <ContentLimiter className={cn('body-s md:body pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className="h1">{PagesDisplayNames[Pages.mobile]}</h1>
            <MainSection className="mt-2xl md:mt-4xl" />
            <SecondarySection className="mt-[1.6rem] md:mt-3xl" />
            <TaxiSection />
            <CarsharingSection />
        </ContentLimiter>
    )
}
