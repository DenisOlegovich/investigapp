import { ExternalLinks } from '@/constants'

import Link from '@/components/Link'
import { ListProps } from '@/components/List'

export const freePassList: ListProps = {
    markerSpacing: 0.8,
    variant: 'unordered',
    items: [
        {
            title: 'транспортных средств с номерами Москвы и Московской области;',
        },
        {
            title: 'транспорта общего пользования (наземный городской транспорт);',
        },
        {
            title: 'такси с разрешением на перевозки в Москве и Московской области;',
        },
        {
            title: 'транспортных средств, на которых осуществляются регулярные перевозки по межрегиональным маршрутам;',
        },
        {
            title: 'специального транспорта, оборудованного устройствами для подачи специальных световых и звуковых сигналов;',
        },
        {
            title: 'транспорта организаций федеральной почтовой связи, осуществляющих перевозки почтовых отправлений и денежных средств, а также сопровождающих почтовые отправления и денежные средства работников таких организаций.',
        },
    ],
}

export const travelOnMSDList: ListProps = {
    markerSpacing: 0.8,
    variant: 'unordered',
    items: [
        {
            title: 'автомобиль дважды пересек границы ЦКАД (в любом месте) в течение 24 часов и проехал по МСД;',
        },
        {
            title: 'между въездом автомобиля на МСД и съездом с МСД прошло не более 2 часов.',
        },
    ],
}

export const notHaveTimeList: ListProps = {
    markerSpacing: 0.8,
    variant: 'unordered',
    items: [
        {
            title: (
                <>
                    приложение&nbsp;
                    <Link
                        type="external"
                        href={ExternalLinks.parkingMosRu}
                    >
                        «Парковки России»
                    </Link>
                </>
            ),
        },
        {
            title: (
                <Link
                    type="external"
                    href={ExternalLinks.msd}
                >
                    msd.mos.ru
                </Link>
            ),
        },
        {
            title: (
                <Link
                    type="external"
                    href={ExternalLinks.gosuslugi}
                >
                    gosuslugi.ru
                </Link>
            ),
        },
        {
            title: 'в банке по реквизитам.',
        },
    ],
}
