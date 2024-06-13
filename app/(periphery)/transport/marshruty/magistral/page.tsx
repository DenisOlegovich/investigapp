import ContentLimiter from '@/components/common/ContentLimiter'
import NewsListContainer from '@/app/containers/NewsListContainer'
import Cards from './sections/Cards'
import Main from './sections/Main'

export default function Magistral() {
    return (
        <div className="pb-2xl sm:pb-[7rem] lg:pb-[10rem]">
            <Main className="mb-3xl sm:mb-lg" />
            <ContentLimiter>
                <Cards className="mb-3xl sm:mb-2xl" />
                <NewsListContainer params={{ keywords: ['magistral'] }} />
            </ContentLimiter>
        </div>
    )
}
