import { Meta, StoryObj } from '@storybook/react'

import HotLinks, { HotLinksProps } from './index'

const meta: Meta = {
    title: 'Components/HotLinks',
    component: HotLinks,
}

export default meta

const items = [
    {
        href: '#',
        title: 'Получение, замена, аннулирование и выдача дубликата',
    },
    {
        href: '#',
        title: 'Льготы и субсидии',
    },
]

type Story = StoryObj<HotLinksProps>

export const Default: Story = {
    args: {
        title: 'Разрешение на работу такси',
        items,
    },
}
