import { ChangeEvent, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Checkbox from '.'

const ComponentWithCheckbox = () => {
    const [isWhiteChecked, setIsWhiteChecked] = useState<boolean>()

    const changeWhiteHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIsWhiteChecked(event.target.checked)
    }

    const [isGreyChecked, setIsGreyChecked] = useState<boolean>()

    const changeGreyHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIsGreyChecked(event.target.checked)
    }

    return (
        <div className="flex">
            <div className="flex h-40 w-60 items-center justify-center">
                <Checkbox
                    label="Заголовок 1"
                    isChecked={isWhiteChecked}
                    onChange={changeWhiteHandler}
                    isIndeterminate
                    // isDisabled
                    // isInvalid
                />
            </div>

            <div className="flex h-40 w-60 items-center justify-center bg-grey/[.5]">
                <Checkbox
                    label="Заголовок 2"
                    isChecked={isGreyChecked}
                    onChange={changeGreyHandler}
                    isIndeterminate
                    colorScheme="grey"
                    // isDisabled
                    // isInvalid
                />
            </div>
        </div>
    )
}

const meta: Meta = {
    title: 'Components/Forms/Checkbox',
    component: ComponentWithCheckbox,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
