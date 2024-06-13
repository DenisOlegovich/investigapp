import { TariffsProps } from '@/components/Tariffs'
import { TextAlertProps } from '@/components/TextAlert'
import { ReactNode } from 'react'

export type Content = {
    title?: string
    description?: ReactNode
    items: TariffsProps['items']
}

export const tariffs: Content[] = [
    {
        description:
            'Дает право совершать поездки на метро, монорельсе, МЦК, МЦД зона «Центральная» или наземном транспорте.',
        items: [
            {
                subtitle: '1 сутки',
                title: '315 ₽',
            },
            {
                subtitle: '3 суток',
                title: '600 ₽',
            },
            {
                subtitle: '30 дней',
                title: '2 730 ₽',
            },
            {
                subtitle: '90 дней',
                title: '6 600 ₽',
            },
            {
                subtitle: '365 дней',
                title: '19 500 ₽',
            },
        ],
    },
    {
        title: 'Билет «Единый»',
        description:
            'Дает право совершать поездки на метро, монорельсе, МЦК, МЦД зоны «Центральная», «Пригород» или наземном транспорте.',
        items: [
            {
                subtitle: '30 дней',
                title: '3 240 ₽',
            },
            {
                subtitle: '90 дней',
                title: '8 370 ₽',
            },
            {
                subtitle: '365 дней',
                title: '24 450 ₽',
            },
        ],
    },
]

export const alert: TextAlertProps = {
    title: 'Важно!',
    description:
        'Единые проездные билеты без лимита поездок на 1, 3 суток, записанные на бумажный бланк билета, не предоставляют права проезда на МЦД.',
}
