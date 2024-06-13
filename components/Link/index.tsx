import ExternalLinkIcon from '@/components/icons/ExternalLinkIcon'
import NewWindowLinkIcon from '@/components/icons/NewWindowLinkIcon'
import { cn, resolvedSrc } from '@/utils'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ComponentPropsWithoutRef, ReactNode, useMemo } from 'react'

export type LinkAnatomy =
    | 'linkContainer'
    | 'iconBeforeContainer'
    | 'childrenContainer'
    | 'typeIconContainer'
    | 'iconAfterContainer'

export type LinkVariant = keyof typeof variants | 'unstyled'
export type LinkType = keyof typeof linkTypeIcons | 'regular'

export interface ILinkProps extends NextLinkProps, Omit<ComponentPropsWithoutRef<'a'>, keyof NextLinkProps> {
    variant?: LinkVariant
    type?: LinkType
    iconBefore?: ReactNode
    iconAfter?: ReactNode
    anatomy?: Partial<Record<LinkAnatomy, string>>
    isDisabled?: boolean
}

export const linkTypeIcons = {
    'new-window': <NewWindowLinkIcon />,
    external: <ExternalLinkIcon />,
}

export default function Link({
    children,
    variant = 'default',
    type = 'regular',
    iconBefore,
    iconAfter,
    className,
    href,
    isDisabled,
    anatomy: {
        linkContainer: linkContainerClassName,
        iconBeforeContainer: iconBeforeContainerClassName,
        childrenContainer: childrenContainerClassName,
        typeIconContainer: typeIconContainerClassName,
        iconAfterContainer: iconAfterContainerClassName,
    } = {},
    ...props
}: ILinkProps) {
    // Автоматически выставляем тип внешнего ресурса, если href начинается с http
    if (type !== 'regular' && typeof href === 'string' && href.startsWith('http')) {
        type = 'external'
    }

    const typeIcon = type && type !== 'regular' && linkTypeIcons?.[type]
    const linkClassName = variant === 'unstyled' ? className : cn(styles.base, variants[variant], className)
    const resSrc = resolvedSrc(href as string)
    const additionalPropsByType = useMemo(() => {
        if (type === 'new-window' || type === 'external') {
            return {
                target: '_blank',
                rel: 'noreferrer',
            }
        }
    }, [type])

    return (
        <NextLink
            href={resSrc ?? '#'}
            aria-disabled={isDisabled}
            className={cn(linkClassName, linkContainerClassName)}
            {...additionalPropsByType}
            {...props}
        >
            {iconBefore && <span className={cn(styles.icon, iconBeforeContainerClassName)}>{iconBefore}</span>}
            {children && <span className={childrenContainerClassName}>{children}</span>}
            {typeIcon && <span className={cn(styles.icon, typeIconContainerClassName)}>{typeIcon}</span>}
            {iconAfter && <span className={cn(styles.icon, iconAfterContainerClassName)}>{iconAfter}</span>}
        </NextLink>
    )
}

const variants = {
    default: cn(
        'text-[#1A66CC]',
        'aria-[disabled=false]:hover:text-[#1337AD] aria-[disabled=false]:hover:decoration-[#1337AD]/[.3]',
        'visited:text-[#944394] visited:decoration-[#944394]/[.3]',
        'visited:hover:text-[#870787] visited:hover:decoration-[#870787]/[.3]',
        'aria-[disabled=true]:opacity-[0.6] aria-[disabled=true]:pointer-events-none'
    ),
    pseudo: cn(
        'text-black decoration-dashed decoration-black/[.3]',
        'hover:text-[#1337AD] hover:decoration-[#1337AD]/[.3]'
    ),
    simple_black: 'text-black decoration-black/[.2] hover:decoration-black/[.5]',
    simple_gray: 'text-black/[.5] decoration-black/[.1] hover:decoration-black/[.25]',
}

const styles = {
    base: 'inline underline leading-[1.3] decoration-[#1A66CC]/[.3] underline-offset-[6px] decoration-[1px]',
    icon: 'inline-block align-middle text-[1em] mx-[2px]',
}
