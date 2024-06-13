import { troikaCard } from '@/Images'
import FAQContainer from '@/app/containers/FAQContainer'
import Image from '@/components/Image'
import { Anchors } from '@/constants/anchors'
import { cn } from '@/utils'
import Apps from './sections/Apps'
import Booths from './sections/Booths'
import How from './sections/How'
import PaymentCard from './sections/PaymentCard'
import Spots from './sections/Spots'
import Where from './sections/Where'

export default function Troyka() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <Image
                    img={troikaCard}
                    alt="troika"
                />
                <PaymentCard className={cn('md:row-span-2')} />
                <Where />
                <How />
                <Apps className={cn('md:col-start-2')} />
                <Booths className={cn('md:col-start-1')} />
            </div>
            <Spots id={Anchors.topUpLocations} />
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
