import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import BikeFillIcon from '@/components/icons/BikeFillIcon'
import ScooterIcon from '@/components/icons/ScooterIcon'
import MetroLabelLogo from '@/components/icons/logos/MetroLabelLogo'
import { Pages } from '@/constants'
import { styles } from './styles'
import { badG, inosmi, magistralCards2, metroMap, repairsClosuresMetro, schedule2x, taxi } from '@/Images'

export const cardBlocks: { [key: string]: CardProps<'link' | 'box'>[] } = {
    first: [
        {
            type: 'link',
            href: Pages.map,
            title: 'Схема\u00A0метро, МЦК\u00A0и\u00A0МЦД',
            className: styles.map,
            body: (
                <>
                    <MetroLabelLogo className={styles.mapIcon} />
                    <Image
                        img={metroMap}
                        alt="metro map"
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
            type: 'link',
            href: Pages.repairsClosuresMetro,
            title: 'График ремонтов и закрытий станций метро',
            className: styles.repairsClosuresMetro,
            body: (
                <Image
                    img={repairsClosuresMetro}
                    alt="repairs closures metro"
                    className={styles.repairsClosuresMetroImg}
                />
            ),
            anatomy: {
                title: styles.repairsClosuresMetroTitle,
                body: styles.repairsClosuresMetroBody,
            },
        },
        {
            type: 'link',
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
        {
            type: 'link',
            href: Pages.enNews,
            title: 'The Moscow Transport press releases',
            className: styles.enNews,
            body: (
                <Image
                    img={inosmi}
                    alt="inosmi"
                    className={styles.enNewsImg}
                />
            ),
            anatomy: {
                title: styles.enNewsTitle,
                body: styles.enNewsBody,
            },
        },
    ],
    second: [
        {
            type: 'link',
            href: Pages.transportMagistral,
            title: 'Магистраль',
            className: styles.transportMagistral,
            body: (
                <Image
                    img={magistralCards2}
                    alt="magistral"
                    className={styles.transportMagistralImg}
                />
            ),
            anatomy: {
                title: styles.transportMagistralTitle,
                body: styles.transportMagistralBody,
            },
        },
        {
            type: 'link',
            href: Pages.payFine,
            title: 'Штрафы ГКУ «Организатор перевозок»',
            className: styles.payFine,
            body: (
                <Image
                    img={badG}
                    alt="badg"
                    className={styles.payFineImg}
                />
            ),
            anatomy: {
                title: styles.payFineTitle,
                body: styles.payFineBody,
                link: styles.payFineLink,
            },
        },
    ],
    third: [
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
        {
            type: 'link',
            href: Pages.kickscooter,
            title: 'Самокаты',
            className: styles.kickscooter,
            body: <ScooterIcon className={styles.kickscooterIcon} />,
            anatomy: {
                title: styles.kickscooterTitle,
                body: styles.kickscooterBody,
            },
        },
    ],
    fourth: [
        {
            type: 'link',
            href: Pages.taxi,
            title: 'Такcи',
            className: styles.taxi,
            body: (
                <Image
                    img={taxi}
                    alt="taxi"
                    className={styles.taxiImg}
                />
            ),
            anatomy: {
                title: styles.taxiTitle,
                body: styles.taxiBody,
            },
        },
    ],
}
