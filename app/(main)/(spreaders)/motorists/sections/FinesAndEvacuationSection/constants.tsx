import { CardProps } from '@/components/Card/types'
import { Pages } from '@/constants'
import Image from '@/components/Image'
import { styles } from './styles'
import { cameraMap, evacuationCar } from '@/Images'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'link',
        href: Pages.camerasMap,
        title: 'Камеры фотофиксации на карте',
        body: (
            <>
                <div className={styles.mapHeader} />
                <Image
                    img={cameraMap}
                    alt=""
                    className={styles.mapImage}
                />
            </>
        ),
        className: styles.mapWrapper,
        anatomy: {
            title: styles.mapTitle,
            body: styles.mapBody,
        },
    },
    {
        type: 'link',
        href: Pages.findCarMap,
        title: 'Найти эвакуированный автомобиль',
        body: (
            <Image
                img={evacuationCar}
                alt=""
                className={styles.carImage}
            />
        ),
        className: styles.carWrapper,
        anatomy: {
            title: styles.carTitle,
            body: styles.carBody,
        },
    },
]

export const questions = [
    {
        title: 'Как оформлять ДТП по Европротоколу',
        href: Pages.accidentProtocol,
    },
    {
        title: 'Получение информации о штрафах в электронном виде',
        href: Pages.finesInfo,
    },
]
