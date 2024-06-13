import { Pages, PagesDisplayNames } from '@/constants'
import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'
import Files from './sections/Files'
import Main from './sections/Main'
import Order from './sections/Order'
import Ways from './sections/Ways'

export default function Oplata() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <h1 className="h1">{PagesDisplayNames[Pages.payFine]}</h1>
            <Main />
            <Ways />
            <Order />
            <Files />
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn(
        'md:body',
        'pt-[9.6rem] md:pt-[12rem]',
        'pb-[3rem] md:pb-[10rem]',
        'flex flex-col',
        'gap-xl md:gap-3xl'
    ),
}
