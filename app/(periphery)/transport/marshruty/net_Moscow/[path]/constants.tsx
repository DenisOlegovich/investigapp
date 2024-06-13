import { ITab } from '@/components/Tabs/types'
import Old from './contentTabs/Old'
import New from './contentTabs/New'
import ClimateControl from '@/components/icons/ClimateControl'
import { cn } from '@/utils'

export const tabs: ITab[] = [
    {
        tabId: 'old',
        path: 'old',
        title: 'Старая Москва',
        Content: <Old />,
    },
    {
        tabId: 'new',
        path: 'new',
        title: 'Новая Москва',
        Content: <New />,
    },
]

export const advantageCards = [
    {
        title: '124',
        description: 'новых автобуса готовятся к\u00A0выходу на\u00A0маршруты',
        anatomy: { title: 'factorid' },
    },
    {
        title: '33 000',
        description: 'человек в\u00A0сутки смогут перевезти новые маршруты',
        anatomy: { title: 'factorid' },
    },
    { title: '29 000', description: 'москвичей получат новые транспортные связи', anatomy: { title: 'factorid' } },
    {
        title: <ClimateControl />,
        description: 'В новых автобусах есть климат-контроль и\u00A0USB-зарядки',
        anatomy: { title: cn('text-red', 'text-[4rem] md:text-[6rem]') },
    },
]
