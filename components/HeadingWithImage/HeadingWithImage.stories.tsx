import { Meta, StoryObj } from '@storybook/react'

import HeadingWithImage, { HeadingWithImageProps } from '.'
import H1 from '@/components/common/typography/H1'
import { cn } from '@/utils'
import { khovrinoMap } from '@/Images'

const meta: Meta = {
    title: 'Components/HeadingWithImage',
    component: HeadingWithImage,
}

export default meta

type Story = StoryObj<HeadingWithImageProps>

export const Default: Story = {
    args: {
        children: (
            <H1 className={cn('max-w-[1090px]', 'text-white')}>
                Опрос о новом названии станции Ховрино Ленинградского направления ж/д
            </H1>
        ),
        img: khovrinoMap,
    },
}
