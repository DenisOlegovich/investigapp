import { Meta, StoryObj } from '@storybook/react'

import NewsList from '.'
import { NewsListProps } from './types'
import { photobank1Image1 } from '@/Images'

const data: NewsListProps['data'] = [
    {
        id: '1',
        date: '1 июля',
        title: 'Новость 1',
        img: photobank1Image1,
    },
    {
        id: '2',
        date: '2 июля',
        title: 'Новость 2',
        img: photobank1Image1,
    },
    {
        id: '3',
        date: '3 июля',
        title: 'Новость 3',
        img: photobank1Image1,
    },
]

const StoryNewsList = () => (
    <NewsList
        title="Список новостей"
        data={data}
        onShowMore={() => console.log('click')}
    />
)

const meta: Meta = {
    title: 'Components/NewsList',
    component: StoryNewsList,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
