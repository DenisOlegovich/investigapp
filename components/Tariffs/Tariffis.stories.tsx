import { Meta, StoryObj } from '@storybook/react'

import Tariffs, { TariffsProps } from '.'

const meta: Meta = {
    title: 'Components/Tariffs',
    component: Tariffs,
}

export default meta

const items = [
    {
        subtitle: '1 сутки',
        title: '315 ₽',
    },
    {
        subtitle: '3 суток',
        title: '600 ₽',
    },
    {
        subtitle: '30 дней',
        title: '2 730 ₽',
    },
    {
        subtitle: '90 дней',
        title: '6 600 ₽',
    },
    {
        subtitle: '365 дней',
        title: '19 500 ₽',
    },
]

type Story = StoryObj<TariffsProps>

export const Default: Story = {
    args: {
        title: 'Стоимость 1 поездки по билету «Кошелек» составит',
        items,
    },
}
