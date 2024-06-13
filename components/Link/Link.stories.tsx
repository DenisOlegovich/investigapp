import { Meta, StoryObj } from '@storybook/react'

import Link from './index'

const meta: Meta = {
    title: 'Components/Link',
    component: Link,
    args: {
        children: 'Текст ссылки',
        href: new Date().toString(),
    },
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант ссылки',
            defaultValue: 'default',
            options: ['unstyled', 'default', 'pseudo', 'simple_black', 'simple_gray'],
            control: {
                type: 'inline-radio',
            },
        },
        type: {
            type: 'string',
            description: 'Тип ссылки',
            defaultValue: undefined,
            options: [undefined, 'external', 'new-window'],
            control: {
                type: 'inline-radio',
            },
        },
    },
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {
        variant: 'default',
    },
}

export const Pseudo: Story = {
    args: {
        variant: 'pseudo',
    },
}

export const SimpleBlack: Story = {
    args: {
        variant: 'simple_black',
    },
}

export const SimpleGray: Story = {
    args: {
        variant: 'simple_gray',
    },
}

export const Unstyled: Story = {
    args: {
        variant: 'unstyled',
    },
}
