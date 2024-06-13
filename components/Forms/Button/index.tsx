'use client'

import NextLink from 'next/link'

import { ButtonProps, TypeButton, TypeLink } from './types'
import { cn, resolvedSrc } from '@/utils'
import If from '@/components/If'

import { sizes, styles, variants } from './styles'

export default function Button({
    as,
    href = '#',
    variant = 'primary',
    size = 'm',
    children,
    iconBefore,
    iconAfter,
    className,
    isExternal,
    isDisabled = false,
    anatomy: { iconBefore: iconBeforeClassName, children: childrenClassName, iconAfter: iconAfterClassName } = {},
    ...props
}: ButtonProps) {
    const { type = 'button', ...buttonProps } = props as TypeButton

    const linkProps = {
        href: resolvedSrc(href as string),
        target: isExternal ? '_blank' : '_top',
        type: 'button',
        ...props,
    } as TypeLink

    const buttonClassName =
        variant === 'unstyled' ? className : cn(styles.base, variants[variant], sizes[size], className)

    const childContent = (
        <>
            {iconBefore && <span className={cn(styles.icon, iconBeforeClassName)}>{iconBefore}</span>}
            {children && <span className={childrenClassName}>{children}</span>}
            {iconAfter && <span className={cn(styles.icon, iconAfterClassName)}>{iconAfter}</span>}
        </>
    )

    return (
        <If
            condition={as === 'link'}
            Else={
                <button
                    className={buttonClassName}
                    aria-disabled={isDisabled}
                    disabled={isDisabled}
                    type={type}
                    {...buttonProps}
                >
                    {childContent}
                </button>
            }
        >
            <NextLink
                className={buttonClassName}
                aria-disabled={isDisabled}
                {...linkProps}
            >
                {childContent}
            </NextLink>
        </If>
    )
}
