import { ListProps } from '@/components/List'

export const heading = 'Как пополнять'

export const list: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'В кассах, киосках и автоматах Мосгортранса для поездок на наземном транспорте и в кассах метро — для поездок на метро, монорельсе, МЦК, зоне «Центральная» МЦД и на наземном транспорте.',
        },
        {
            title: 'Через терминалы «Элекснет».',
        },
        {
            title: 'Через мобильные приложения (для телефонов на базе Android с модулем NFC).',
        },
    ],
}
