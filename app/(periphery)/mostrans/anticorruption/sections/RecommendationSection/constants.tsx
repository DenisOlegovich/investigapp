import Link, { ILinkProps } from '@/components/Link'
import { ListProps } from '@/components/List'
import { Docs, DocsDisplayNames } from '@/constants'

const links: Pick<ILinkProps, 'href' | 'title'>[] = [
    {
        href: Docs.guidelines2013,
        title: DocsDisplayNames[Docs.guidelines2013],
    },
    {
        href: Docs.guidelines2016,
        title: DocsDisplayNames[Docs.guidelines2016],
    },
    {
        href: Docs.guidelines2018,
        title: DocsDisplayNames[Docs.guidelines2018],
    },

    {
        href: Docs.prevention,
        title: DocsDisplayNames[Docs.prevention],
    },
    {
        href: Docs.guidelines2020,
        title: DocsDisplayNames[Docs.guidelines2020],
    },
    {
        href: Docs.guidelines2020_1,
        title: DocsDisplayNames[Docs.guidelines2020_1],
    },
    {
        href: Docs.informationMail,
        title: DocsDisplayNames[Docs.informationMail],
    },
    {
        href: Docs.surveyRecommends,
        title: DocsDisplayNames[Docs.surveyRecommends],
    },
    {
        href: Docs.surveyArbitragePractice,
        title: DocsDisplayNames[Docs.surveyArbitragePractice],
    },
    {
        href: Docs.surveyCommonCases,
        title: DocsDisplayNames[Docs.surveyCommonCases],
    },
    {
        href: Docs.surveyBestPractice,
        title: DocsDisplayNames[Docs.surveyBestPractice],
    },
    {
        href: Docs.memoRespons,
        title: DocsDisplayNames[Docs.memoRespons],
    },
    {
        href: Docs.memoBride,
        title: DocsDisplayNames[Docs.memoBride],
    },
    {
        href: Docs.resolution19,
        title: DocsDisplayNames[Docs.resolution19],
    },
    {
        href: Docs.resolution24,
        title: DocsDisplayNames[Docs.resolution24],
    },
    {
        href: Docs.resolutionPlenuma59,
        title: DocsDisplayNames[Docs.resolutionPlenuma59],
    },
    {
        href: Docs.resolutionPlenuma21,
        title: DocsDisplayNames[Docs.resolutionPlenuma21],
    },
    {
        href: Docs.resolution,
        title: DocsDisplayNames[Docs.resolution],
    },
    {
        href: Docs.recommendsProcedure,
        title: DocsDisplayNames[Docs.recommendsProcedure],
    },
    {
        href: Docs.manualOASR,
        title: DocsDisplayNames[Docs.manualOASR],
    },
    {
        href: Docs.explanationFAC,
        title: DocsDisplayNames[Docs.explanationFAC],
    },
    {
        href: Docs.manualCollectiveActions,
        title: DocsDisplayNames[Docs.manualCollectiveActions],
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
