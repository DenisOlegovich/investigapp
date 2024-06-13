import { Meta, StoryObj } from '@storybook/react'

import Tag from '.'

const StoryTag = () => <Tag>текст тега</Tag>

const meta: Meta = {
    title: 'Components/Tag',
    component: StoryTag,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {
        description: 'test',
    },
}
