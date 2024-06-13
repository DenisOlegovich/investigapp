import FAQContainer from '@/app/containers/FAQContainer'
import { cn } from '@/utils'
import PaymentByPhone from './sections/PaymentByPhone'
import PaymentByRing from './sections/PaymentByRing'
import PaymentDirectly from './sections/PaymentDirectly'
import PriceAdnDescription from './sections/PriceAndDescription'

export default function Others() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <PaymentByRing />
                <PaymentByPhone className={cn('md:col-start-1')} />
                <PaymentDirectly className={cn('md:col-start-1')} />
                <PriceAdnDescription
                    className={cn('md:row-span-3', 'md:col-start-2', 'md:row-start-1', 'hidden md:block')}
                />
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
        'gap-y-2xl md:gap-y-3xl'
    ),
}
