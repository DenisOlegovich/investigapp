import { Docs, DocsDisplayNames } from '@/constants'
import {
    bikeSpaceDevelopment,
    carSharing,
    mcdOpening,
    ngptDevelopment,
    paidParking,
    parkingSpaceDevelopment,
    taxiTransportation2011to2017,
    taxiTransportation2017,
    taxiTransportation2020,
} from '@/Images'
import { PresentationCardProps } from '@/components/PresentationCard'

export const cards: PresentationCardProps[] = [
    {
        href: Docs.taxiTransportation2020,
        img: taxiTransportation2020,
        extra: DocsDisplayNames[Docs.taxiTransportation2020],
    },
    {
        href: Docs.mcdOpening,
        img: mcdOpening,
        extra: DocsDisplayNames[Docs.mcdOpening],
    },
    {
        href: Docs.taxiTransportation2011to2017,
        img: taxiTransportation2011to2017,
        extra: DocsDisplayNames[Docs.taxiTransportation2011to2017],
    },
    {
        href: Docs.taxiTransportation2017,
        img: taxiTransportation2017,
        extra: DocsDisplayNames[Docs.taxiTransportation2017],
    },
    {
        href: Docs.carSharing,
        img: carSharing,
        extra: DocsDisplayNames[Docs.carSharing],
    },
    {
        href: Docs.bikeSpaceDevelopment,
        img: bikeSpaceDevelopment,
        extra: DocsDisplayNames[Docs.bikeSpaceDevelopment],
    },
    {
        href: Docs.paidParking,
        img: paidParking,
        extra: DocsDisplayNames[Docs.paidParking],
    },
    {
        href: Docs.ngptDevelopment,
        img: ngptDevelopment,
        extra: DocsDisplayNames[Docs.ngptDevelopment],
    },
    {
        href: Docs.parkingSpaceDevelopment,
        img: parkingSpaceDevelopment,
        extra: DocsDisplayNames[Docs.parkingSpaceDevelopment],
    },
]
