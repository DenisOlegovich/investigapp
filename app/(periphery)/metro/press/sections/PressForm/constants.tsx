import { SelectOption } from '@/components/Forms/Select/interfaces'
import { CommonFormData } from '@/types'
import { getCommonValidation } from '@/utils'

// TODO: после появления апи прикрутить формирование опций по данным из запроса
export const selectOptions: SelectOption[] = [
    { label: 'Тег-1', value: 'tag_1' },
    { label: 'Тег-2', value: 'tag_2' },
    { label: 'Тег-3', value: 'tag_3' },
]

type PressFormFieldsName = 'get-all-news' | 'news-subscribe-tag' | 'personal-email'

export const pressFormData: CommonFormData<PressFormFieldsName>[] = [
    {
        type: 'checkbox',
        name: 'get-all-news',
        initialValue: false,
    },
    {
        type: 'select',
        name: 'news-subscribe-tag',
        initialValue: [],
    },
    {
        type: 'input',
        name: 'personal-email',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
]
