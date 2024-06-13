import Link, { ILinkProps } from '@/components/Link'
import { ListProps } from '@/components/List'
import { Docs, DocsDisplayNames } from '@/constants'

const links: Pick<ILinkProps, 'href' | 'title'>[] = [
    {
        href: Docs.declaraciaOONAnticorruption,
        title: DocsDisplayNames[Docs.declaraciaOONAnticorruption],
    },
    {
        href: Docs.conventionSovietEuropeAnticorruption,
        title: DocsDisplayNames[Docs.conventionSovietEuropeAnticorruption],
    },
    {
        href: Docs.conventionOONAnticorruption,
        title: DocsDisplayNames[Docs.conventionOONAnticorruption],
    },
    {
        href: Docs.conventionOASRAnticorruption,
        title: DocsDisplayNames[Docs.conventionOASRAnticorruption],
    },
    {
        href: Docs.internationalCode,
        title: DocsDisplayNames[Docs.internationalCode],
    },
    {
        href: Docs.lawUSAnticorruption,
        title: DocsDisplayNames[Docs.lawUSAnticorruption],
    },
    {
        href: Docs.lawUKAnticorruption,
        title: DocsDisplayNames[Docs.lawUKAnticorruption],
    },
]

export const list: ListProps = {
    markerSpacing: 0.8,
    variant: 'unordered',
    items: links.map(({ href, title }) => ({
        title: (
            <Link
                type="new-window"
                href={href}
            >
                {title}
            </Link>
        ),
    })),
}
