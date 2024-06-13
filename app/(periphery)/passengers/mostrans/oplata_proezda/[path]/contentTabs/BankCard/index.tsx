import FAQContainer from '@/app/containers/FAQContainer'
import { cn } from '@/utils'
import Payment from './sections/Payment'
import Prices from './sections/Prices'
import Promotion from './sections/Promotion'

export default function BankCard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <Payment />
                <Prices className={cn('md:row-span-2')} />
                <Promotion />
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
        'grid-cols-1 md:grid-cols-[fit-content(755px)_auto]',
        'gap-x-[5%] lg:gap-x-[10%]',
        'gap-y-lg md:gap-y-3xl'
    ),
}
