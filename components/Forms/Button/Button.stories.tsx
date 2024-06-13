import { Meta, StoryObj } from '@storybook/react'
import { ReactNode } from 'react'

import { ButtonProps, ButtonSize } from './types'

import BikeStrokeIcon from '@/components/icons/BikeStrokeIcon'

import Button from '.'

const sizeData: {
    size: ButtonSize
    title: string
    iconBefore?: ReactNode
}[] = [
    { size: 'l', title: 'Large', iconBefore: <BikeStrokeIcon /> },
    { size: 'm', title: 'Medium with active state' },
    { size: 's', title: 'Small with disabled state' },
]

const Buttons = (props: ButtonProps) => (
    <div className="flex flex-col gap-5 md:flex-row">
        {sizeData.map(({ title, size, iconBefore }, idx) => (
            <div key={idx}>
                <p className="text-grey-dark">{title}</p>
                <Button
                    size={size}
                    iconBefore={iconBefore}
                    isDisabled={idx === 2}
                    type="button"
                    {...props}
                />
            </div>
        ))}
    </div>
)

const meta: Meta = {
    title: 'Components/Forms/Button',
    component: Buttons,
    args: {
        children: 'Текст кнопки',
    },
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант кнопки',
            defaultValue: 'primary',
            options: ['unstyled', 'text', 'primary', 'danger', 'secondary', 'primary-light'],
            control: {
                type: 'inline-radio',
            },
        },
        type: {
            type: 'string',
            description: 'Обертка кнопки',
            defaultValue: 'button',
            options: ['button', 'a'],
        },
    },
}

export default meta

type Story = StoryObj

export const Primary: Story = {
    args: {},
}

export const Danger: Story = {
    args: {
        variant: 'danger',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        as: 'link',
        href: 'https://tailwindcomponents.com/gradient-generator/',
    },
}

export const PrimaryLight: Story = {
    args: {
        variant: 'primary-light',
        as: 'link',
        href: 'https://tailwindcomponents.com/gradient-generator/',
        isExternal: true,
    },
}

export const Text: Story = {
    args: {
        variant: 'text',
    },
}

export const Unstyled: Story = {
    args: {
        variant: 'unstyled',
    },
}
