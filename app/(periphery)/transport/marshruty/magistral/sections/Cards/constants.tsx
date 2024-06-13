import { CardProps } from '@/components/Card/types'
import { Pages, PagesDisplayNames } from '@/constants'
import {
    busStopWithRout,
    busWithClock,
    circleGraphic,
    landmarks,
    letterWithWoman,
    magistralRoutes,
    mapWithRoutes,
    moscowMapWithZone,
    nizhnieKotle,
    puzzleWithPeople,
    routesInAir,
    schemeRotes,
} from '@/Images'
import { cn } from '@/utils'

import Image from '@/components/Image'

import { styles } from './styles'

export const cards: CardProps<'link'>[] = [
    {
        type: 'link',
        href: Pages.magistralWhat,
        title: PagesDisplayNames[Pages.magistralWhat],
        className: styles.what,
        body: (
            <Image
                img={magistralRoutes}
                alt="magistral routes"
                className={cn('h-full w-auto')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-0', 'right-[2rem]', 'h-[123px] md:h-[153px]'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralWhy,
        title: PagesDisplayNames[Pages.magistralWhy],
        className: styles.why,
        body: (
            <Image
                img={landmarks}
                alt="landmarks"
                className={cn('h-full w-auto')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-0', 'right-0', 'h-[129px] md:h-[159px]'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralWhen,
        title: PagesDisplayNames[Pages.magistralWhen],
        className: styles.when,
        body: (
            <Image
                img={moscowMapWithZone}
                alt="moscow map with zone"
                className={cn('h-full w-auto')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-0', 'right-[2rem]', 'h-[100px] md:h-[110px] xl:h-[130px]'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralChange,
        title: PagesDisplayNames[Pages.magistralChange],
        className: styles.change,
        body: (
            <Image
                img={circleGraphic}
                alt="circle graphic"
                className={cn('h-full w-auto')}
            />
        ),
        anatomy: {
            body: cn(
                'absolute',
                'bottom-[2rem]',
                'left-[50%]',
                'h-[100px] md:h-[130px]',
                'w-max',
                'translate-x-[-50%]'
            ),
        },
    },
    {
        type: 'link',
        href: Pages.magistralRenamingStations,
        title: PagesDisplayNames[Pages.magistralRenamingStations],
        className: styles.renamingStations,
        body: (
            <Image
                img={nizhnieKotle}
                alt="nizhnie kotle"
                className={cn('h-full w-auto')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-0', 'right-[2rem]', 'h-[104px] md:h-[134px]'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralNewRouteNumbers,
        title: PagesDisplayNames[Pages.magistralNewRouteNumbers],
        className: styles.newRouteNumbers,
        body: (
            <Image
                img={routesInAir}
                alt="routes in air"
                className={cn('h-full w-auto')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-[0.9rem] sm:bottom-[1.3rem]', 'right-[2rem]', 'h-[110px] md:h-[136px]'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralInfrastructureUpdate,
        title: PagesDisplayNames[Pages.magistralInfrastructureUpdate],
        className: styles.infrastructureUpdate,
        body: (
            <Image
                img={busStopWithRout}
                alt="bus stop with rout"
                className={cn('w-full h-auto')}
            />
        ),
        anatomy: {
            title: cn('bg-[#3135A2]', 'z-[1]', 'relative', 'pb-[0.5rem]'),
            body: cn('absolute', 'bottom-0', 'right-[20%] md:right-[10%] lg:right-0', 'left-0'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralSend,
        title: PagesDisplayNames[Pages.magistralSend],
        className: styles.send,
        body: (
            <Image
                img={letterWithWoman}
                alt="letter with woman"
                className={cn('w-full h-auto')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-[2rem]', 'left-[50%]', 'w-[163px] sm:w-[195px]', 'translate-x-[-50%]'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralTeam,
        title: PagesDisplayNames[Pages.magistralTeam],
        className: styles.team,
        body: (
            <Image
                img={puzzleWithPeople}
                alt="puzzle with people"
                className={cn('w-full h-auto')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-[2rem]', 'left-[50%]', 'w-[163px] sm:w-[207px]', 'translate-x-[-50%]'),
        },
    },
    {
        type: 'link',
        href: Pages.transportSchedule,
        title: 'Расписания наземного транспорта',
        className: styles.schedule,
        body: (
            <Image
                img={busWithClock}
                alt="bus with clock"
                className={cn('h-full w-auto')}
            />
        ),
        anatomy: {
            body: cn('absolute', 'bottom-0', 'right-[1.4rem] sm:right-[2rem]', 'h-[93px] sm:h-[112px]'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralMap,
        title: 'Карта маршрутов в ЦАО и ЮАО',
        className: styles.map,
        body: (
            <Image
                img={mapWithRoutes}
                alt="map with routes"
                className={cn('h-full w-full', 'object-cover', 'opacity-[0.5]')}
            />
        ),
        extra: <div className={styles.archive}>Архив</div>,
        anatomy: {
            body: cn('absolute', 'inset-0', 'z-[-1]'),
        },
    },
    {
        type: 'link',
        href: Pages.magistralSchemesNewRoutes,
        title: PagesDisplayNames[Pages.magistralSchemesNewRoutes],
        className: styles.schemesNewRoutes,
        body: (
            <Image
                img={schemeRotes}
                alt="scheme rotes"
                className={cn('h-full w-full', 'object-cover', 'object-bottom', 'opacity-[0.5]')}
            />
        ),
        extra: <div className={styles.archive}>Архив</div>,
        anatomy: {
            body: cn('absolute', 'inset-0', 'z-[-1]'),
        },
    },
]
