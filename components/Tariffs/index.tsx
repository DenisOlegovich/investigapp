import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

type TariffsAnatomy = 'title' | 'itemsWrapper' | 'item'

export type Item = {
    title: string
    subtitle: string
}

export interface TariffsProps extends ComponentPropsWithoutRef<'div'> {
    title?: string
    items: Item[]
    anatomy?: Partial<Record<TariffsAnatomy, string>>
}

export default function Tariffs({
    title,
    items,
    className,
    anatomy: {
        title: titleCustomProps = '',
        itemsWrapper: itemsWrapperCustomProps = '',
        item: itemCustomProps = '',
    } = {},
}: TariffsProps) {
    return (
        <div className={cn(styles.wrapper, className)}>
            {title && <p className={cn(styles.title, titleCustomProps)}>{title}</p>}
            <div className={cn(styles.itemsWrapper, itemsWrapperCustomProps)}>
                {items.map(({ title, subtitle }, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            styles.item,
                            {
                                'bg-[#F9FAFA] md:bg-transparent': idx % 2 === 0,
                            },
                            itemCustomProps
                        )}
                    >
                        <p className={cn('body-xs', 'leading-none', 'text-grey-dark')}>{subtitle}</p>
                        <p className="h3">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-sm md:gap-lg'),
    title: cn(
        'font-semibold md:font-medium',
        'border-b',
        'border-grey-light',
        'pb-[0.4rem] md:pb-[1.2rem]',
        'text-[1.6rem] md:text-[2rem]'
    ),
    item: cn(
        'flex',
        'flex-row md:flex-col',
        'justify-between',
        'rounded-[0.4rem]',
        'px-[1.2rem] md:px-0',
        'py-[0.6rem] md:py-0',
        'gap-xs'
    ),
    itemsWrapper: cn('flex', 'flex-col md:flex-row', 'gap-[0.4rem] md:gap-lg'),
}
