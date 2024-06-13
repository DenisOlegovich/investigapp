import { ITab } from '@/components/Tabs/types'
import PhysicsAndTechnology from './contentTabs/PhysicsAndTechnology'
import Yakhromskaya from './contentTabs/Yakhromskaya'
import Lianozovo from './contentTabs/Lianozovo'

export const tabs: ITab[] = [
    {
        tabId: 'phystech',
        path: 'phystech',
        title: 'Физтех',
        Content: <PhysicsAndTechnology />,
    },
    {
        tabId: 'lianozovo',
        path: 'lianozovo',
        title: 'Лианозово',
        Content: <Lianozovo />,
    },
    {
        tabId: 'yakhromskaya',
        path: 'yakhromskaya',
        title: 'Яхромская',
        Content: <Yakhromskaya />,
    },
]
