import { ComponentPropsWithoutRef } from 'react'

import { AppLinks } from '@/constants'
import { cn, appGalleryLink, appStoreLink, googlePlayLink } from '@/utils'
import MetroLandMarkIcon from '@/components/icons/MetroLandMarkIcon'
import MobileAppLink from '@/components/MobileAppLink'

const appMarketButtons = [
    googlePlayLink(AppLinks.metroGooglePlay),
    appStoreLink(AppLinks.metroAppStore),
    appGalleryLink(AppLinks.metroAppGallery),
]

export default function Apps({ className }: ComponentPropsWithoutRef<'div'>) {
    return (
        <div className={cn('body-s', 'mt-0 md:mt-[22.4rem]', className)}>
            <div className={styles.heading}>
                <div className={styles.headingIcon}>
                    <MetroLandMarkIcon className={cn('text-white', 'h-full', 'w-auto')} />
                </div>
                <p className="h3">Метро Москвы</p>
            </div>

            <div className={styles.appMarketWrapper}>
                {appMarketButtons.map((props, id) => (
                    <MobileAppLink
                        key={id}
                        {...props}
                    />
                ))}
            </div>
        </div>
    )
}

const styles = {
    heading: cn('flex', 'gap-xs', 'items-center'),
    headingIcon: cn('bg-red', 'w-[4.8rem]', 'h-[4.8rem]', 'rounded-[0.8rem]', 'p-[0.5rem]'),

    appMarketWrapper: cn('mt-sm md:mt-lg', 'flex', 'flex-col', 'gap-xs md:gap-[0.5rem]', 'sm:flex-row', 'sm:flex-wrap'),
}
