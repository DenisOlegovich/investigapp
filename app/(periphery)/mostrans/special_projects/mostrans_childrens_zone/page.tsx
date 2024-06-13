import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import About from './sections/About'
import IntegrationFormats from './sections/IntegrationFormats'
import Locations from './sections/Locations'

export default function MostransChildrensZone() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>{PagesDisplayNames[Pages.mostransChildrensZone]}</h1>
                <About className="mb-lg md:mb-xl" />
                <IntegrationFormats className="mb-lg md:mb-xl" />
                <Locations />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('max-w-[75.5rem]', 'body-s md:body'),
    heading: cn('h1', 'mb-2xl md:mb-3xl'),
}
