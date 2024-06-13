import { ReactNode } from 'react'
import { GroupBase, Props as ReactSelectProps, StylesConfig } from 'react-select'

export type SelectSize = 'm' | 's'

export type SelectType = 'stroke' | 'fill'

export interface SelectOption {
    value: string
    label?: ReactNode
    isDisabled?: boolean
}

type SelectAnatomy = 'container' | 'label' | 'fieldWrapper' | 'optionalText' | 'prefix' | 'postfix'

export interface SelectProps
    extends Omit<
        ReactSelectProps<SelectOption, boolean, GroupBase<SelectOption>>,
        | 'value'
        | 'options'
        | 'onChange'
        | 'isOptionDisabled'
        | 'noOptionsMessage'
        | 'placeholder'
        | 'defaultValue'
        | 'styles'
    > {
    options: SelectOption[]
    onChange: (value?: string | string[]) => void
    value?: string | string[]
    initialValue?: string | string[]
    label?: ReactNode
    noOptionsMessage?: string
    placeholder?: string
    isRequired?: boolean
    optionalText?: string
    isInvalid?: boolean
    type?: SelectType
    size?: SelectSize
    view?: 'top' | 'left'
    prefix?: ReactNode
    postfix?: ReactNode
    anatomy?: Partial<Record<SelectAnatomy, string>> & {
        select?: StylesConfig<SelectOption, boolean, GroupBase<SelectOption>>
    }
}
