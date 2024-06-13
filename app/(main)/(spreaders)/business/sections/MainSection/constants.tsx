import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import HandshakeIcon from '@/components/icons/HandshakeIcon'
import { Pages } from '@/constants'
import { styles } from './styles'
import { groupFareBus, trainRoutes } from '@/Images'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'link',
        href: Pages.farePaymentBusiness,
        title: 'Оплата проезда для бизнеса',
        className: styles.oplataProezda,
        body: (
            <Image
                img={groupFareBus}
                alt="tickets new"
                className={styles.oplataProezdaImg}
            />
        ),
        anatomy: {
            title: styles.oplataProezdaTitle,
            body: styles.oplataProezdaBody,
        },
    },
    {
        type: 'link',
        href: Pages.helpingBusinesses,
        title: 'Меры поддержки бизнеса',
        className: styles.helping,
        body: <HandshakeIcon className={styles.helpingIcon} />,
        anatomy: {
            title: styles.helpingTitle,
            body: styles.helpingBody,
        },
    },
    {
        type: 'link',
        href: Pages.priceParking,
        title: 'Абонементы на парковку для бизнеса',
        subtitle: 'На месяц или год, оплата по безналичному расчету',
        className: styles.priceParking,
        body: (
            <Image
                img={trainRoutes}
                alt="mcd"
                className={styles.priceParkingImg}
            />
        ),
        anatomy: {
            title: styles.priceParkingTitle,
            subtitle: styles.priceParkingSubtitle,
            body: styles.priceParkingBody,
        },
    },
]
