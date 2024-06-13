import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import List from '@/components/List'
import { list } from './constants'

export default function Page() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>{PagesDisplayNames[Pages.metroInactivePassengerRules]}</h1>
                <List {...list} />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] md:pb-[10rem]', 'flex flex-col'),
    title: cn('h1', 'mb-2xl md:mb-3xl', 'whitespace-pre-line'),
    content: cn('max-w-[75.5rem]', 'body-s md:body'),
}
