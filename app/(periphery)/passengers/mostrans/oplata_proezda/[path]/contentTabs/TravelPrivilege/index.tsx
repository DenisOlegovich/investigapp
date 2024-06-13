import FAQContainer from '@/app/containers/FAQContainer'
import { cn } from '@/utils'
import CheckCard from './sections/CheckCard'
import How from './sections/How'
import Main from './sections/Main'
import Spots from './sections/Spots'
import Where from './sections/Where'

export const heading = 'Проезд по карте москвича'

export default function TravelPrivilege() {
    return (
        <div className={styles.wrapper}>
            <h2 className={cn('h2', 'mb-xl md:mb-3xl')}>{heading}</h2>
            <div className={styles.grid}>
                <Main />
                <Where className="md:col-start-1" />
                <CheckCard className={cn('md:row-span-2', 'mt-[1rem] md:mt-0')} />
                <How />
            </div>
            <Spots />
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
