import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Switch from '.'

const meta: Meta = {
    title: 'Components/Forms/Switch',
    component: Switch,
}

export default meta

type Story = StoryObj

const SwitchDefault = () => {
    const [valuePrimary, setValuePrimary] = useState<boolean | undefined>(false)
    const [valueSecondary, setValueSecondary] = useState<boolean | undefined>(false)

    return (
        <div className="flex max-w-[29rem] flex-col gap-[2rem]">
            <div className="p-5">
                <Switch
                    onChange={setValuePrimary}
                    value={valuePrimary}
                    label={valuePrimary ? 'on' : 'off'}
                />
            </div>

            <div className="rounded-[0.8rem] bg-black p-5">
                <Switch
                    variant="secondary"
                    className="text-white"
                    onChange={setValueSecondary}
                    value={valueSecondary}
                    label={valueSecondary ? 'on' : 'off'}
                />
            </div>
        </div>
    )
}

const SwitchBetween = () => {
    const [valueDefault, setValueDefault] = useState<string | boolean | number>('left')
    const [valueBetween, setValueBetween] = useState<string | boolean | number>('left')

    return (
        <div className="flex max-w-[29rem] flex-col gap-[2rem]">
            <div className="p-5">
                <Switch
                    type="between"
                    options={[
                        { label: 'left', value: 'left' },
                        { label: 'right', value: 'right' },
                    ]}
                    onChange={setValueDefault}
                    value={valueDefault}
                />
            </div>

            <div className="rounded-[0.8rem] bg-black p-5">
                <Switch
                    type="between"
                    variant="secondary"
                    className="text-white"
                    options={[
                        { label: 'left', value: 'left' },
                        { label: 'right', value: 'right' },
                    ]}
                    onChange={setValueBetween}
                    value={valueBetween}
                />
            </div>
        </div>
    )
}

export const Default: Story = {
    args: {},
    render: () => <SwitchDefault />,
}

export const Between: Story = {
    args: {},
    render: () => <SwitchBetween />,
}
