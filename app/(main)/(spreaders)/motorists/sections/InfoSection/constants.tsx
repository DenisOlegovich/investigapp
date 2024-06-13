import { carsharing, moscowMap, roadCoordinator } from '@/Images'
import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { Pages } from '@/constants'
import { cn } from '@/utils'
import { styles } from './styles'
import HotLinks from '@/components/HotLinks'

const cargoData = [
    { title: 'Проверить пропуск', href: Pages.gruzovikiReestr },
    { title: 'Оформить пропуск', href: Pages.registerPass },
    { title: 'Карта грузового каркаса', href: Pages.cargoframe },
]

export const rows: { [key: string]: CardProps<'link' | 'box'>[] } = {
    first: [
        {
            type: 'link',
            href: Pages.carsharing,
            title: 'Каршеринг',
            subtitle: 'Как\u00A0пользоваться,\u00A0в\u00A0чем преимущества,\u00A0список\u00A0компаний',
            body: (
                <div>
                    <div
                        className={cn('absolute', 'w-full', 'h-full', 'z-10')}
                        style={{
                            background: 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 37.75%)',
                        }}
                    />
                    <Image
                        img={carsharing}
                        alt=""
                        className={styles.carsharingImage}
                    />
                </div>
            ),
            className: styles.carsharingWrapper,
            anatomy: {
                container: styles.carsharingContainer,
                body: styles.carsharingBody,
            },
        },
        {
            type: 'link',
            href: Pages.energyMoscow,
            title: 'Энергия Москвы',
            body: (
                <div className={cn('w-full h-full')}>
                    <div
                        className={cn(
                            'w-[83.3rem]',
                            'h-[15.5rem]',
                            'bg-white',
                            'absolute',
                            'right-[50%]',
                            'rounded-[50%]',
                            'transform translate-x-[50%] translate-y-[-50%]'
                        )}
                    />
                    <Image
                        img={moscowMap}
                        alt=""
                        className={styles.energyImage}
                    />
                </div>
            ),
            className: styles.energyWrapper,
            anatomy: {
                title: styles.energyTitle,
                body: styles.energyBody,
            },
        },
    ],
    seconds: [
        {
            type: 'link',
            href: Pages.meetingsCoordinator,
            title: 'Встречи с дорожным координатором',
            body: (
                <Image
                    img={roadCoordinator}
                    alt=""
                    className={styles.meetingImage}
                />
            ),
            className: styles.meetingWrapper,
            anatomy: {
                title: styles.meetingTitle,
                body: styles.meetingBody,
            },
        },
        {
            type: 'box',
            title: 'Грузовая логистика',
            className: styles.cargoWrapper,
            body: (
                <HotLinks
                    items={cargoData}
                    anatomy={{
                        items: 'gap-[1.2rem] md:gap-[1.2rem]',
                        link: styles.cargoLink,
                    }}
                />
            ),
            anatomy: {},
        },
    ],
}

export const questions = [
    {
        title: 'Проверить лицензию такси',
        href: Pages.cargoframe,
    },
]
