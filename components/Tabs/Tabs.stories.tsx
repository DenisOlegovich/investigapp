import { Meta, StoryObj } from '@storybook/react'
import Tabs from '.'
import { ITab } from './types'

const meta: Meta = {
    title: 'Components/Tabs',
    component: Tabs,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант табов',
            defaultValue: 'default',
            options: ['default', 'menuTabs'],
        },
        defaultTab: {
            type: 'string' || 'number',
            description: 'Начальный таб. Принимает и id, и index элемента',
            defaultValue: undefined,
        },
    },
    // parameters: {
    //     nextjs: {
    //         appDirectory: true,
    //     },
    // },
}

export default meta

type Story = StoryObj

const defaultTabs: { desc: string; tabs: ITab[] }[] = [
    {
        desc: '2 вкладки с короткими названиями (управляется параметром maxLengthStr, по умолчанию 15) распологаются горизонтально',
        tabs: [
            { tabId: '1', title: 'Тестовый таб 1', Content: 'Тестовый таб 1' },
            { tabId: '2', title: 'Тестовый таб 2', Content: 'Тестовый таб 2' },
        ],
    },
    {
        desc: '2 вкладки с длинными названиями (управляется параметром maxLengthStr, по умолчанию 15) или 3 вкладки распологаются вертикально',
        tabs: [
            { tabId: '1', title: 'Тестовый таб 1', Content: 'Тестовый таб 1' },
            { tabId: '2', title: 'Тестовый таб 2', Content: 'Тестовый таб 2' },
            { tabId: '3', title: 'Ссылка таб', path: 'https://chakra-ui.com/docs/components/switch/usage' },
        ],
    },
    {
        desc: 'если вкладок больше 3-x, они сворачиваются в выпадающий список',
        tabs: [
            { tabId: '1', title: 'Тестовый таб 1', Content: 'Тестовый таб 1' },
            { tabId: '2', title: 'Тестовый таб 2', Content: 'Тестовый таб 2' },
            {
                tabId: '3',
                title: 'Тестовый таб 3',
                Content: 'Тестовый таб 3',
            },
            {
                tabId: '4',
                title: 'Внутренняя ссылка',
                Content: 'Тестовый таб 4',
                path: 'https://chakra-ui.com/docs/components/switch/usage',
            },
            {
                tabId: '5',
                title: 'Внешняя ссылка',
                Content: 'Тестовый таб 5',
                linkType: 'external',
                path: 'https://chakra-ui.com/docs/components/switch/usage',
            },
        ],
    },
]

const TabsDefaultWithDescription = () => {
    return (
        <div className="flex flex-col gap-[2rem]">
            {defaultTabs.map(({ desc, tabs }, idx) => (
                <div key={idx}>
                    <p className="mb-[1rem] text-grey">
                        <b>В мобильнй версии: </b>
                        {desc}
                    </p>
                    <Tabs
                        tabs={tabs}
                        variant="default"
                        className="rounded-[0.8rem] bg-grey-extra-light p-[0.5rem]"
                    />
                </div>
            ))}
        </div>
    )
}

export const Default: Story = {
    render: () => <TabsDefaultWithDescription />,
}

const menuTabs: ITab[] = [
    { tabId: '1', title: 'Транспорт Москвы', Content: 'Тестовый таб 1', activeClassName: 'bg-red' },
    { tabId: '2', title: 'Метрополитен', Content: 'Тестовый таб 2', activeClassName: 'bg-black' },
    { tabId: '3', title: 'Велобайк', Content: 'Тестовый таб 3', activeClassName: 'bg-velobike text-black' },
    { tabId: '4', title: 'Московский паркинг', Content: 'Тестовый таб 5', activeClassName: 'bg-yellow-taxi' },
    { tabId: '5', title: 'Мостранспроект', Content: 'Тестовый таб 5', activeClassName: 'bg-violet' },
]

export const MenuTabs: Story = {
    args: {
        tabs: menuTabs,
        variant: 'menuTabs',
    },
}
