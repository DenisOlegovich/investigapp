import { LinkVariant } from '@/components/Link'
import { Docs, DocsDisplayNames, ExternalLinks } from '@/constants'

export interface ArticleProps {
    originalLink?: string
    originalText?: string
    location?: string
    authors?: string
    researchCenter?: string
    translateLink: string
    translateText: string
    translateLinkVariant?: LinkVariant
}

export const articles: ArticleProps[] = [
    {
        originalLink: ExternalLinks.speedLimit,
        originalText: 'Доклад ВОЗ «Регулирование скорости», 2017',
        translateLink: Docs.speedLimit,
        translateText: DocsDisplayNames[Docs.speedLimit],
    },
    {
        originalLink: Docs.speedLimitForHealthOriginal,
        originalText: DocsDisplayNames[Docs.speedLimitForHealthOriginal],
        location: 'Швейцария, 2020',
        authors: 'Авторы: Изабель А. Росси, Даниэль Вьенно, Мартина С. Рагеттли, Бенджамин Флюкигер, Мартин Росли',
        translateLink: Docs.speedLimitForHealth,
        translateText: DocsDisplayNames[Docs.speedLimitForHealth],
    },
    {
        originalLink: Docs.speedLimitForClimateOriginal,
        originalText: DocsDisplayNames[Docs.speedLimitForClimateOriginal],
        location: 'Нидерланды,2010',
        authors: 'Авторы: Маттиас Оттен, Хуйб Ван Эссен',
        translateLink: Docs.speedLimitForClimate,
        translateText: DocsDisplayNames[Docs.speedLimitForClimate],
    },
    {
        originalLink: ExternalLinks.speedLimitCity,
        originalText: 'Влияние снижения скоростного режима в городских районах',
        location: 'Австралия',
        authors: 'Авторы: Джеффри Арчер, Никола Фотерингем, Марк Симмонс и Брюс Корбен',
        researchCenter: 'Центр исследования несчастных случаев Университета Монаша',
        translateLink: Docs.speedLimitCity,
        translateText: DocsDisplayNames[Docs.speedLimitCity],
    },
    {
        originalLink: Docs.speedLimitBenefitsOriginal,
        originalText: DocsDisplayNames[Docs.speedLimitBenefitsOriginal],
        location: 'Австралия',
        researchCenter: 'Heart Foundation',
        translateLink: Docs.speedLimitBenefits,
        translateText: DocsDisplayNames[Docs.speedLimitBenefits],
    },
    {
        originalLink: Docs.roadDeathsOriginal,
        originalText: DocsDisplayNames[Docs.roadDeathsOriginal],
        authors: 'Автор: Чарльз М. Фармер',
        researchCenter: 'Страховой институт безопасности дорожного движения',
        translateLink: Docs.roadDeaths,
        translateText: DocsDisplayNames[Docs.roadDeaths],
    },
    {
        originalLink: Docs.speedLimitChangeOriginal,
        originalText: DocsDisplayNames[Docs.speedLimitChangeOriginal],
        location: 'США, 2020',
        researchCenter: 'Национальная ассоциация работников городского транспорта',
        translateLink: Docs.speedLimitChange,
        translateText: DocsDisplayNames[Docs.speedLimitChange],
    },
    {
        originalLink: Docs.speedСonceptOriginal,
        originalText: DocsDisplayNames[Docs.speedСonceptOriginal],
        location: 'США, 2009',
        researchCenter: 'Министерство транспорта США, Федеральное управление автомобильных дорог',
        translateLink: Docs.speedСoncept,
        translateText: DocsDisplayNames[Docs.speedСoncept],
    },
    {
        translateLink: Docs.speedResearch,
        translateText: DocsDisplayNames[Docs.speedResearch],
        translateLinkVariant: 'default',
    },
]
