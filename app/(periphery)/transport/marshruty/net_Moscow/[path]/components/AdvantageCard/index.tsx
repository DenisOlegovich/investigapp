import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { cn } from '@/utils'

export type AdvantageCardAnatomy = 'title'

export interface AdvantageCardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
    title: ReactNode
    description: string
    anatomy?: Partial<Record<AdvantageCardAnatomy, string>>
}

export default function AdvantageCard({
    title,
    description,
    anatomy: { title: titleCustomProps = '' } = {},
    ...props
}: AdvantageCardProps) {
    return (
        <div {...props}>
            <span className={titleCustomProps}>{title}</span>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

const styles = {
    description: cn('body-xs md:body-s', 'mt-[1.2rem]'),
}
