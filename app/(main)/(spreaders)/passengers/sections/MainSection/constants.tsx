import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { Pages } from '@/constants'
import { styles } from './styles'
import { mcd22x, ticketsNew, troika2x } from '@/Images'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'link',
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
            title: styles.cardTitle,
            subtitle: styles.oplataProezdaSubtitle,
            body: styles.oplataProezdaBody,
        },
    },
    {
        type: 'link',
        href: Pages.troika,
        title: 'Пополнение карты «Тройка»',
        className: styles.troika,
        body: (
            <Image
                img={troika2x}
                alt="troika"
                className={styles.troikaImg}
            />
        ),
        anatomy: {
            title: styles.cardTitle,
            body: styles.troikaBody,
        },
    },
    {
        type: 'link',
        href: Pages.aboutMCD,
        title: 'МЦД',
        className: styles.aboutMCD,
        body: (
            <Image
                img={mcd22x}
                alt="mcd"
                className={styles.aboutMCDImg}
            />
        ),
        anatomy: {
            title: styles.cardTitle,
            body: styles.aboutMCDBody,
        },
    },
]
