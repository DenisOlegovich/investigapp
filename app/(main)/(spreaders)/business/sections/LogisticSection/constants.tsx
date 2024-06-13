import { cargoPass, mapGruzovik } from '@/Images'
import { CardProps } from '@/components/Card/types'
import HotLinks from '@/components/HotLinks'
import Image from '@/components/Image'
import { ExternalLinks, Pages } from '@/constants'
import { cn } from '@/utils'
import { styles } from './styles'

export const registrationPasses = [
    {
        href: ExternalLinks.oneTimePasses,
        title: 'Разовый',
    },
    {
        href: ExternalLinks.multiPasses,
        title: 'Многоразовый до 1 года',
    },
    {
        href: `${Pages.gruzovikiFaq}#qa-189`,
        title: 'Необходимые документы для оформления пропуска',
    },
]

export const questions = [
    {
        href: Pages.cargoframe,
        title: 'Что такое грузовой каркас',
    },
    {
        href: Pages.gruzovikiParking,
        title: 'Про парковки для грузовиков и их организацию',
    },
    {
        href: Pages.ovnesenii,
        title: 'О внесении в реестр действующих пропусков',
    },
    {
        href: Pages.platon,
        title: 'Система Платон',
    },
]

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'link',
        href: Pages.gruzovikiReestr,
        title: 'Проверить пропуск для грузового транспорта',
        className: styles.gruzovikiReestr,
        body: (
            <Image
                img={cargoPass}
                alt="tickets new"
                className={styles.gruzovikiReestrImg}
            />
        ),
        anatomy: {
            title: styles.gruzovikiReestrTitle,
            body: styles.gruzovikiReestrBody,
        },
    },
    {
        type: 'link',
        href: Pages.mapGruzovik,
        title: 'Карта грузового каркаса',
        className: cn('bg-grey-light', 'xl:row-span-2', 'h-[31.2rem] md:h-auto', 'overflow-hidden'),
        body: (
            <>
                <div className={styles.mapGruzovikHeader} />
                <Image
                    img={mapGruzovik}
                    alt="tickets new"
                    className={styles.mapGruzovikImage}
                />
            </>
        ),
        anatomy: {
            title: cn('md:text-2xl text-black', 'z-10', 'md:mr-[35%] xl:mr-0'),
            body: cn('absolute', 'bottom-0 top-0 right-0 left-0', 'overflow-hidden'),
        },
    },
    {
        type: 'box',
        title: 'Оформление пропуска на въезд',
        className: styles.freightLogistic,
        body: (
            <HotLinks
                items={registrationPasses}
                anatomy={{
                    items: 'gap-[1.2rem] md:gap-[1.2rem]',
                    link: styles.freightLogisticLink,
                }}
            />
        ),
        anatomy: {
            title: styles.freightLogisticTitle,
            body: styles.freightLogisticBody,
        },
    },
]
