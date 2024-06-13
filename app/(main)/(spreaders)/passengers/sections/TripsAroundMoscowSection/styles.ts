import { cn } from '@/utils'

export const styles = {
    map: cn('text-black', 'overflow-hidden', 'min-h-[31.2rem] md:min-h-0'),
    mapIcon: cn(
        'absolute',
        'top-[1.8rem] md:top-auto xl:top-[2rem]',
        'bottom-auto md:bottom-[2rem] xl:bottom-auto',
        'right-[1.8rem] md:right-[2rem]',
        'w-[4.8rem]',
        'h-auto',
        'text-[#EE2E24]'
    ),
    mapImg: cn('w-full', 'h-full', 'object-cover', 'object-top'),
    mapTitle: cn('leading-[1.7]', 'pr-[50%]'),
    mapBody: cn('absolute', 'inset-0', 'z-[-1]'),

    repairsClosuresMetro: cn('overflow-hidden', 'min-h-[14.8rem] md:min-h-0'),
    repairsClosuresMetroImg: cn('w-full', 'h-full', 'object-cover', 'object-center'),
    repairsClosuresMetroTitle: 'md:text-2xl',
    repairsClosuresMetroBody: cn('absolute', 'inset-0', 'z-[-1]'),

    transportSchedule: cn('bg-[#007dbd]', 'overflow-hidden', 'min-h-[31.2rem] md:min-h-0'),
    transportScheduleImg: cn('w-full', 'h-full', 'object-contain', 'object-center'),
    transportScheduleTitle: cn('relative', 'z-[1]', 'md:text-2xl', 'pointer-events-none'),
    transportScheduleBody: cn('absolute', 'inset-x-0', 'bottom-[2rem] xl:bottom-[7rem]'),

    enNews: cn('overflow-hidden', 'min-h-[31.2rem] md:min-h-0'),
    enNewsImg: cn('w-full', 'h-full', 'object-cover'),
    enNewsTitle: 'md:text-2xl',
    enNewsBody: cn('absolute', 'inset-0', 'z-[-1]'),

    transportMagistral: cn('bg-grey-dark', 'xl:col-span-1', 'xl:col-start-1', 'min-h-[14.8rem]'),
    transportMagistralImg: cn('w-auto', 'object-cover', 'h-[15.7rem] md:h-[14.1rem]'),
    transportMagistralTitle: 'md:text-2xl',
    transportMagistralBody: cn('absolute', 'right-0 xl:right-[-2rem]', 'bottom-0'),

    payFine: cn('bg-white', 'text-black', 'xl:col-span-1', 'xl:col-start-2', 'min-h-[14.8rem]', 'overflow-hidden'),
    payFineImg: cn('w-full', 'max-w-[18.7rem]', 'h-auto'),
    payFineTitle: cn('text-lg md:text-2xl', 'relative z-[1]', 'cursor-pointer'),
    payFineBody: cn('absolute', 'inset-x-0', 'bottom-0'),
    payFineLink: 'z-[2]',

    bicycle: cn('rounded-2xl md:rounded-none md:rounded-l-2xl', 'min-h-[14.8rem]'),
    bicycleIcon: cn('text-[99.2px]', 'h-auto', 'text-white'),
    bicycleTitle: 'md:text-xl',
    bicycleBody: cn('my-auto', 'self-end md:self-center'),

    kickscooter: cn('hidden md:flex ', 'rounded-none rounded-r-2xl', 'min-h-[14.8rem]'),
    kickscooterIcon: cn('text-[98px]', 'h-auto', 'text-white'),
    kickscooterTitle: 'md:text-xl',
    kickscooterBody: cn('my-auto', 'self-end md:self-center'),

    taxi: cn('text-black', 'min-h-[14.8rem]', 'bg-[#f0cb4f]', 'overflow-hidden', 'xl:col-span-2', 'xl:col-start-5'),
    taxiImg: cn('w-full', 'max-w-[20rem] md:max-w-[29.7rem]', 'h-auto'),
    taxiTitle: 'md:text-2xl',
    taxiBody: cn('absolute', 'bottom-0', 'right-0'),
}
