import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'
import What from './sections/What'
import Links from './sections/Links'
import How from './sections/How'
import Pay from './sections/Pay'
import Search from './sections/Search'
import { Pages, PagesDisplayNames } from '@/constants'
import Suggestions from './sections/Suggestions'

export default function MSD() {
    return (
        <ContentLimiter>
            <div className={styles.wrapper}>
                <h1 className="h1">{PagesDisplayNames[Pages.msd]}</h1>
                <What className="md:col-start-1" />
                <Links className={cn('sm:row-start-5 md:row-start-2', 'md:col-start-2')} />
                <How />
                <Suggestions className={cn('hidden sm:flex', 'md:col-start-1')} />
                <Pay className={cn('md:col-start-1')} />
                <Search
                    className={cn('md:col-start-1')}
                    id="form-msd"
                />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn(
        'body-s md:body',
        'grid',
        'grid-cols-1 md:grid-cols-[fit-content(755px)_auto]',
        'gap-x-[5%] lg:gap-x-[10%]',
        'gap-y-2xl sm:gap-y-3xl',
        'pt-[9.6rem] md:pt-[12rem]',
        'pb-[4rem] sm:pb-[7rem] md:pb-[10rem]'
    ),
}
