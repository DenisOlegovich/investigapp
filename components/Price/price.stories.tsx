import { Meta, StoryObj } from '@storybook/react'
import Price, { PriceProps } from '.'

const meta: Meta = {
    title: 'Components/Price',
    component: Price,
    // tags: ['autodocs'],
    // argTypes: {},
}

export default meta

type Story = StoryObj<PriceProps>

export const Default: Story = {
    args: {
        title: '46 ₽',
        description: 'одна поездка в метро, МЦК и МЦД зона «Центральная» или наземном транспорте',
    },
}
