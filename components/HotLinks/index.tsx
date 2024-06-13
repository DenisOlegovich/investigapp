import Link, { ILinkProps } from '@/components/Link'
import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

type HotLinksAnatomy = 'title' | 'items' | 'link'
export interface HotLinksProps extends ComponentPropsWithoutRef<'div'> {
    title?: string
    items: ILinkProps[]
    anatomy?: Partial<Record<HotLinksAnatomy, string>>
}

export default function HotLinks({
    title,
    items,
    className,
    anatomy: { title: titleClassName = '', items: itemsClassName = '', link: linkClassName = '' } = {},
}: HotLinksProps) {
    return (
        <div className={className}>
            {title && <p className={cn(styles.title, titleClassName)}>{title}</p>}
            <div className={cn(styles.items, itemsClassName)}>
                {items.map(({ title, ...props }, idx) => (
                    <Link
                        key={idx}
                        variant="simple_black"
                        className={cn(styles.item, linkClassName)}
                        {...props}
                    >
                        {title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

const styles = {
    title: cn('h4', 'text-[2.2rem]', 'mb-lg'),
    items: cn('flex', 'flex-col', 'gap-[1.8rem] md:gap-[1.6rem]'),
    item: cn('text-lg md:text-xl', 'font-medium'),
}
