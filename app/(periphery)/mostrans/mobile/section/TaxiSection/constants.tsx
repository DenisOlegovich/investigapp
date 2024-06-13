import { AppLinks } from '@/constants/mobileAppLinks'
import { CardProps } from '@/components/Card/types'
import Image from '@/components/Image'
import { cityMobilLogo, uberLogo, yandexTaxiLogo } from '@/Images'
import Link from '@/components/Link'

import { styles } from './styles'

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'box',
        title: 'Яндекс.Такси',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.yandexTaxiAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.yandexTaxiGooglePlay}
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
                img={yandexTaxiLogo}
                alt="Яндекс.Такси"
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
        title: 'Ситимобил',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.cityMobilAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.cityMobilGooglePlay}
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
                img={cityMobilLogo}
                alt="СитиМобил"
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
        title: 'Uber',
        className: styles.app,
        body: (
            <>
                <div className={styles.appLinksContainer}>
                    <Link
                        href={AppLinks.uberAppStore}
                        variant="simple_gray"
                        className={styles.appLinks}
                    >
                        AppStore
                    </Link>
                    <Link
                        href={AppLinks.uberGooglePlay}
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
                img={uberLogo}
                alt="Uber"
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
