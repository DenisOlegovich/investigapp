import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { colorSchemes } from './styles'

/** Общие свойства элемента массива options радиогруппы */
interface RadioGroupOptionCommon {
    /** обязательный, значение отдельно взятой радио-кнопки */
    value: string
    /** опцинальный, флаг для отдельно взятой радио-кнопки */
    isDisabled?: boolean
}

export interface RadioGroupOptionWOIcon extends RadioGroupOptionCommon {
    /** опциональный, наименование отдельно взятой радио-кнопки */
    label?: string
    /** опциональный, параметр не передается, если передан label */
    icon?: undefined
}

interface RadioGroupOptionWOlabel extends RadioGroupOptionCommon {
    /** опциональный, параметр не передается, если передан icon */
    label?: undefined
    /** опциональный, иконка отдельно взятой радио-кнопки, отображается вместо радио-кнопки */
    icon?: ReactNode
}

export type RadioGroupOption = RadioGroupOptionWOIcon | RadioGroupOptionWOlabel

export type RadioGroupAnatomy =
    | 'container'
    | 'fieldLabel'
    | 'radioGroupContainer'
    | 'radioItemContainer'
    | 'input'
    | 'checkmark'
    | 'itemLabel'

type RadioGroupColorCheme = keyof typeof colorSchemes

/** Общие пропсы компонента RadioGroup */
interface RadioGroupCommonProps
    extends Omit<
        ComponentPropsWithoutRef<'input'>,
        'disabled' | 'required' | 'value' | 'checked' | 'prefix' | 'onChange'
    > {
    colorScheme?: RadioGroupColorCheme
    /** опциональный, наименование всего поля */
    label?: ReactNode
    /** опционаьный, значение всего поля, которое соответствует
     * выбранному значению отдельно взятой кнопки, если оно выбрано */
    value?: RadioGroupOption['value']
    onChange?: (value: RadioGroupProps['value']) => void
    /** опциональный, флаг для всего поля */
    isDisabled?: boolean
    anatomy?: Partial<Record<RadioGroupAnatomy, string>>
}

interface RadioGroupDefaultProps extends RadioGroupCommonProps {
    variant?: 'default'
    /** в опциях радио-группы с типом "default" не может быть передано свойство icon */
    options?: RadioGroupOptionWOIcon[]
}

interface RadioGroupButtonProps extends RadioGroupCommonProps {
    variant?: 'button'
    options?: RadioGroupOption[]
}

export type RadioGroupProps = RadioGroupDefaultProps | RadioGroupButtonProps

export type RadioGroupItemProps = Omit<RadioGroupProps, 'options' | 'label' | 'value' | 'isDisabled'> &
    RadioGroupOption & {
        isChecked?: boolean
    }
