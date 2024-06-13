import { cn } from '@/utils'
import ContentLimiter from '@/components/common/ContentLimiter'
import NewsListContainer from '@/app/containers/NewsListContainer'
import Main from './sections/Main'
import Cards from './sections/Cards'
import GridContentLayout from '@/components/common/GridContentLayout'

export default function Page() {
    return (
        <>
            <Main className="mb-2xl sm:mb-3xl" />
            <ContentLimiter>
                <Cards className="mb-2xl sm:mb-3xl" />
                <GridContentLayout>
                    <p className={cn('mb-2xl sm:mb-3xl')}>
                        Если вы владелец бизнеса — отправьте свои предложения по мерам, которые помогут компаниям
                        транспортной отрасли в рамках санкционного воздействия. Все идеи будут рассмотрены и вынесены на
                        Штаб поддержки бизнеса после проработки.
                    </p>
                </GridContentLayout>
                <NewsListContainer params={{ keywords: ['helping_businesses_and_citizens'] }} />
            </ContentLimiter>
        </>
    )
}
