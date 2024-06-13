import { Meta, StoryObj } from '@storybook/react'

import CompareSlider from '.'
import { CompareSliderProps } from './type'
import { photobank1Image1 } from '@/Images'

const meta: Meta = {
    title: 'Components/CompareSlider',
    component: CompareSlider,
}

export default meta

type Story = StoryObj<CompareSliderProps>

export const Default: Story = {
    args: {
        className: 'max-w-[700px]',
        items: [
            {
                img: photobank1Image1,
                label: '2020',
            },
            {
                img: photobank1Image1,
                label: '2021',
                className: 'blur-sm',
            },
        ],
    },
}
