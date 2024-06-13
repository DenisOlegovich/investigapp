'use client'

import NewsList from '@/components/NewsList'
import { NewsListContainerProps } from '@/app/containers/NewsListContainer/types'
import { news } from '@/app/containers/NewsListContainer/constant'

export default function NewsListCardContainer({ params, ...props }: NewsListContainerProps) {
    const newsCardData = news

    // TO DO: скорее всего, тут должен быть запрос на бэк для подгрузки порции новостей
    const showMore = () => console.log('click show more button')

    return (
        <NewsList
            data={newsCardData}
            onShowMore={showMore}
            {...props}
        />
    )
}
