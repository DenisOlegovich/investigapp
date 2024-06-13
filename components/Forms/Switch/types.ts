import { ComponentPropsWithoutRef } from 'react'

import { variants } from './styles'

export type SwitchVariant = keyof typeof variants

export type SwitchAnatomy = 'input' | 'toggle' | 'text'

export type SwitchCommonProps = {
    variant?: SwitchVariant
    anatomy?: Partial<Record<SwitchAnatomy, string>>
} & Omit<ComponentPropsWithoutRef<'label'>, 'value' | 'onChange'>

export interface SwitchDefaultProps {
    type?: 'default'
    options?: undefined
    label?: string
    value?: boolean
    onChange?: (value: SwitchDefaultProps['value']) => void
}

export interface SwitchOption {
    label?: string
    value: string | number | boolean
}

export interface SwitchBetweenProps {
    type?: 'between'
    options: SwitchOption[]
    label?: undefined
    value: SwitchOption['value']
    onChange?: (value: SwitchBetweenProps['value']) => void
}

type SwitchBaseProps = SwitchDefaultProps | SwitchBetweenProps

export type SwitchProps = SwitchCommonProps & SwitchBaseProps
