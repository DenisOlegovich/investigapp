import { ITab } from '@/components/Tabs/types'
import Gallery from './contentTabs/Gallery'
import Speakers from './contentTabs/Speakers'

export const tabs: ITab[] = [
    {
        tabId: 'speakers',
        path: 'speakers',
        title: 'Презентация спикеров',
        Content: <Speakers />,
    },
    {
        tabId: 'gallery',
        path: 'gallery',
        title: 'Фотогалерея',
        Content: <Gallery />,
    },
]
