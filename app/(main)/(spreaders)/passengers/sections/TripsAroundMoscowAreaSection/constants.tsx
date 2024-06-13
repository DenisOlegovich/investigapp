import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import BikeFillIcon from '@/components/icons/BikeFillIcon'
import { Pages } from '@/constants'
import { styles } from './styles'
import { empty, group202TarifAll, trainRoutes, troika2x } from '@/Images'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'link',
        href: Pages.trainsRules,
        title: 'Пригородный транспорт',
        subtitle: 'Маршруты и расписание поездов, оплата проезда, вокзалы',
        className: styles.trainsRules,
        body: (
            <Image
                img={empty}
                alt="empty"
                className={styles.trainsRulesImg}
            />
        ),
        anatomy: {
            title: styles.trainsRulesTitle,
            subtitle: styles.trainsRulesSubtitle,
            body: styles.trainsRulesBody,
        },
    },
    {
        type: 'link',
        href: Pages.trains,
        title: 'Направления электричек',
        className: styles.trains,
        body: (
            <Image
                img={trainRoutes}
                alt="train routes"
                className={styles.trainsImg}
            />
        ),
        anatomy: {
            title: styles.trainsTitle,
            body: styles.trainsBody,
            link: styles.trainsLink
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
            title: styles.troikaTitle,
            body: styles.troikaBody,
        },
    },
    {
        type: 'link',
        href: Pages.rates,
        title: 'Тарифы и зоны оплаты',
        className: styles.rates,
        body: (
            <Image
                img={group202TarifAll}
                alt="tarif all"
                className={styles.ratesImg}
            />
        ),
        anatomy: {
            title: styles.ratesTitle,
            body: styles.ratesBody,
        },
    },
    {
        type: 'link',
        href: Pages.bicycle,
        title: 'Велотранспорт',
        className: styles.bicycle,
        body: <BikeFillIcon className={styles.bicycleIcon} />,
        anatomy: {
            title: styles.bicycleTitle,
            body: styles.bicycleBody,
        },
    },
]
