import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'

import About from './sections/About'
import ListParticipants from './sections/ListParticipants'
import Quote from '@/components/Quote'

import { quotes } from './constants'
import H1 from '@/components/common/typography/H1'
import GridContentLayout from '@/components/common/GridContentLayout'

export default function Sciencesovet() {
    return (
        <ContentLimiter>
            <GridContentLayout>
                <H1>{PagesDisplayNames[Pages.sciencesovet]}</H1>
                <About />
                <div className={cn('flex flex-col gap-[3.2rem]', 'mt-[3.2rem]')}>
                    {quotes.map((item, idx) => (
                        <Quote
                            key={idx}
                            {...item}
                        />
                    ))}
                </div>
                <ListParticipants />
            </GridContentLayout>
        </ContentLimiter>
    )
}
