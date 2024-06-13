import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Meetings from './sections/Meetings'
import Contacts from './sections/Contacts'

export default function Page() {
    return (
        <ContentLimiter className={cn('text-xl pt-[9.5rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className="h1">{PagesDisplayNames[Pages.meetingsCoordinator]}</h1>
            <div className={cn('mt-2xl md:mt-3xl', 'grid grid-cols-1 xl:grid-cols-3')}>
                <Meetings />
                <Contacts />
            </div>
        </ContentLimiter>
    )
}
