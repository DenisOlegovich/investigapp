import { CardProps } from '@/components/Card/types'
import { AppLinks } from '@/constants'
import { cn, appGalleryLink, appStoreLink, googlePlayLink, ruStoreLink } from '@/utils'
import Image from '@/components/Image'
import {
    bigLogoMT,
    metroLogo,
    mobileAppMetroMap,
    mobileAppMetroMapMobile,
    mobileMT,
    parkingLogo,
    parkingVector,
} from '@/Images'
import MobileAppLink from '@/components/MobileAppLink'

import { styles } from './styles'

const appMarketButtonsMT = [
    googlePlayLink(AppLinks.mtGooglePlay),
    appStoreLink(AppLinks.mtAppStore),
    appGalleryLink(AppLinks.mtAppGallery),
    ruStoreLink(AppLinks.mtRustore),
]
const appMarketButtonsMM = [
    googlePlayLink(AppLinks.metroGooglePlay),
    appStoreLink(AppLinks.metroAppStore),
    appGalleryLink(AppLinks.metroAppGallery),
]
const appMarketButtonsParking = [
    googlePlayLink(AppLinks.parkingGooglePlay),
    appStoreLink(AppLinks.parkingAppStore),
    appGalleryLink(AppLinks.parkingAppGallery),
    ruStoreLink(AppLinks.parkingRustore),
]

export const cards: CardProps<'link' | 'box'>[] = [
    {
        type: 'box',
        title: 'Московский транспорт',
        subtitle: (
            <>
                Карта Москвы,
                <br />
                общественный транспорт
                <br />и пешие маршруты
            </>
        ),
        className: styles.mtApp,
        body: (
            <>
                <div className={styles.mtAppMal}>
                    {appMarketButtonsMT.map(({ ...props }, idx) => (
                        <MobileAppLink
                            key={idx}
                            variant="fill"
                            className="max-w-full"
                            {...props}
                        />
                    ))}
                </div>
                <Image
                    img={bigLogoMT}
                    alt="bigLogoMT"
                    className={cn(
                        'absolute',
                        'right-6 top-7 xl:right-[30px] xl:top-[-20px]',
                        'h-[29px] w-[24px] xl:h-[386px] xl:w-[323px]'
                    )}
                />
                <Image
                    img={mobileMT}
                    alt="mobileMT"
                    className={styles.mtAppImg}
                />
            </>
        ),
        anatomy: {
            title: styles.mtAppTitle,
            subtitle: styles.mtAppSubtitle,
            body: styles.mtAppBody,
        },
    },
    {
        type: 'box',
        title: 'Метро Москвы',
        subtitle: (
            <>
                Актуальная информация
                <br />о работе метро МЦК
            </>
        ),
        className: styles.metroApp,
        body: (
            <>
                <div className={styles.metroAppMal}>
                    {appMarketButtonsMM.map(({ ...props }, idx) => (
                        <MobileAppLink
                            key={idx}
                            variant="fill"
                            className="max-w-full"
                            {...props}
                        />
                    ))}
                </div>
                <Image
                    img={metroLogo}
                    alt="metroLogo"
                    className={cn(
                        'absolute',
                        'right-6 top-7 xl:right-8 xl:top-8 ',
                        'h-[29px] w-[24px] xl:h-[43px] xl:w-[36px]'
                    )}
                />
            </>
        ),
        extra: (
            // TODO: Поменять картинки
            <>
                <Image
                    img={mobileAppMetroMap}
                    alt="mobileAppMetroMap"
                    className={cn('hidden md:block', styles.metroAppImg)}
                />
                <Image
                    img={mobileAppMetroMapMobile}
                    alt="mobileAppMetroMap"
                    className={cn('block md:hidden', styles.metroAppImg)}
                />
            </>
        ),
        anatomy: {
            title: styles.metroAppTitle,
            subtitle: styles.metroAppSubtitle,
            body: styles.metroAppBody,
            extra: styles.metroAppExtra,
        },
    },
    {
        type: 'box',
        title: 'Парковки России',
        subtitle: 'Поиск и оплата парковок. Продление и завершение парковки, оплата штрафов',
        className: styles.parkingApp,
        body: (
            <>
                <div className={styles.parkingAppMal}>
                    {appMarketButtonsParking.map(({ ...props }, idx) => (
                        <MobileAppLink
                            key={idx}
                            variant="fill"
                            className="max-w-full"
                            {...props}
                        />
                    ))}
                </div>
                <Image
                    img={parkingLogo}
                    alt="parkingLogo"
                    className={cn(
                        'absolute',
                        'right-6 top-7 xl:right-8 xl:top-8',
                        'h-[29px] w-[24px] xl:h-[43px] xl:w-[36px]'
                    )}
                />
            </>
        ),
        extra: (
            <>
                <Image
                    img={parkingVector}
                    alt="parkingVector"
                    className={styles.parkingAppImg}
                />
            </>
        ),
        anatomy: {
            title: styles.parkingAppTitle,
            subtitle: styles.parkingAppSubtitle,
            body: styles.parkingAppBody,
            extra: styles.parkingAppExtra,
        },
    },
]
