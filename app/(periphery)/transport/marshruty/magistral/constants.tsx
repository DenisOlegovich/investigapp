import { InternalNavbarProps } from '@/components/InternalNavbar'
import { Pages, PagesDisplayNames } from '@/constants'

export const navMenu: InternalNavbarProps['navMenu'] = [
    {
        title: PagesDisplayNames[Pages.magistralChange],
        href: Pages.magistralChange,
    },
    {
        title: PagesDisplayNames[Pages.magistralWhat],
        href: Pages.magistralWhat,
    },
    {
        title: PagesDisplayNames[Pages.magistralWhy],
        href: Pages.magistralWhy,
    },
    {
        title: PagesDisplayNames[Pages.magistralWhen],
        href: Pages.magistralWhen,
    },
    {
        title: PagesDisplayNames[Pages.magistralNewRouteNumbers],
        href: Pages.magistralNewRouteNumbers,
    },
    {
        title: PagesDisplayNames[Pages.magistralInfrastructureUpdate],
        href: Pages.magistralInfrastructureUpdate,
    },
    {
        title: PagesDisplayNames[Pages.magistralRenamingStations],
        href: Pages.magistralRenamingStations,
    },
    {
        title: PagesDisplayNames[Pages.magistralSend],
        href: Pages.magistralSend,
    },
    {
        title: PagesDisplayNames[Pages.magistralTeam],
        href: Pages.magistralTeam,
    },
    {
        title: PagesDisplayNames[Pages.magistralMap],
        href: Pages.magistralMap,
    },
    {
        title: PagesDisplayNames[Pages.magistralSchemesNewRoutes],
        href: Pages.magistralSchemesNewRoutes,
    },
    {
        title: 'Расписание наземного транспорта',
        href: Pages.transportSchedule,
    },
]
