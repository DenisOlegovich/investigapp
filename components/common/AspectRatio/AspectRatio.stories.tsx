import { Meta, StoryObj } from '@storybook/react'

import { photobank1Image1 } from '@/Images'
import AspectRatio, { AspectRatioProps } from '.'
import Image from '@/components/Image'

const meta: Meta = {
    title: 'Components/AspectRatio',
    component: AspectRatio,
}

export default meta

type Story = StoryObj<AspectRatioProps>

export const Default: Story = {
    args: {
        ratio: 1,
        className: 'max-w-[200px]',
        children: (
            <Image
                img={photobank1Image1}
                alt="test"
            />
        ),
    },
}
