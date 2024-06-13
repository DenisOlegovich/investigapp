import { AppLinks } from '@/constants/mobileAppLinks'
import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { belkaCarLogo, cityDriveLogo, delimobilLogo, yandexDriveLogo } from '@/Images'
import Link from '@/components/Link'

import { styles } from './styles'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'box',
        title: 'Яндекс.Драйв',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.yandexDriveAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.yandexDriveGooglePlay}
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
                img={yandexDriveLogo}
                alt="Яндекс.Драйв"
                className={styles.appImg}
            />
        ),
        anatomy: {
            title: styles.appTitle,
            body: styles.appBody,
            extra: styles.appExtra,
        },
    },
    {
        type: 'box',
        title: 'BelkaCar',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.belkaCarAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.belkaCarGooglePlay}
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
                img={belkaCarLogo}
                alt="BelkaCar"
                className={styles.appImg}
            />
        ),
        anatomy: {
            title: styles.appTitle,
            body: styles.appBody,
            extra: styles.appExtra,
        },
    },
    {
        type: 'box',
        title: 'Ситидрайв',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.cityDriveAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.cityDriveGooglePlay}
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
                img={cityDriveLogo}
                alt="Ситидрайв"
                className={styles.appImg}
            />
        ),
        anatomy: {
            title: styles.appTitle,
            body: styles.appBody,
            extra: styles.appExtra,
        },
    },
    {
        type: 'box',
        title: 'Делимобиль',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.delimobilAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.delimobilGooglePlay}
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
                img={delimobilLogo}
                alt="Делимобиль"
                className={styles.appImg}
            />
        ),
        anatomy: {
            title: styles.appTitle,
            body: styles.appBody,
            extra: styles.appExtra,
        },
    },
]
