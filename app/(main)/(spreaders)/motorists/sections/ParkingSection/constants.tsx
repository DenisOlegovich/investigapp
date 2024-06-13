import { CardProps } from '@/components/Card/types'
import { Pages } from '@/constants'
import Image from '@/components/Image'
import { styles } from './styles'
import { cn } from '@/utils'
import { parkingCar, parkingIntercepting, parkingMap, parkovki } from '@/Images'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'link',
        href: Pages.parkingMap,
        title: 'Карта парковок',
        body: (
            <>
                <div className={styles.mapHeader} />
                <Image
                    img={parkingMap}
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
        href: Pages.parkingPay,
        title: 'Оплата парковки',
        body: (
            <Image
                img={parkovki}
                alt=""
                className={styles.payImage}
            />
        ),
        className: styles.payWrapper,
        anatomy: {
            title: styles.payTitle,
            body: styles.payBody,
        },
    },
    {
        type: 'link',
        href: Pages.parkingPermit,
        title: 'Парковочное разрешение',
        body: (
            <Image
                img={parkingCar}
                alt=""
                className={styles.permitCarImage}
            />
        ),
        className: styles.permitWrapper,
        anatomy: {
            title: styles.permitTitle,
            body: styles.permitBody,
        },
    },
    {
        type: 'link',
        href: Pages.parkingInterception,
        title: 'Перехватывающие парковки',
        body: (
            <Image
                img={parkingIntercepting}
                alt=""
                className={styles.interceptionImage}
            />
        ),
        className: styles.interceptionWrapper,
        anatomy: {
            title: styles.interceptionTitle,
            body: styles.interceptionBody,
        },
    },
    {
        type: 'link',
        href: Pages.parkingBalance,
        title: 'Пополнить парковочный\u00A0счет',
        body: <p className={cn('text-xs', 'px-[0.4rem]', 'rounded-[1.3rem]', 'bg-[#25B54B]')}>parking.mos.ru</p>,
        className: styles.balanceWrapper,
        anatomy: {
            title: styles.balanceTitle,
            body: styles.balanceBody,
        },
    },
]
