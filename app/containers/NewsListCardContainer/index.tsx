import NewsListCard from '@/components/NewsListCard'
import { NewsListCardContainerProps } from '@/app/containers/NewsListCardContainer/types'
import { news } from '@/app/containers/NewsListCardContainer/constant'

export default function NewsListCardContainer({ params, ...props }: NewsListCardContainerProps) {
    const newsCardData = news

    return (
        <NewsListCard
            data={newsCardData}
            {...props}
        />
    )
}
