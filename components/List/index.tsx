import { ComponentPropsWithoutRef, ReactNode } from 'react'

import If from '@/components/If'
import { renderListItem } from './utils'

export type ListAnatomy = 'list' | 'item' | 'title'

export interface BaseItemProps {
    title?: ReactNode
    variant?: 'ordered' | 'unordered'
    items?: BaseItemProps[]
    /* Наличие отступа в основном или дочерних списках. По дефолту true */
    withChildSpacing?: boolean
    anatomy?: Partial<Record<ListAnatomy, string>>
}

export type ListProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> &
    Omit<BaseItemProps, 'title'> & {
        /** Расстояние от маркера элемента списка до его содержимого,
         * по дефолту (как и в глобальном css) 0.8 */
        markerSpacing?: number
    }

export default function List({
    variant = 'ordered',
    items = [],
    className,
    withChildSpacing = true,
    markerSpacing = 0.8,
    anatomy = {},
    ...props
}: ListProps) {
    const ListComponent = variant === 'ordered' ? 'ol' : 'ul'

    return (
        <div
            className={className}
            {...props}
        >
            <If condition={items.length}>
                <ListComponent className={anatomy.list}>
                    {items.map((item, idx) =>
                        renderListItem({
                            anatomy,
                            withChildSpacing,
                            ...item,
                            level: `${idx + 1}`,
                            markerSpacing,
                        })
                    )}
                </ListComponent>
            </If>
        </div>
    )
}
