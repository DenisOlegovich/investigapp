import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'
import FAQContainer from '@/app/containers/FAQContainer'
import About from './sections/About'

export default function Museum() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{PagesDisplayNames[Pages.museum]}</h1>
                <About />
                <FAQContainer
                    className={styles.faq}
                    params={{ keywords: [] }}
                />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: 'max-w-[755px]',
    title: cn('h1', 'mb-2xl md:mb-3xl'),
    faq: cn('mt-2xl md:mt-3xl'),
}
