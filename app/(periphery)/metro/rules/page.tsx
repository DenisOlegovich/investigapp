import { cn } from '@/utils'
import { Pages, PagesDisplayNames } from '@/constants'
import ContentLimiter from '@/components/common/ContentLimiter'
import MetroRules from './sections/MetroRules'
import MonorialRules from './sections/MonorialRules'
import MCCRules from './sections/MCCRules'

export default function Page() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] md:pb-[10rem]')}>
            <div className={cn('body-s md:body', 'max-w-[755px]')}>
                <h1 className={cn('h1', 'mb-2xl md:mb-3xl')}>{PagesDisplayNames[Pages.metroRules]}</h1>
                <div className={styles.wrapper}>
                    <MetroRules />
                    <MonorialRules />
                    <MCCRules />
                </div>
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-3xl'),
}
