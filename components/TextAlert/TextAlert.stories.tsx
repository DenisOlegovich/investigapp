import TextAlert from '@/components/TextAlert/index'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
    title: 'Components/TextAlert',
    component: TextAlert,
    argTypes: {
        title: {
            type: 'string',
        },
    },
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {
        title: 'Важно',
        description: 'Это тестовое описание',
    },
}
