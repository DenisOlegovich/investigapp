import { Meta, StoryObj } from '@storybook/react'

import InternalNavbar, { InternalNavbarProps } from '.'

const navMenu: InternalNavbarProps['navMenu'] = [
    {
        title: 'Страница 1 в группе',
        href: 'https://yandex.ru',
    },
    {
        title: 'Страница 2 в группе',
        href: 'https://www.google.com/',
    },
    {
        title: 'Страница 3 в группе',
        href: 'https://www.youtube.com/',
    },
]

const StoryInternalNavbar = () => (
    <InternalNavbar
        title="Заголовок меню навигации:"
        navMenu={navMenu}
        excludedPageHref="https://www.google.com/"
    />
)

const meta: Meta = {
    title: 'Components/InternalNavbar',
    component: StoryInternalNavbar,
}

export default meta

type Story = StoryObj

export const Default: Story = {
    args: {},
}
