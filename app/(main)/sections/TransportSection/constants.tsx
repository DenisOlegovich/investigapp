import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { Pages } from '@/constants'
import { styles } from './styles'
import BoatIcon from '@/components/icons/BoatIcon'
import EvacationIllustration from '@/components/icons/illustrations/EvacationIllustration'
import { cargoMap, cargoPass, electroMap } from '@/Images'

export const cards: Omit<CardProps<'link'>, 'type'>[] = [
    {
        href: Pages.mapCargoFrame,
        title: 'Карта грузового каркаса',
        className: styles.mapCargoFrame,
        body: (
            <>
                <div className={styles.mapHeader} />
                <Image
                    img={cargoMap}
                    alt="map"
                    className={styles.mapImg}
                />
            </>
        ),
        anatomy: {
            body: styles.mapBody,
        },
    },
    {
        href: Pages.reka,
        title: 'Речной транспорт',
        className: styles.reka,
        body: <BoatIcon className={styles.rekaIcon} />,
    },
    {
        href: Pages.searchCarPound,
        title: 'Найти\nэвакуированный автомобиль',
        className: styles.searchCarPound,
        body: <EvacationIllustration className={styles.searchCarPoundImage} />,
    },
    {
        href: Pages.gruzovikiReestr,
        title: 'Проверить пропуск для грузового транспорта',
        className: styles.gruzovikiReestr,
        body: (
            <Image
                img={cargoPass}
                alt=""
                className={styles.gruzovikiReestrImg}
            />
        ),
        anatomy: {
            body: styles.gruzovikiReestrBody,
            title: styles.gruzovikiReestrTitle,
        },
    },
    {
        href: Pages.electro,
        title: 'Энергия Москвы',
        className: styles.electro,
        body: (
            <>
                <div className={styles.mapHeader} />
                <Image
                    img={electroMap}
                    alt="map"
                    className={styles.mapImg}
                />
            </>
        ),
        anatomy: {
            body: styles.mapBody,
        },
    },
]
