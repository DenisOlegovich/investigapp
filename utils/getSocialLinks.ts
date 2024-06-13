import { SocialLinks } from '@/constants'
import { SocialLinkProps } from '@/components/SocialLink'
import TgIcon from '@/components/icons/TgIcon'
import vkIcon from '@/components/icons/VkIcon'
import okIcon from '@/components/icons/OkIcon'
import DzenIcon from '@/components/icons/DzenIcon'

export const tgLink = (href: string = SocialLinks.mostransTg): SocialLinkProps => ({
    Icon: TgIcon,
    href,
})

export const vkLink = (href: string = SocialLinks.mostransVk): SocialLinkProps => ({
    Icon: vkIcon,
    href,
})

export const okLink = (href: string = SocialLinks.mostransOk): SocialLinkProps => ({
    Icon: okIcon,
    href,
})

export const dzenLink = (href: string = SocialLinks.mostransOk): SocialLinkProps => ({
    Icon: DzenIcon,
    href,
})
