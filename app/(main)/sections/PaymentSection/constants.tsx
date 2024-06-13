import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { Pages } from '@/constants'
import { styles } from './styles'
import BikeFillIcon from '@/components/icons/BikeFillIcon'
import ScooterIcon from '@/components/icons/ScooterIcon'
import { parkovki, schedule2x, troika2x } from '@/Images'

export const cards: Omit<CardProps<'link'>, 'type'>[] = [
    {
        href: Pages.parkingPay,
        title: 'Оплата парковки',
        className: styles.payParking,
        body: (
            <Image
                img={parkovki}
                alt="parking"
                className={styles.payParkingImg}
            />
        ),
        anatomy: {
            title: styles.payParkingTitle,
            body: styles.payParkingBody,
        },
    },
    {
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
        href: Pages.bicycle,
        title: 'Велотранспорт',
        className: styles.bicycle,
        body: <BikeFillIcon className={styles.bicycleIcon} />,
        anatomy: {
            title: styles.bicycleTitle,
            body: styles.bicycleBody,
        },
    },
    {
        href: Pages.kickscooter,
        title: 'Самокаты',
        className: styles.kickscooter,
        body: <ScooterIcon className={styles.kickscooterIcon} />,
        anatomy: {
            title: styles.kickscooterTitle,
            body: styles.kickscooterBody,
        },
    },
    {
        href: Pages.transportSchedule,
        title: 'Расписание и схемы движения городского транспорта',
        className: styles.transportSchedule,
        body: (
            <Image
                img={schedule2x}
                alt="schedule"
                className={styles.transportScheduleImg}
            />
        ),
        anatomy: {
            title: styles.transportScheduleTitle,
            body: styles.transportScheduleBody,
        },
    },
]
