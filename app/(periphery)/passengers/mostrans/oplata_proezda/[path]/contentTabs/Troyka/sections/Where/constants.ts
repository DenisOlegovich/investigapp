import { ListProps } from '@/components/List'

export const heading = 'Где взять карту «Тройка»?'

export const whereBuyList: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'В кассах и автоматах по продаже билетов в метро и монорельсовой транспортной системы.',
        },
        {
            title: 'В автоматизированных киосках ГУП «Мосгортранс» возле автобусных остановок.',
        },
        {
            title: 'В кассах АО «Центральная ППК» и АО «МТ ППК» (пригородных электропоездов).',
        },
    ],
}

export const typeOfCardsList: ListProps = {
    variant: 'unordered',
    markerSpacing: 0.8,
    items: [
        {
            title: 'В сувенирных магазинах,',
        },
        {
            title: 'на стойках «Живое общение» в метро,',
        },
        {
            title: 'в интернет-магазине мосметро.',
        },
    ],
}
