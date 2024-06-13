import { ChangeEvent, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Input from '.'

const ComponentWithInput = () => {
    const [value, setValue] = useState('')

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <Input
            isInvalid={!value.length}
            value={value}
            onChange={changeHandler}
            className="max-w-[29rem]"
        />
    )
}

const meta: Meta = {
    title: 'Components/Forms/Input',
    component: ComponentWithInput,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
