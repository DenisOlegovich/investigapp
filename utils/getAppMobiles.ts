import LogoAppGalleryIcon from '@/components/icons/AppGalleryIcon'
import LogoAppStoreIcon from '@/components/icons/AppStoreIcon'
import LogoColoredAppGalleryIcon from '@/components/icons/ColoredAppGalleryIcon'
import ColoredGooglePlayIcon from '@/components/icons/ColoredGooglePlayIcon'
import ColoredRuStoreIcon from '@/components/icons/ColoredRuStoreIcon'
import GooglePlayIcon from '@/components/icons/GooglePlayIcon'
import RuStoreIcon from '@/components/icons/RuStoreIcon'
import { MobileAppLinkProps } from '@/components/MobileAppLink'
import { AppLinks } from '@/constants/mobileAppLinks'

export const googlePlayLink = (href: string = AppLinks.metroGooglePlay): MobileAppLinkProps => ({
    label: 'Google Play',
    IconHover: ColoredGooglePlayIcon,
    IconDefault: GooglePlayIcon,
    href,
})

export const appStoreLink = (href: string = AppLinks.metroAppStore): MobileAppLinkProps => ({
    label: 'App Store',
    IconHover: LogoAppStoreIcon,
    IconDefault: LogoAppStoreIcon,
    href,
})

export const appGalleryLink = (href: string = AppLinks.metroAppGallery): MobileAppLinkProps => ({
    label: 'AppGallery',
    IconHover: LogoColoredAppGalleryIcon,
    IconDefault: LogoAppGalleryIcon,
    href,
})

export const ruStoreLink = (href: string = AppLinks.metroRustore): MobileAppLinkProps => ({
    label: 'RuStore',
    IconHover: ColoredRuStoreIcon,
    IconDefault: RuStoreIcon,
    href,
})
