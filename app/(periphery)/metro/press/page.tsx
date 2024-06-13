import { cn } from '@/utils'

import ContentLimiter from '@/components/common/ContentLimiter'
import { Pages, PagesDisplayNames } from '@/constants'
import Contacts from './sections/Contacts'
import PressForm from './sections/PressForm'
import Order from './sections/Order'

export default function Press() {
    return (
        <ContentLimiter className={styles.wrapper}>
            <h1 className={cn('h1', 'mb-2xl sm:mb-3xl')}>{PagesDisplayNames[Pages.press]}</h1>
            <div className={styles.grid}>
                <Contacts />
                <PressForm className="row-start-3 md:row-start-[auto]" />
                <Order />
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('body-s md:body', 'pt-[6.4rem] md:pt-[12rem]', 'pb-[3rem] md:pb-[10rem]'),
    grid: cn(
        'grid',
        'grid-cols-1 md:grid-cols-[fit-content(755px)_32%]',
        'gap-x-[5%] lg:gap-x-[10%]',
        'gap-y-lg md:gap-y-3xl'
    ),
}
