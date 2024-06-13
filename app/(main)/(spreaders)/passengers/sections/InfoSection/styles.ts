import { cn } from '@/utils'

const baseStyles = {
    threeCards: cn('lg:row-span-1', 'lg:col-start-2', 'flex-row', 'justify-between'),
}

export const styles = {
    pedestrianZones: cn(
        'text-black',
        'md:row-span-3',
        'overflow-hidden',
        'min-h-[31.2rem]',
        `before:content=[''] before:absolute before:top-0 before:inset-x-0`,
        'before:h-[16rem] before:bg-gradient-to-b before:from-[#D1F1FF] before:to-transparent'
    ),
    pedestrianZonesImg: cn('w-full', 'h-full', 'object-cover', 'object-center', 'md:mr-[0.6rem]'),
    pedestrianZonesTitle: cn('relative', 'z-[1]', 'md:text-2xl', 'pointer-events-none'),
    pedestrianZonesSubtitle: cn('relative', 'z-[1]'),
    pedestrianZonesBody: cn('absolute', 'inset-0', 'z-[-1]'),

    reka: cn('bg-[#171F34]', baseStyles.threeCards),
    rekaIcon: cn('text-[52px] md:text-[89px]'),
    rekaBody: 'h-full',

    mobilityPassengers: cn('bg-blue', baseStyles.threeCards),
    mobilityPassengersIcon: cn('text-[44px] md:text-[59px]', 'mr-[0.5rem] md:mr-[2.6rem]'),
    mobilityPassengersBody: cn('h-full', 'justify-center'),

    nightRoutes: cn('bg-midnight', baseStyles.threeCards),
    nightRoutesIcon: cn('text-[42px] md:text-[58px]', 'mr-[0.2rem] md:mr-[2.4rem]'),
    nightRoutesBody: cn('h-full', 'justify-center'),

    cardTitle: 'md:text-2xl',
}
