import { ReactNode } from 'react'

export type StatisticProps = {
    title: string | ReactNode
    description: string | ReactNode
}

export const statistics: StatisticProps[] = [
    {
        title: 'на 40%',
        description: 'выросло количество пассажиров в общественном транспорте',
    },
    {
        title: (
            <>
                5–10 <span className="hidden md:inline-block">минут</span>
            </>
        ),
        description: (
            <>
                <span className="inline-block md:hidden">минут&ensp;</span>интервал движения магистральных автобусов в
                центре Москвы
            </>
        ),
    },
    {
        title: '86%',
        description: 'пассажиров готовы пройти до остановки дальше, если время пути уменьшится',
    },
    {
        title: '73%',
        description: 'пассажиров согласны на бесплатную пересадку, если общее время в дороге сократится',
    },
]
