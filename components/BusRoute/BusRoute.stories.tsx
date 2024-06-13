import { Meta, StoryObj } from '@storybook/react'

import BusRoute, { BusRouteProps } from '.'

const meta: Meta<BusRouteProps> = {
    title: 'Components/BusRoute',
    component: BusRoute,
}

export default meta

type Story = StoryObj<BusRouteProps>

export const Default: Story = {
    args: {
        variant: 'white',
        number: '1247к',
        isDisabled: false,
    },
}
