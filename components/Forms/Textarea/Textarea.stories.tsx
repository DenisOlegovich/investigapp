import { ChangeEvent, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Textarea from '.'

const characterLimit = 10

const ComponentWithTextArea = () => {
    const [value, setValue] = useState('')

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value)
    }

    return (
        <Textarea
            characterLimit={characterLimit}
            isInvalid={characterLimit - value.length < 0}
            value={value}
            onChange={changeHandler}
            className="h-[11rem] max-w-[29rem]"
        />
    )
}

const meta: Meta = {
    title: 'Components/Forms/Textarea',
    component: ComponentWithTextArea,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
