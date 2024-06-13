import { cn } from '@/utils'

import { Pages, PagesDisplayNames } from '@/constants'
import ContentLimiter from '@/components/common/ContentLimiter'
import MainSection from './sections/MainSection'
import ParkingSection from './sections/ParkingSection'
import FinesAndEvacuationSection from './sections/FinesAndEvacuationSection'
import InfoSection from './sections/InfoSection'
import FAQContainer from '@/app/containers/FAQContainer'

export default function Page() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className={cn('h1')}>{PagesDisplayNames[Pages.motorists]}</h1>
            <MainSection className="mt-[2rem] md:mt-3xl" />
            <ParkingSection className="mt-2xl md:mt-3xl" />
            <FinesAndEvacuationSection className="mt-2xl md:mt-3xl" />
            <InfoSection className="mt-2xl md:mt-3xl" />
            <FAQContainer
                className="mt-2xl md:mt-3xl"
                params={{ keywords: [] }}
            />
        </ContentLimiter>
    )
}
