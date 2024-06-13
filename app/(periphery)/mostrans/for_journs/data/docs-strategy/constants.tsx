import { Docs, DocsDisplayNames } from '@/constants'
import {
    cityTransport,
    developmentTransportInfrastructure,
    developmentTransportSystem,
    digitalTransformation,
    innovativeMobility,
    loyaltyProgram,
    modelTransportBehavior,
    moscowTransportSystem,
    newModelMobility,
    newModelMobility2,
    trafficSafety,
    transportDevelopmentProgram,
} from '@/Images'
import { PresentationCardProps } from '@/components/PresentationCard'

export const cards: PresentationCardProps[] = [
    {
        href: Docs.cityTransport,
        img: cityTransport,
        extra: DocsDisplayNames[Docs.cityTransport],
    },
    {
        href: Docs.moscowTransportSystem,
        img: moscowTransportSystem,
        extra: DocsDisplayNames[Docs.moscowTransportSystem],
    },
    {
        href: Docs.developmentTransportSystem,
        img: developmentTransportSystem,
        extra: DocsDisplayNames[Docs.developmentTransportSystem],
    },
    {
        href: Docs.digitalTransformation,
        img: digitalTransformation,
        extra: DocsDisplayNames[Docs.digitalTransformation],
    },
    {
        href: Docs.loyaltyProgram,
        img: loyaltyProgram,
        extra: DocsDisplayNames[Docs.loyaltyProgram],
    },
    {
        href: Docs.newModelMobility,
        img: newModelMobility,
        extra: DocsDisplayNames[Docs.newModelMobility],
    },
    {
        href: Docs.developmentTransportInfrastructure,
        img: developmentTransportInfrastructure,
        extra: DocsDisplayNames[Docs.developmentTransportInfrastructure],
    },
    {
        href: Docs.newModelMobility2,
        img: newModelMobility2,
        extra: DocsDisplayNames[Docs.newModelMobility2],
    },
    {
        href: Docs.innovativeMobility,
        img: innovativeMobility,
        extra: DocsDisplayNames[Docs.innovativeMobility],
    },
    {
        href: Docs.trafficSafety,
        img: trafficSafety,
        extra: DocsDisplayNames[Docs.trafficSafety],
    },
    {
        href: Docs.modelTransportBehavior,
        img: modelTransportBehavior,
        extra: DocsDisplayNames[Docs.modelTransportBehavior],
    },
    {
        href: Docs.transportDevelopmentProgram,
        img: transportDevelopmentProgram,
        extra: DocsDisplayNames[Docs.transportDevelopmentProgram],
    },
]
