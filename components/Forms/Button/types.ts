import { LinkProps as NextLinkProps } from 'next/link'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { variants } from './styles'

export type ButtonSize = 'l' | 'm' | 's'

// type ButtonType = 'button' | 'link'

type ButtonVariant = keyof typeof variants | 'unstyled'

type ButtonAnatomy = 'iconBefore' | 'children' | 'iconAfter'

export type TypeButton = {
    as?: 'button'
    href?: undefined
    isExternal?: undefined
} & ComponentPropsWithoutRef<'button'>

export type TypeLink = NextLinkProps &
    Omit<ComponentPropsWithoutRef<'a'>, keyof NextLinkProps> & {
        as?: 'link'
        isExternal?: boolean
    }

type ButtonBaseProps = TypeLink | TypeButton

export type ButtonProps = {
    size?: ButtonSize
    variant?: ButtonVariant
    iconBefore?: ReactNode
    iconAfter?: ReactNode
    isDisabled?: boolean
    anatomy?: Partial<Record<ButtonAnatomy, string>>
} & ButtonBaseProps
