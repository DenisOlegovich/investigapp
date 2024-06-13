import { InfoAboutRoutProps } from '../components/InfoAboutRout'

import { fizteh1 } from '@/Images'
import { FirstDescription, SecondDescription } from './Descriptions'

export const routesInfo: InfoAboutRoutProps[] = [
    {
        busRoutes: [
            {
                variant: 'white',
                number: '24',
            },
            {
                variant: 'white',
                number: '456',
            },
            {
                variant: 'white',
                number: '545',
            },
        ],
        date: 'С 7 сентября',
        title: 'Пригородные маршруты теперь останавливаются у станции метро «Физтех»',
        description: <FirstDescription />,
    },
    {
        busRoutes: [
            {
                variant: 'blueLight',
                number: '746',
            },
        ],
        date: 'С 7 сентября',
        title: 'Автобусы подъезжают к станции метро «Физтех»',
        description: <SecondDescription />,
        imgScheme: fizteh1,
        isMain: true,
    },
]
