import FAQContainer from '@/app/containers/FAQContainer'
import { cn } from '@/utils'
import Attention from './sections/Attention'
import Main from './sections/Main'
import Prices from './sections/Prices'
import Rates from './sections/Rates'

const heading = '«Единый», проездные «ТАТ» и зоны\u00A0Б'

export default function EdinyiTatAndZoneB() {
    return (
        <div className={styles.wrapper}>
            <h2 className={cn('h2', 'mb-lg md:mb-3xl')}>{heading}</h2>
            <div className={styles.grid}>
                <Main />
                <Prices />
                <Rates />
                <Attention />
            </div>

            <FAQContainer
                params={{ keywords: ['main'] }}
                className={cn('mt-lg md:mt-3xl')}
            />
        </div>
    )
}

const styles = {
    wrapper: cn('body-s md:body'),
    grid: cn(
        'grid',
        'grid-cols-1 md:grid-cols-[fit-content(755px)_32%]',
        'gap-x-[5%] lg:gap-x-[10%]',
        'gap-y-lg md:gap-y-3xl'
    ),
}
