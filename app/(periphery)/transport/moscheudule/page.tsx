import { Pages, PagesDisplayNames } from '@/constants'
import ContentLimiter from '@/components/common/ContentLimiter'
import ScheuduleSearchForm from './ScheuduleSearchForm'

export default function MoscheudulePage() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <h1 className={styles.title}>{PagesDisplayNames[Pages.moscheudule]}</h1>

            <ScheuduleSearchForm className={styles.form} />
        </ContentLimiter>
    )
}

const styles = {
    wrapper: 'pb-16 pt-[9.6rem] sm:pt-[12rem]',
    title: 'h1 max-w-[75.5rem] sm:text-8xl',
    form: 'pt-16 sm:max-w-[28.8rem] sm:pt-[4.8rem]',
}
