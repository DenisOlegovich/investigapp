import { TariffsProps } from '@/components/Tariffs'
import { TextAlertProps } from '@/components/TextAlert'

export enum RatesKind {
    'with' = 'with',
    'without' = 'without',
}

export const heading = 'Тарифы поездок'

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
            title: 'На «Едином»',
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
            title: 'На проездных «ТАТ» и зоны Б',
            items: [
                {
                    subtitle: '30 дней ТАТ и зоны Б',
                    title: '1 700 ₽',
                },
                {
                    subtitle: 'ТАТ на 90 дней',
                    title: '4 520 ₽',
                },
                {
                    subtitle: 'ТАТ на 365 дней',
                    title: '14 000 ₽',
                },
            ],
        },
    ],
    [RatesKind.with]: [
        {
            title: 'На «Едином»',
            items: [
                {
                    subtitle: '1 поездка',
                    title: '65 ₽',
                },
                {
                    subtitle: '2 поездки',
                    title: '130 ₽',
                },
                {
                    subtitle: '60 поездок',
                    title: '3 150 ₽',
                },
            ],
        },
    ],
}

export const alert: TextAlertProps = {
    title: 'Важно!',
    description:
        '60 поездок, а также безлимитные поездки на 30, 90 и 365 дней можно купить только записав их на карту «Тройка».',
}
