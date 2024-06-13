import { ListProps } from '@/components/List'

export const heading = 'Карту можно получить:'

export const list: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'в кассах ГУП «Московский метрополитен», кассах Московского Центрального кольца (МЦК),',
        },
        {
            title: 'в автоматизированных киосках ГУП «Мосгортранс», в кассах ОАО «Центральная ППК» и ОАО «МТ ППК».',
        },
    ],
}
