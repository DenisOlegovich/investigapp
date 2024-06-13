import { Control, FieldError } from 'react-hook-form'

export type CommonFormFieldType =
    | 'input'
    | 'text-area'
    | 'select'
    | 'multi-select'
    | 'checkbox'
    | 'radio-group'
    | 'switch'
    | 'switch-between'
// | 'date-picker'
// | 'time-picker'

export interface CommonFormData<T> {
    name: T
    type: CommonFormFieldType
    initialValue?: string | number | boolean | string[] | number[]
    validate?: (value?: any) => FieldError | undefined
    isRequired?: boolean
    isDisabled?: boolean
}

export type CommonControlledProps<T extends Record<string, any>> = {
    name: keyof T
    control: Control<T>
} & Pick<CommonFormData<keyof T>, 'isRequired' | 'isDisabled'>
