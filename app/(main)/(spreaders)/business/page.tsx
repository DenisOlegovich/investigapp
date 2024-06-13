import { cn } from '@/utils'

import { Pages, PagesDisplayNames } from '@/constants'

import ContentLimiter from '@/components/common/ContentLimiter'
import MainSection from '@/app/(main)/(spreaders)/business/sections/MainSection'
import LogisticSection from '@/app/(main)/(spreaders)/business/sections/LogisticSection'
import TaxiSection from '@/app/(main)/(spreaders)/business/sections/TaxiSection'
import ScootersSection from '@/app/(main)/(spreaders)/business/sections/ScootersSection'
import FAQContainer from '@/app/containers/FAQContainer'

export default function Page() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className={cn('h1')}>{PagesDisplayNames[Pages.business]}</h1>
            <MainSection className="mt-[2rem] md:mt-3xl" />
            <LogisticSection className="mt-2xl md:mt-3xl" />
            <TaxiSection className="mt-2xl md:mt-3xl" />
            <ScootersSection className="mt-2xl md:mt-3xl" />
            <FAQContainer
                className={cn('mt-2xl md:mt-3xl')}
                params={{ keywords: ['main'] }}
            />
        </ContentLimiter>
    )
}
