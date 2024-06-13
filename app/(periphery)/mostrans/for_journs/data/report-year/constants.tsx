import { Docs, DocsDisplayNames } from '@/constants'
import {
    transportComplex2010To2016,
    transportComplex2010To2019,
    transportComplex2016,
    transportComplex2017,
    transportComplex2018,
    transportComplex2019,
    transportComplex2020To2021,
    transportComplex2021,
    transportComplex2021To2022,
    transportComplex2022,
    transportComplex2022SixMonth,
} from '@/Images'
import { PresentationCardProps } from '@/components/PresentationCard'

export const cards: PresentationCardProps[] = [
    {
        href: Docs.transportComplex2022,
        img: transportComplex2022,
        extra: DocsDisplayNames[Docs.transportComplex2022],
    },
    {
        href: Docs.transportComplex2021,
        img: transportComplex2021,
        extra: DocsDisplayNames[Docs.transportComplex2021],
    },
    {
        href: Docs.transportComplex2022SixMonth,
        img: transportComplex2022SixMonth,
        extra: DocsDisplayNames[Docs.transportComplex2022SixMonth],
    },
    {
        href: Docs.transportComplex2021To2022,
        img: transportComplex2021To2022,
        extra: DocsDisplayNames[Docs.transportComplex2021To2022],
    },
    {
        href: Docs.transportComplex2020To2021,
        img: transportComplex2020To2021,
        extra: DocsDisplayNames[Docs.transportComplex2020To2021],
    },
    {
        href: Docs.transportComplex2010To2019,
        img: transportComplex2010To2019,
        extra: DocsDisplayNames[Docs.transportComplex2010To2019],
    },
    {
        href: Docs.transportComplex2019,
        img: transportComplex2019,
        extra: DocsDisplayNames[Docs.transportComplex2019],
    },
    {
        href: Docs.transportComplex2018,
        img: transportComplex2018,
        extra: DocsDisplayNames[Docs.transportComplex2018],
    },
    {
        href: Docs.transportComplex2017,
        img: transportComplex2017,
        extra: DocsDisplayNames[Docs.transportComplex2017],
    },
    {
        href: Docs.transportComplex2010To2016,
        img: transportComplex2010To2016,
        extra: DocsDisplayNames[Docs.transportComplex2010To2016],
    },
    {
        href: Docs.transportComplex2016,
        img: transportComplex2016,
        extra: DocsDisplayNames[Docs.transportComplex2016],
    },
]
