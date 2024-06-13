import { NewsListCardItemProps } from './types'
import { Pages } from '@/constants'
import { cn } from '@/utils'
import Link from '@/components/Link'

export default function NewsListCardItem({ id, date, description }: NewsListCardItemProps) {
    return (
        <>
            <time className={cn('body-xs md:body-s text-grey-dark', 'mb-[0.2rem]')}>{date}</time>
            <Link
                variant="simple_black"
                href={`${Pages.allNews}/${id}`}
                className={cn('body-s', 'line-clamp-3')}
            >
                {description}
            </Link>
        </>
    )
}
