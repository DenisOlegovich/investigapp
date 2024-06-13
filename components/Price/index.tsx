import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

type PriceAnatomy = 'title' | 'description'

export interface PriceProps extends ComponentPropsWithoutRef<'div'> {
    title?: string
    description?: string
    anatomy?: Partial<Record<PriceAnatomy, string>>
}

export default function Price({
    className,
    title,
    description,
    anatomy: { title: titleClassName = '', description: descriptionClassName = '' } = {},
}: PriceProps) {
    return (
        <div className={cn(styles.wrapper, className)}>
            {title && <p className={cn('factorid', titleClassName)}>{title}</p>}
            {description && <p className={cn(styles.description, descriptionClassName)}>{description}</p>}
        </div>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-xs'),
    description: cn('max-w-[31rem]', 'text-[1.4rem] md:text-[1.6rem]'),
}
