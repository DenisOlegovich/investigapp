import { InfoAboutRoutProps } from '../components/InfoAboutRout'

import { lianozovo1, lianozovo2, lianozovo3, lianozovo4, lianozovo5 } from '@/Images'
import BusRoute from '@/components/BusRoute'

import {
    FirstDescription,
    SecondDescription,
    ThirdDescription,
    FourthDescription,
    FifthDescription,
} from './Descriptions'

export const routesInfo: InfoAboutRoutProps[] = [
    {
        busRoutes: [
            {
                number: '200',
                isDisabled: true,
            },
            'arrow',
            {
                variant: 'blueLight',
                number: '270',
            },
            {
                variant: 'pink',
                number: '499',
                className: 'text-black',
            },
        ],
        date: 'С 16 сентября',
        title: (
            <>
                <BusRoute
                    number="200"
                    isDisabled
                />
                &nbsp;объединяется с&nbsp;
                <BusRoute
                    number="270"
                    variant="blueLight"
                />
            </>
        ),
        description: <FirstDescription />,
        imgScheme: lianozovo5,
        isMain: true,
    },
    {
        busRoutes: [
            {
                variant: 'blueLight',
                number: '587',
            },
        ],
        date: 'С 16 сентября',
        title: 'Новый маршрут Лианозово — Бибирево',
        description: <SecondDescription />,
        imgScheme: lianozovo1,
    },
    {
        busRoutes: [
            {
                number: '92',
                isDisabled: true,
            },
            {
                number: '665',
                isDisabled: true,
            },
            'arrow',
            {
                variant: 'blueLight',
                number: '167',
            },
            {
                variant: 'pink',
                number: '215',
                className: 'text-black',
            },
        ],
        date: 'С 16 сентября',
        title: 'Объединяются маршруты в Западном Дегунине',
        description: <ThirdDescription />,
        imgScheme: lianozovo2,
    },
    {
        busRoutes: [
            {
                variant: 'blueLight',
                number: '284',
            },
            {
                variant: 'blueLight',
                number: '774',
            },
            {
                variant: 'pink',
                number: '571',
                className: 'text-black',
            },
        ],
        date: 'С 16 сентября',
        title: 'Меняются маршруты у станции метро Лианозово',
        description: <FourthDescription />,
        imgScheme: lianozovo3,
    },
    {
        busRoutes: [
            {
                number: '63',
                isDisabled: true,
            },
            'arrow',
            {
                variant: 'blueLight',
                number: 'т78',
            },
            {
                variant: 'pink',
                number: '149',
                className: 'text-black',
            },
        ],
        date: 'С 16 сентября',
        title: 'Объединяются маршруты на Дмитровском шоссе',
        description: <FifthDescription />,
        imgScheme: lianozovo4,
    },
]
