import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import Link from '@/components/Link'
import StartingSection from './sections/StartingSection'
import WhatsNextSection from './sections/WhatsNextSection'
import OtherSection from './sections/OtherSection'
import StatisticsSection from './sections/StatisticsSection'

export default function Page() {
    return (
        <ContentLimiter
            className={cn('text-xl pt-[6rem] md:pt-[9rem] xl:pt-[8rem]', 'pb-[3rem] md:pb-[10rem]', 'body-s sm:body')}
        >
            <Link
                href={Pages.magistral}
                variant="simple_gray"
                className="body-xs md:body-s mb-[2.5rem] xl:mb-[3.3rem] inline-block"
            >
                ← Магистраль
            </Link>
            <h1 className={cn('h1', 'mb-[3.2rem] md:mb-[4.8rem]')}>{PagesDisplayNames[Pages.magistralWhat]}</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3">
                <StartingSection className={cn('xl:col-span-2', 'order-1', 'xl:row-span-3')} />
                <WhatsNextSection className={cn('xl:col-span-2', 'order-3 xl:order-5')} />
                <OtherSection className="order-4 xl:order-2 xl:row-span-1" />
                <StatisticsSection className="order-2 xl:order-3" />
            </div>
        </ContentLimiter>
    )
}
