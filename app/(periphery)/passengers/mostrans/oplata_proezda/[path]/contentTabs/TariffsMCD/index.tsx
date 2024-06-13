import FAQContainer from '@/app/containers/FAQContainer'
import { cn } from '@/utils'
import Fourth from './sections/Fourth'
import Main from './sections/Main'
import Prices from './sections/Prices'

const heading = 'Тарифы МЦД'

export default function TariffsMCD() {
    return (
        <div className={styles.wrapper}>
            <h2 className={cn('h2', 'mb-lg md:mb-3xl')}>{heading}</h2>
            <div className={styles.flex}>
                <div className={cn('flex', 'flex-col', 'gap-lg md:gap-3xl', 'max-w-[755px]')}>
                    <Main />
                    <Fourth />
                </div>
                <Prices className={cn('hidden md:flex', 'min-w-[32%]')} />
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
    flex: cn('flex', 'gap-x-[5%] lg:gap-x-[10%]'),
}
