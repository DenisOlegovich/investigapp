'use client'

import { Fragment } from 'react'

import { NewsListProps } from './types'
import { cn } from '@/utils'
import Button from '@/components/Forms/Button'
import NewsListItem from './NewsListItem'

const defaultNewsListTitle = 'Новости'

export default function NewsList({ title, data, onShowMore, className = '', ...props }: NewsListProps) {
    return (
        <div
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <h2
                className="h2"
                id="news"
            >
                {title ?? defaultNewsListTitle}
            </h2>
            <div className={styles.container}>
                {data.map((item, idx) => (
                    <Fragment key={item.id}>
                        <NewsListItem
                            {...item}
                            isMain={!idx}
                        />
                        <hr />
                    </Fragment>
                ))}
            </div>
            <Button
                variant="text"
                className={styles.button}
                onClick={onShowMore}
            >
                Показать еще
            </Button>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xl', 'max-w-[755px]'),
    container: cn('flex', 'flex-col', 'gap-sm md:gap-lg'),
    button: cn('w-fit p-0 md:p-0', 'text-[2.2rem] md:text-[3rem]'),
}
