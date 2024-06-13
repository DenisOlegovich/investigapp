import { Meta, StoryObj } from '@storybook/react'

import SubwayStation, { SubwayStationProps } from '.'
import { metroLineIcons } from '@/constants'

const meta: Meta<SubwayStationProps> = {
    title: 'Components/SubwayStation',
    component: SubwayStation,
}

export default meta

type Story = StoryObj<SubwayStationProps>

export const Default: Story = {
    args: {
        number: 2,
        station: 'Проспект Мира',
        anatomy: {
            container: '',
            icon: '',
            station: '',
        },
    },
    argTypes: {
        number: {
            type: 'string',
            description: 'Линия метро',
            options: Object.keys(metroLineIcons),
            control: {
                type: 'inline-radio',
            },
        },
    },
}
