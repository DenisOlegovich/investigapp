import { CommonFormData } from '@/types'
import { getCommonValidation } from '@/utils'

export type formFieldsName = 'name' | 'mail' | 'location' | 'district' | 'suggestions' | 'picture'

export const formData: CommonFormData<formFieldsName>[] = [
    {
        type: 'input',
        name: 'name',
        initialValue: '',
    },
    {
        type: 'input',
        name: 'mail',
        initialValue: '',
    },
    {
        type: 'input',
        name: 'location',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'input',
        name: 'district',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'input',
        name: 'suggestions',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'input',
        name: 'picture',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
]
