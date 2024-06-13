import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'
import Commission from './sections/Commission'
import Files from './sections/Files'
import Schemes from './sections/Schemes'

export default function KomissiaPerekrytia() {
    return (
        <ContentLimiter className={cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]')}>
            <div className={styles.wrapper}>
                <h1 className="h1">{PagesDisplayNames[Pages.komissiaPerekrytia]}</h1>
                <Commission />
                <Schemes />
                <Files />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('md:body', 'flex flex-col', 'gap-2xl md:gap-3xl', 'max-w-[755px]'),
}
