import { CommonFormData } from '@/types'
import { getCommonValidation } from '@/utils'

export type FormFieldsName = 'name' | 'phone' | 'mail' | 'picture'

export const formData: CommonFormData<FormFieldsName>[] = [
    {
        type: 'input',
        name: 'name',
        initialValue: '',
    },
    {
        type: 'input',
        name: 'phone',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'input',
        name: 'mail',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'input',
        name: 'picture',
        initialValue: '',
        validate: getCommonValidation(),
    },
]
