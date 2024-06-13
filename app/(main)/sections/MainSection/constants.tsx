import { liksutov, ticketsNew } from '@/Images'
import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { ExternalLinks, Pages } from '@/constants'
import { styles } from './styles'
import DeliveryIcon from '@/components/icons/DeliveryIcon'

export const cards: Omit<CardProps<'link'>, 'type'>[] = [
    {
        href: Pages.oplataProezda,
        title: 'Оплата проезда',
        subtitle: 'Все что нужно знать о ценах и способах оплаты',
        className: styles.oplataProezda,
        body: (
            <Image
                img={ticketsNew}
                alt="tickets new"
                className={styles.oplataProezdaImg}
            />
        ),
        anatomy: {
            title: styles.oplataProezdaTitle,
            subtitle: styles.oplataProezdaSubtitle,
            body: styles.oplataProezdaBody,
        },
    },
    {
        href: Pages.liksutov,
        title: 'Колонка Максима Ликсутова',
        className: styles.liksutov,
        body: (
            <Image
                img={liksutov}
                alt="liksutov"
                className={styles.liksutovImage}
            />
        ),
        anatomy: {
            title: styles.liksutovTitle,
            body: styles.liksutovBody,
        },
    },
    {
        href: ExternalLinks.specialPermitSubmit,
        title: 'Запись для получения спецразрешения',
        className: styles.specialPermitSubmit,
        anatomy: {
            title: styles.specialPermitSubmitTitle,
        },
    },
]

export const deliveryCard: CardProps<'link'> = {
    type: 'link',
    href: Pages.delivery,
    title: 'Курьерские службы доставки',
    className: styles.delivery,
    body: <DeliveryIcon className={styles.deliveryIcon} />,
    anatomy: {
        title: styles.deliveryTitle,
    },
}
