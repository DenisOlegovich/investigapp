import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import BoatIcon from '@/components/icons/BoatIcon'
import DisabledPassengersIcon from '@/components/icons/DisabledPassengersIcon'
import MoonIcon from '@/components/icons/MoonIcon'
import { Pages } from '@/constants'
import { styles } from './styles'
import { maskGroupPedestrian } from '@/Images'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'link',
        href: Pages.pedestrianZones,
        title: 'Карта пешеходных зон',
        className: styles.pedestrianZones,
        body: (
            <Image
                img={maskGroupPedestrian}
                alt="pedestrian"
                className={styles.pedestrianZonesImg}
            />
        ),
        anatomy: {
            title: styles.pedestrianZonesTitle,
            subtitle: styles.pedestrianZonesSubtitle,
            body: styles.pedestrianZonesBody,
        },
    },
    {
        type: 'link',
        href: Pages.reka,
        title: 'Речной транспорт',
        className: styles.reka,
        body: <BoatIcon className={styles.rekaIcon} />,
        anatomy: {
            title: styles.cardTitle,
            body: styles.rekaBody,
        },
    },
    {
        type: 'link',
        href: Pages.mobilityPassengers,
        title: 'Маломобильным пассажирам',
        className: styles.mobilityPassengers,
        body: <DisabledPassengersIcon className={styles.mobilityPassengersIcon} />,
        anatomy: {
            title: styles.cardTitle,
            body: styles.mobilityPassengersBody,
        },
    },
    {
        type: 'link',
        href: Pages.nightRoutes,
        title: 'Ночные автобусы',
        className: styles.nightRoutes,
        body: <MoonIcon className={styles.nightRoutesIcon} />,
        anatomy: {
            title: styles.cardTitle,
            body: styles.nightRoutesBody,
        },
    },
]

export const questions = [
    {
        title: 'Как правильно использовать велосипед в городе?',
        href: `${Pages.faq}#qa-58`,
    },
    {
        title: 'Можно ли провозить велосипед в трамвае, автобусе?',
        href: `${Pages.faq}#qa-146`,
    },
    {
        title: 'Можно ли провозить велосипед в метро, МЦК и МЦД?',
        href: `${Pages.faq}#qa-147`,
    },
]
