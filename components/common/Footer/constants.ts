import { ILinkProps } from '@/components/Link'
import { ExternalLinks, Pages, PagesDisplayNames, SocialLinks } from '@/constants'
import { okLink, tgLink, vkLink } from '@/utils'

export const linksFirstColumn: Pick<ILinkProps, 'title' | 'href'>[] = [
    {
        title: 'Организации транспортного комплекса',
        href: Pages.departmentStructure,
    },
    {
        title: 'Транспортный комплекс России',
        href: ExternalLinks.russianTransportComplex,
    },
    {
        title: PagesDisplayNames[Pages.allNews],
        href: Pages.allNews,
    },
    {
        title: PagesDisplayNames[Pages.faq],
        href: Pages.faq,
    },
]

export const linksSecondColumn: Pick<ILinkProps, 'title' | 'href'>[] = [
    {
        title: 'Обратная связь',
        href: Pages.feedback,
    },
    {
        title: PagesDisplayNames[Pages.newsSubscription],
        href: Pages.newsSubscription,
    },
    {
        title: PagesDisplayNames[Pages.vacancies],
        href: Pages.vacancies,
    },
]

export const mostransSocialLinks = [
    tgLink(SocialLinks.mostransTg),
    vkLink(SocialLinks.mostransVk),
    okLink(SocialLinks.mostransOk),
]
