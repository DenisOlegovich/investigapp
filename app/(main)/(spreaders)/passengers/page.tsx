import { cn } from '@/utils'

import { Pages, PagesDisplayNames } from '@/constants'

import ContentLimiter from '@/components/common/ContentLimiter'
import MainSection from '@/app/(main)/(spreaders)/passengers/sections/MainSection'
import TripsAroundMoscowSection from '@/app/(main)/(spreaders)/passengers/sections/TripsAroundMoscowSection'
import TripsAroundMoscowAreaSection from '@/app/(main)/(spreaders)/passengers/sections/TripsAroundMoscowAreaSection'
import InfoSection from '@/app/(main)/(spreaders)/passengers/sections/InfoSection'
import FAQContainer from '@/app/containers/FAQContainer'

export default function Page() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className={cn('h1')}>{PagesDisplayNames[Pages.passengers]}</h1>
            <MainSection className="mt-[2rem] md:mt-3xl" />
            <TripsAroundMoscowSection className="mt-2xl md:mt-3xl" />
            <TripsAroundMoscowAreaSection className="mt-2xl md:mt-3xl" />
            <InfoSection className="mt-2xl md:mt-3xl" />
            <FAQContainer
                className={cn('mt-2xl md:mt-3xl')}
                params={{ keywords: [] }}
            />
        </ContentLimiter>
    )
}
