import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import HistoricalStages from '@/app/(periphery)/metro/escalatorgallery/sections/HistoricalStages'
import Reconstruction from '@/app/(periphery)/metro/escalatorgallery/sections/Reconstruction'
import TransportEffects from '@/app/(periphery)/metro/escalatorgallery/sections/TransportEffects'

export default function Page() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>{PagesDisplayNames[Pages.metroEscalatorgallery]}</h1>
                <HistoricalStages />
                <Reconstruction />
                <TransportEffects />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('flex flex-col', 'pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] md:pb-[10rem]'),
    content: cn('flex', 'flex-col', 'max-w-[75.5rem]', 'body-s md:body', 'gap-2xl md:gap-3xl'),
    title: cn('h1', 'whitespace-pre-line'),
}
