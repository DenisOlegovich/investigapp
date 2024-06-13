import { cardMoscow, cardMoscowSchool, cardMoscowStudent } from '@/Images'
import { TariffsProps } from '@/components/Tariffs'

export const cards = [cardMoscow, cardMoscowSchool, cardMoscowStudent]

export const tariffs: TariffsProps[] = [
    {
        title: 'На наземном транспорте',
        items: [
            {
                subtitle: '30 дней',
                title: '325 ₽',
            },
            {
                subtitle: '90 дней',
                title: '935 ₽',
            },
        ],
    },
    {
        title: 'В метро, монорельсе, МЦК, МЦД зона «Центральная»',
        items: [
            {
                subtitle: '30 дней',
                title: '510 ₽',
            },
            {
                subtitle: '90 дней',
                title: '1 440 ₽',
            },
        ],
    },
    {
        title: 'В метро, монорельсе, МЦК, МЦД зона «Центральная», наземный транспорт',
        items: [
            {
                subtitle: '30 дней',
                title: '770 ₽',
            },
            {
                subtitle: '90 дней',
                title: '2 210 ₽',
            },
        ],
    },
    {
        title: 'В метро, монорельсе, МЦК, МЦД зона «Центральная» и «Пригород»',
        items: [
            {
                subtitle: '30 дней',
                title: '940 ₽',
            },
        ],
    },
    {
        title: 'В метро, монорельсе, МЦК, МЦД зона «Центральная» и «Пригород», наземный транспорт',
        items: [
            {
                subtitle: '30 дней',
                title: '1 200 ₽',
            },
        ],
    },
    {
        title: 'В метро, монорельсе, МЦК, МЦД зона «Центральная» и «Пригород»',
        items: [
            {
                subtitle: '90 дней',
                title: '2 700 ₽',
            },
        ],
    },
    {
        title: 'В метро, монорельсе, МЦК, МЦД зона «Центральная» и «Пригород», наземный транспорт',
        items: [
            {
                subtitle: '90 дней',
                title: '3 440 ₽',
            },
        ],
    },
]
