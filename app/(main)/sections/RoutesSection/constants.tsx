import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { Pages } from '@/constants'
import { styles } from './styles'
import BusHalfIcon from '@/components/icons/BusHalfIcon'
import TrafficTopIcon from '@/components/icons/TrafficTopIcon'
import { cn } from '@/utils'
import { coddLogo, metroLabelLogo, metroMap, probki } from '@/Images'

const trafficNumber = 5
const trafficBg = 'yellow'

const colorVariants = {
    red: 'bg-red',
    yellow: 'bg-yellow-warning',
    green: 'bg-[#0abe0a]',
}

export const cards: Omit<CardProps<'link'>, 'type'>[] = [
    {
        href: Pages.map,
        title: 'Схема метро и МЦК',
        className: styles.map,
        body: (
            <>
                <Image
                    img={metroLabelLogo}
                    alt=""
                    className={styles.mapIcon}
                />
                <Image
                    img={metroMap}
                    alt="map"
                    className={styles.mapImg}
                />
            </>
        ),
        anatomy: {
            title: styles.mapTitle,
            body: styles.mapBody,
        },
    },
    {
        href: Pages.magistral,
        title: 'Магистраль — новая сеть маршрутов города',
        className: styles.magistral,
        body: <BusHalfIcon className={styles.magistralIcon} />,
        anatomy: {
            title: styles.magistralTitle,
        },
    },
    {
        href: Pages.closures,
        className: styles.probki,
        body: (
            <>
                <div className={styles.probkiHeader}>
                    <div className={styles.probkiTitleWrapper}>
                        <h2 className={styles.probkiTitle}>Пробки и перекрытия</h2>
                        <div className={cn(`${colorVariants[trafficBg]} `, styles.probkiTraffic)}>
                            <TrafficTopIcon className={styles.probkiTrafficTopIcon} />
                            {trafficNumber}
                        </div>
                    </div>
                    <Image
                        img={coddLogo}
                        alt="map"
                        className={styles.probkiIcon}
                    />
                </div>
                <Image
                    img={probki}
                    alt="map"
                    className={styles.probkiImg}
                />
            </>
        ),
        anatomy: {
            body: styles.probkiBody,
        },
    },
]
