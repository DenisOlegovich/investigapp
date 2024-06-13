import { Meta, StoryObj } from '@storybook/react'

import NewsListCard from '.'
import { NewsListCardProps } from './types'

const data: NewsListCardProps['data'] = [
    {
        id: '1',
        date: '25 мая',
        description: 'Новость от 25 мая',
    },
    {
        id: '2',
        date: '23 апреля',
        description: 'Новость от 23 апреля',
    },
    {
        id: '3',
        date: '12 февраля',
        description: 'Новость от 12 февраля',
    },
]

const StoryAccordion = () => (
    <NewsListCard
        title="Карточка со списком новостей"
        data={data}
    />
)

const meta: Meta = {
    title: 'Components/NewsListCard',
    component: StoryAccordion,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
