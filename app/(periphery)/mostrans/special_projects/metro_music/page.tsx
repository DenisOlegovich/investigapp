import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import CommonInfoSection from './sections/CommonInfoSection'
import PlaceSection from './sections/PlaceSection'
import RequirementsSection from './sections/RequirementsSection'

export default function Page() {
    return (
        <ContentLimiter className={cn('text-xl pt-[9.5rem] md:pt-[11rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className="h1">{PagesDisplayNames[Pages.metroMusic]}</h1>

            <CommonInfoSection />

            <PlaceSection />

            <RequirementsSection />
        </ContentLimiter>
    )
}
