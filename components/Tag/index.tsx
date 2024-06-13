import { cn } from '@/utils'
import { ComponentPropsWithoutRef } from 'react'

export type TagAnatomy = 'container'
export type TagVariant = keyof typeof variants | 'unstyled'

export interface TagProps extends ComponentPropsWithoutRef<'div'> {
    variant?: TagVariant
    anatomy?: Partial<Record<TagAnatomy, string>>
}

export default function Tag({
    children,
    variant = 'default',
    className,
    anatomy: { container: containerCustomProps = '' } = {},
}: TagProps) {
    const containerClassName = variant === 'unstyled' ? className : cn(variants[variant], className)

    return <div className={cn(containerClassName, containerCustomProps)}>{children}</div>
}

const variants = {
    default: cn(
        'inline-block',
        'py-[0.4rem]',
        'px-[0.8rem]',
        'rounded-[0.4rem]',
        'bg-[rgba(102,111,120,0.1)]',
        'hover:bg-[rgba(102,111,120,0.17)]',
        'active:bg-[rgba(102,111,120,0.3)]',
        'cursor-pointer',
        'body_s'
    ),
}
