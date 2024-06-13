import { Meta, StoryObj } from '@storybook/react'

import FormExample from '.'

const meta: Meta = {
    title: 'Components/Forms/FormExample',
    component: FormExample,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
