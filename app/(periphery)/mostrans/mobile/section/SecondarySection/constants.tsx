import { AppLinks } from '@/constants/mobileAppLinks'
import { ExternalLinks } from '@/constants/externalLinks'
import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { aeroexpressLogo, helperMoscowLogo, veloBikeLogo } from '@/Images'

import { styles } from './styles'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'box',
        title: 'Аэроэкспресс',
        subtitle: 'Покупайте билеты и проходите через турникет просто прикладывая телефон',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.aeroexpressAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.aeroexpressGooglePlay}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        Google Play
                    </Link>
                </div>
            </>
        ),
        extra: (
            <Image
                img={aeroexpressLogo}
                alt="Аэроэкспресс"
                className={styles.appImg}
            />
        ),
        anatomy: {
            title: styles.appTitle,
            subtitle: styles.appSubtitle,
            body: styles.appBody,
            extra: styles.appExtra,
        },
    },
    {
        type: 'box',
        title: 'Помощник Москвы',
        subtitle: 'Сообщайте о неправильной парковке и делайте город лучше',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.helperMoscowAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.helperMoscowGooglePlay}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        Google Play
                    </Link>
                    <Link
                        href={AppLinks.helperMoscowAppGallery}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppGallery
                    </Link>
                </div>
            </>
        ),
        extra: (
            <Image
                img={helperMoscowLogo}
                alt="Помощник Москвы"
                className={styles.appImg}
            />
        ),
        anatomy: {
            title: styles.appTitle,
            subtitle: styles.appSubtitle,
            body: styles.appBody,
            extra: styles.appExtra,
        },
    },
    {
        type: 'box',
        title: 'Велобайк',
        subtitle: 'Приложение московского велопроката. Поиск станций, оплата, статистика',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={ExternalLinks.appVelobike}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        Скачать
                    </Link>
                </div>
            </>
        ),
        extra: (
            <Image
                img={veloBikeLogo}
                alt="Велобайк"
                className={styles.appImg}
            />
        ),
        anatomy: {
            title: styles.appTitle,
            subtitle: styles.appSubtitle,
            body: styles.appBody,
            extra: styles.appExtra,
        },
    },
]
