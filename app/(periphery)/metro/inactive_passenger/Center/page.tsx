import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import MobilityAssistance from './sections/MobilityAssistance'
import StationsInductionSystem from './sections/StationsInductionSystem'
import Gallery from './sections/Gallery'

export default function Page() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <h1 className={styles.title}>{PagesDisplayNames[Pages.metroInactivePassenger]}</h1>
            <div className={styles.content}>
                <MobilityAssistance />
                <StationsInductionSystem />
                <Gallery />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] md:pb-[10rem]', 'flex flex-col'),
    title: cn('h1', 'mb-2xl md:mb-3xl'),
    content: cn('max-w-[75.5rem]', 'flex', 'flex-col', 'gap-2xl md:gap-3xl', 'body-s md:body'),
}
