import { cn } from '@/utils'

import { NewsListCardProps } from './types'

import { Pages } from '@/constants'

import Card from '@/components/Card'
import If from '@/components/If'
import Link from '@/components/Link'
import NoData from '@/components/noData'
import NewsListCardItem from './NewsListCardItem'

const defaultNewsListCardTitle = 'Новости'

export default function NewsListCard({ title, data, ...props }: NewsListCardProps) {
    return (
        <Card
            type="box"
            anatomy={{ container: cn('gap-[2.4rem] p-[2rem]', 'md:w-full lg:w-auto', 'bg-white') }}
            title={
                <Link
                    variant="simple_black"
                    href={`${Pages.allNews}/#all`}
                    className="md:body_bold h-3"
                >
                    {title ?? defaultNewsListCardTitle}
                </Link>
            }
            body={
                <If
                    condition={Boolean(data?.length)}
                    Else={<NoData />}
                >
                    <div className={cn('flex flex-col md:flex-row lg:flex-col', 'gap-[2.4rem]')}>
                        {data.map((item, idx) => (
                            <div key={idx}>
                                <NewsListCardItem {...item} />
                            </div>
                        ))}
                    </div>
                </If>
            }
            extra={
                <Link
                    variant="simple_black"
                    href={`${Pages.allNews}/#all`}
                    className="body-s"
                >
                    Все новости
                </Link>
            }
            {...props}
        />
    )
}
