import { Meta, StoryObj } from '@storybook/react'

import List, { ListProps } from '.'

const items: ListProps['items'] = [
    {
        title: 'Первый уровень',
        items: [
            {
                title: 'Второй уровень',
                variant: 'unordered',
                items: [{ title: 'Третий уровень' }, { title: 'Третий уровень' }],
            },
        ],
    },
    {
        title: 'Первый уровень',
        items: [
            {
                title: 'Второй уровень',
                items: [
                    {
                        title: 'Третий уровень',
                        variant: 'unordered',
                        items: [
                            { title: 'Четвёртый уровень' },
                            { title: 'Четвёртый уровень', variant: 'unordered', items: [{ title: 'Пятый уровень' }] },
                        ],
                    },
                ],
            },
        ],
    },
]

const StoryList = () => (
    <List
        variant="ordered"
        items={items}
        markerSpacing={0.5}
        // withChildSpacing={false}
    />
)

const meta: Meta = {
    title: 'Components/List',
    component: StoryList,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
