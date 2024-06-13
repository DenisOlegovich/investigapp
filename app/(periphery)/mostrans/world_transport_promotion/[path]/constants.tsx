import { Docs, DocsDisplayNames } from '@/constants'
import { ITab } from '@/components/Tabs/types'
import {
    hongKongTransportStrategy,
    londonTransportStrategy,
    madridTransportStrategy,
    madridTransportStrategySecond,
    newYorkTransportStrategy,
    parisTransportStrategy,
    parisTransportStrategySecond,
    singaporeTransportStrategy,
    stockholmTransportStrategy,
    worldTransportDevelopment,
} from '@/Images'
import Digest from './contentTabs/Digest'
import TransportStrategies from './contentTabs/TransportStrategies'
import { PresentationCardProps } from '@/components/PresentationCard'

export const tabs: ITab[] = [
    {
        tabId: 'digest',
        path: 'digest',
        title: 'Дайджест',
        Content: <Digest />,
    },
    {
        tabId: 'transport_strategies',
        path: 'transport_strategies',
        title: 'Транспортные стратегии',
        Content: <TransportStrategies />,
    },
]

export const digestDocs: PresentationCardProps[] = [
    {
        img: worldTransportDevelopment,
        extra: DocsDisplayNames[Docs.worldTransportDevelopment],
        href: Docs.worldTransportDevelopment,
    },
]

export const transportStrategyDocs: PresentationCardProps[] = [
    {
        img: parisTransportStrategy,
        extra: DocsDisplayNames[Docs.parisTransportStrategy],
        href: Docs.parisTransportStrategy,
    },
    {
        img: singaporeTransportStrategy,
        extra: DocsDisplayNames[Docs.singaporeTransportStrategy],
        href: Docs.singaporeTransportStrategy,
    },
    {
        img: londonTransportStrategy,
        extra: DocsDisplayNames[Docs.londonTransportStrategy],
        href: Docs.londonTransportStrategy,
    },
    {
        img: hongKongTransportStrategy,
        extra: DocsDisplayNames[Docs.hongKongTransportStrategy],
        href: Docs.hongKongTransportStrategy,
    },
    {
        img: newYorkTransportStrategy,
        extra: DocsDisplayNames[Docs.newYorkTransportStrategy],
        href: Docs.newYorkTransportStrategy,
    },
    {
        img: parisTransportStrategySecond,
        extra: DocsDisplayNames[Docs.parisTransportStrategySecond],
        href: Docs.parisTransportStrategySecond,
    },
    {
        img: madridTransportStrategy,
        extra: DocsDisplayNames[Docs.madridTransportStrategy],
        href: Docs.madridTransportStrategy,
    },
    {
        img: madridTransportStrategySecond,
        extra: DocsDisplayNames[Docs.madridTransportStrategySecond],
        href: Docs.madridTransportStrategySecond,
    },
    {
        img: stockholmTransportStrategy,
        extra: DocsDisplayNames[Docs.stockholmTransportStrategy],
        href: Docs.stockholmTransportStrategy,
    },
]
