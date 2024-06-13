import { Meta, StoryObj } from '@storybook/react'

import Card from '.'

const CardComponent = () => (
    <Card
        type="link"
        href="http://www.yandex.ru"
        isExternal
        title="Заголовок карточки"
        subtitle="Это карточка, которая является ссылкой"
        className="w-[310px] bg-red"
    />
)

const meta: Meta = {
    title: 'Components/Card',
    component: CardComponent,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
