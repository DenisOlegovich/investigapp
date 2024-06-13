import { CommonFormFieldType } from '@/types'

export const emptyFormValuesConfig: Record<CommonFormFieldType, any> = {
    input: '',
    'text-area': '',
    select: '',
    'multi-select': [],
    'checkbox': false,
    'radio-group': '',
    switch: false,
    'switch-between': '',
}
