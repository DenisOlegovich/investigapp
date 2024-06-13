import List from '@/components/List'
import ContentLimiter from '@/components/common/ContentLimiter'
import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import { list } from './constants'

export default function TicketRules() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <h1 className={cn('h1', 'mb-lg md:mb-3xl')}>
                {PagesDisplayNames[Pages.usingTravelTickets]}
            </h1>
            <List {...list} />
        </ContentLimiter>
    )
}
