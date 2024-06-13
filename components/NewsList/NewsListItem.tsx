import { NewsListItemProps } from './types'
import Image from '@/components/Image'
import { cn } from '@/utils'
import Link from '@/components/Link'
import { Pages } from '@/constants'

export default function NewsListItem({ id, isMain, date, title, img }: NewsListItemProps) {
    return (
        <article
            className={cn(styles.wrapper, {
                'md:flex-row-reverse': isMain,
            })}
        >
            <div
                className={cn(styles.container, {
                    'md:flex-col md:gap-xs': isMain,
                })}
            >
                <div
                    className={cn(styles.date, {
                        'md:text-[2rem]': isMain,
                    })}
                >
                    {date ?? '—'}
                </div>
                <div
                    className={cn(styles.title, {
                        'md:text-[3rem]': isMain,
                    })}
                >
                    {title}
                </div>
            </div>
            <div
                className={cn(styles.image, {
                    'md:h-[230px]': isMain,
                    'md:w-[40%]': isMain,
                })}
            >
                {img && (
                    <Image
                        img={img}
                        alt="test"
                        className="size-full"
                    />
                )}
            </div>

            <Link
                href={`${Pages.allNews}/${id}`}
                className={styles.link}
            />
        </article>
    )
}

const styles = {
    wrapper: cn('relative flex', 'gap-sm md:gap-lg'),
    container: cn('flex', 'gap-xs md:gap-lg', 'flex-col md:flex-row', 'flex-1'),
    date: cn('min-w-[8.6rem]', 'text-[1.4rem] md:text-[1.6rem]', 'text-grey-dark'),
    title: cn('text-[1.6rem] md:text-[2rem]'),
    image: cn(
        'h-[85px] md:h-[110px]',
        'w-[136px] md:w-[200px]',
        'object-cover',
        'rounded-[0.8rem]',
        'bg-grey-extra-light',
        'overflow-hidden'
    ),
    link: 'z-1 absolute inset-0',
}
