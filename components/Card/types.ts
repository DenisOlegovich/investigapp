import { ComponentProps, ComponentPropsWithoutRef, ReactNode } from 'react'

export type CardType = 'link' | 'box'

export type CardAnatomy = 'container' | 'title' | 'subtitle' | 'body' | 'extra' | 'link'

type CardPropsHelper<T extends CardType> = T extends 'link'
    ? ComponentProps<'article'>
    : Omit<ComponentProps<'div'>, 'title'>

export type CardProps<T extends CardType> = {
    type: T
    title?: ReactNode
    subtitle?: ReactNode
    body?: ReactNode
    extra?: ReactNode
    href?: string
    isExternal?: boolean
    anatomy?: Partial<Record<CardAnatomy, string>>
} & CardPropsHelper<T>
