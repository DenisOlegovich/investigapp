import { getLineIcon } from '@/utils'
import { lianozovo2, lianozovo4, mmLogo, yahromskaya1 } from '@/Images'
import { FirstDescription, SecondDescription, ThirdDescription } from './Descriptions'
import Image from '@/components/Image'
import { InfoAboutRoutProps } from '../components/InfoAboutRout'

export const routesInfo: InfoAboutRoutProps[] = [
    {
        busRoutes: [
            {
                number: '167',
                variant: 'blueLight',
            },
            {
                variant: 'pink',
                number: '114',
                className: 'text-black',
            },
            {
                variant: 'pink',
                number: '499',
                className: 'text-black',
            },
            {
                isDisabled: true,
                number: '179',
            },
            {
                isDisabled: true,
                number: '748',
            },
        ],
        date: 'С 16 сентября',
        title: (
            <>
                Меняются маршруты у &nbsp;
                <Image
                    img={mmLogo}
                    alt=""
                    className="inline-block w-[2.1rem] sm:w-[3.4rem]"
                />
                <Image
                    img={getLineIcon(10)}
                    alt="line"
                    className="inline-block"
                />
                &nbsp;Яхромская
            </>
        ),
        description: <FirstDescription />,
        imgScheme: yahromskaya1,
        isMain: true,
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
        description: <SecondDescription />,
        imgScheme: lianozovo4,
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
]
