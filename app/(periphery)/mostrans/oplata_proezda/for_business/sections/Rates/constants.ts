import { TariffsProps } from '@/components/Tariffs'

export enum RatesKind {
    with = 'with',
    without = 'without',
    withoutPeriphery = 'withoutPeriphery',
    wallet = 'wallet',
    waterTransport = 'waterTransport',
    groundTransport = 'groundTransport',
}

export const options = [
    {
        value: RatesKind.with,
        label: 'C лимитом',
    },
    {
        value: RatesKind.without,
        label: 'Без лимита',
    },
]

export const tariffs: Record<string, TariffsProps[]> = {
    [RatesKind.without]: [
        {
            title: 'Без лимита',
            items: [
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
    ],
    [RatesKind.with]: [
        {
            title: 'C лимитом',
            items: [
                {
                    subtitle: '60 поездок',
                    title: '3 150 ₽',
                },
            ],
        },
    ],
    [RatesKind.withoutPeriphery]: [
        {
            title: 'Без лимита',
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
    ],
    [RatesKind.wallet]: [
        {
            title: 'Стоимость 1 поездки по билету «Кошелек» составит',
            items: [
                {
                    subtitle: 'Зона «Центральная» или наземный транспорт',
                    title: '54\u00A0₽',
                },
                {
                    subtitle: 'Зоны «Центральная», «Пригород»',
                    title: '71\u00A0₽',
                },
                {
                    subtitle: 'Неограниченное число пересадок в течение 90 минут',
                    title: '81\u00A0₽',
                },
            ],
        },
    ],
    [RatesKind.waterTransport]: [
        {
            items: [
                {
                    subtitle: 'рабочие дни с 1 мая по 31 августа',
                    title: '150\u00A0₽',
                },
                {
                    subtitle: 'любые дни с 1 сентября по 30 апреля»',
                    title: '150\u00A0₽',
                },
                {
                    subtitle: 'выходные и праздничные дни с 1 мая по 31 августа',
                    title: '300\u00A0₽',
                },
            ],
        },
    ],
    [RatesKind.groundTransport]: [
        {
            title: 'Без лимита',
            items: [
                {
                    subtitle: 'Зоны А, Б «ТАТ» 30 дней',
                    title: '1\u00A0700\u00A0₽',
                },
                {
                    subtitle: 'Зоны А, Б «ТАТ» 90 дней',
                    title: '4\u00A0520\u00A0₽',
                },
                {
                    subtitle: 'Зоны А, Б «ТАТ» на 365 дней',
                    title: '14\u00A0000\u00A0₽',
                },
            ],
        },
    ],
}
