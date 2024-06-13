import { BaseItemProps, ListProps } from '@/components/List'
import { cn } from '@/utils'

type RenderListItemProps = BaseItemProps & {
    level: string
    markerSpacing: ListProps['markerSpacing']
}

export const renderListItem = ({
    level,
    title,
    variant = 'ordered',
    items = [],
    markerSpacing = 0.8,
    withChildSpacing = true,
    anatomy = {},
}: RenderListItemProps) => {
    const ListComponent = variant === 'ordered' ? 'ol' : 'ul'

    return (
        <li
            key={level}
            className={cn(styles.item, anatomy.item, { [styles.itemWOspacing]: !withChildSpacing })}
            style={{
                '--markerSpasing': `${markerSpacing}rem`,
            }}
        >
            <span className={cn(styles.title, anatomy.title)}>{title}</span>

            {Boolean(items.length) && (
                <ListComponent className={cn(styles.list, anatomy.list, { [styles.listWOspacing]: !withChildSpacing })}>
                    {items.map((item, indx) =>
                        renderListItem({
                            anatomy,
                            withChildSpacing,
                            ...item,
                            markerSpacing,
                            level: `${level}.${indx + 1}`,
                        })
                    )}
                </ListComponent>
            )}
        </li>
    )
}

const styles = {
    item: cn(
        'text-body-s md:body',
        'my-[1.2rem] md:my-[1.8rem] last-of-type:mb-0 first-of-type:mt-0',
        'before:w-min before:pr-[--markerSpasing]'
    ),
    title: 'whitespace-pre-line',
    itemWOspacing: cn('before:block', 'grid', 'grid-cols-[auto_1fr]', 'grid-rows-[auto_auto]'),
    list: 'mt-[1.2rem] md:mt-[1.8rem]',
    listWOspacing: 'col-span-2',
}
