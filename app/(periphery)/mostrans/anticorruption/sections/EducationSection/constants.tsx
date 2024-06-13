import Link, { ILinkProps } from '@/components/Link'
import { ListProps } from '@/components/List'
import { Videos, VideosDisplayNames } from '@/constants'

const links: Pick<ILinkProps, 'href' | 'title'>[] = [
    {
        href: Videos.interestСonflict,
        title: VideosDisplayNames[Videos.interestСonflict],
    },
    {
        href: Videos.receivingGiftsProcedure,
        title: VideosDisplayNames[Videos.receivingGiftsProcedure],
    },
    {
        href: Videos.antiСorruptionСompliance,
        title: VideosDisplayNames[Videos.antiСorruptionСompliance],
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
