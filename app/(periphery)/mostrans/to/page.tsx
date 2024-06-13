import { Pages, PagesDisplayNames, Tels } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Link from '@/components/Link'
import Sitizens from './sections/Sitizens'
import Operators from './sections/Operators'

export default function Page() {
    return (
        <ContentLimiter className={cn('text-xl pt-[9.5rem] md:pt-[11rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={cn('body-s md:body', 'max-w-[755px]')}>
                <h1 className={cn('h1', 'mb-xl md:mb-3xl')}>{PagesDisplayNames[Pages.to]}</h1>

                <p className={cn('mb-2xl md:mb-3xl', 'text-lg text-grey-dark md:text-4xl')}>
                    По всем вопросам, связанным с прохождением технического осмотра транспортных средств, принадлежащих
                    льготным категориям граждан, обращаться по телефонам:&ensp;
                    <Link
                        href={`tel:${Tels.techInspection1}`}
                        variant="default"
                    >
                        {Tels.techInspection1}
                    </Link>
                    ,&ensp;
                    <Link
                        href={`tel:${Tels.techInspection2}`}
                        variant="default"
                    >
                        {Tels.techInspection2}
                    </Link>
                    &ensp;(доб. 22415, 22411). График приема звонков: понедельник-четверг 8:00-17:00, пятница
                    8:00-15:45.
                </p>

                <Sitizens />

                <Operators />
            </div>
        </ContentLimiter>
    )
}
