import { Pages, PagesDisplayNames } from '@/constants'
import { PageProps } from '@/types'
import { cn } from '@/utils'
import Tabs from '@/components/Tabs'
import ContentLimiter from '@/components/common/ContentLimiter'
import AdvantageCard from './components/AdvantageCard'
import { advantageCards, tabs } from './constants'

export async function generateStaticParams() {
    return tabs.map(({ path }) => ({ path }))
}

type Params = { path: string }

export default function Page({ params }: PageProps<Params>) {
    return (
        <ContentLimiter className={styles.wrapper}>
            <h1 className={styles.heading}>{PagesDisplayNames[Pages.developmentGroundTransport]}</h1>
            <div className={styles.grid}>
                <div>
                    <p className={styles.description}>
                        Скоро в Москве будет запущено 16 новых автобусных маршрутов. 3 маршрута в Старой Москве и 13 в
                        Новой.
                    </p>
                    <div className={styles.cardsMobile}>
                        {advantageCards.map(({ ...card }, idx) => (
                            <AdvantageCard
                                key={idx}
                                {...card}
                            />
                        ))}
                    </div>
                    <Tabs
                        tabs={tabs}
                        defaultTab={params?.path}
                    />
                </div>
                <div className={styles.cardsDesktop}>
                    {advantageCards.map(({ ...card }, idx) => (
                        <AdvantageCard
                            key={idx}
                            {...card}
                        />
                    ))}
                </div>
            </div>
        </ContentLimiter>
    )
}

const styles = {
    wrapper: cn('pt-[9.6rem] md:pt-[12rem]', 'pb-[4rem] md:pb-[10rem]'),
    heading: cn('h1', 'mb-2xl md:mb-3xl', 'max-w-[75.5rem]'),
    grid: cn('grid', 'grid-cols-1 xl:grid-cols-[75.5rem_31rem]', 'justify-between'),
    description: cn('lead', 'mb-2xl md:mb-3xl', 'text-grey-dark'),
    cardsMobile: cn('grid xl:hidden', 'grid-cols-2', 'gap-x-sm md:gap-x-lg', 'gap-y-lg', 'mb-2xl md:mb-3xl'),
    cardsDesktop: cn('hidden xl:flex', 'flex-col', 'gap-[6.5rem]'),
}
