import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { SelectOption } from './interfaces'
import Select from '.'

const selectOptions = Array.from<{ length: number }, SelectOption>({ length: 10 }, (_, idx) => ({
    value: String(idx),
    label: `option-${idx}`,
    isDisabled: idx % 2 === 0,
}))

const SelectComponent = () => {
    const [value, setValue] = useState<string | string[]>()

    return (
        <div className="h-[50rem]">
            <Select
                className="max-w-[29rem]"
                label="Название поля"
                options={selectOptions}
                onChange={setValue}
                value={value}
                initialValue={selectOptions[3].value}
                // isMulti
                postfix={'B'}
                // isClearable
                // isSearchable
                type="stroke"
                optionalText="Текст подсказка"
                // isInvalid
                isRequired
                // isDisabled
                // size="s"
            />
        </div>
    )
}

const meta: Meta = {
    title: 'Components/Forms/Select',
    component: SelectComponent,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
