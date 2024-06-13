import { CommonFormData } from '@/types'
import { getCommonValidation } from '@/utils'

import { RadioGroupOption, RadioGroupOptionWOIcon } from '@/components/Forms/RadioGroup/types'
import { SelectOption } from '@/components/Forms/Select/interfaces'
import { SwitchBetweenProps } from '@/components/Forms/Switch/types'
import BikeIcon from '@/components/icons/BikeIcon'
import BusFrontIcon from '@/components/icons/BusFrontIcon'
import CarIcon from '@/components/icons/CarIcon'
import HumanIcon from '@/components/icons/HumanIcon'

export const testSelectOptions = Array.from<{ length: number }, SelectOption>({ length: 10 }, (_, indx) => ({
    value: String(indx),
    label: `option-${indx}`,
    isDisabled: indx % 2 === 0,
}))

export const testRadioButtonGroupOptions: RadioGroupOption[] = [
    {
        value: 'bus',
        icon: (
            <BusFrontIcon
                width="3.6rem"
                height="3.6rem"
            />
        ),
    },
    {
        value: 'car',
        icon: (
            <CarIcon
                width="3.6rem"
                height="3.6rem"
            />
        ),
    },
    {
        value: 'men',
        icon: (
            <HumanIcon
                width="3.6rem"
                height="3.6rem"
            />
        ),
    },
    {
        value: 'bike',
        icon: (
            <BikeIcon
                width="3.6rem"
                height="3.6rem"
            />
        ),
    },
]

export const testRadioGroupOptions: RadioGroupOptionWOIcon[] = [
    { value: 'Первый', label: 'Первый' },
    { value: 'Второй', label: 'Второй' },
    { value: '3', label: 'Третий', isDisabled: true },
]

export const testSwitchBetweenOptions: SwitchBetweenProps['options'] = [
    {
        value: 'left',
        label: 'Вариант слева',
    },
    {
        value: 'right',
        label: 'Вариант справа',
    },
]

type TestFormFieldsName =
    | 'group-1.test-input-1-field-name'
    | 'group.test-input-2-field-name'
    | 'group.text-area-field-name'
    | 'select-field-name'
    | 'radio-button-group-field-name'
    | 'checkbox-field-name'
    | 'radio-group-field-name'
    | 'switch-field-name'
    | 'switch-between-field-name'

export const testFormData: CommonFormData<TestFormFieldsName>[] = [
    {
        type: 'input',
        name: 'group-1.test-input-1-field-name',
        initialValue: 'test-1',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'input',
        name: 'group.test-input-2-field-name',
        initialValue: 'test-2',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'text-area',
        name: 'group.text-area-field-name',
        initialValue: 'test',
    },
    {
        type: 'select',
        name: 'select-field-name',
        initialValue: '5',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'radio-group',
        name: 'radio-button-group-field-name',
        initialValue: 'car',
    },
    {
        type: 'checkbox',
        name: 'checkbox-field-name',
        initialValue: true,
    },
    {
        type: 'radio-group',
        name: 'radio-group-field-name',
        initialValue: '3',
    },
    {
        type: 'switch',
        name: 'switch-field-name',
        initialValue: true,
    },
    {
        type: 'switch-between',
        name: 'switch-between-field-name',
        initialValue: 'right',
    },
]
