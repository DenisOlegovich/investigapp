import { cn } from '@/utils'

export const styles = {
    payParking: cn(
        'bg-[#5BA824]',
        'min-h-[34.8rem] md:min-h-[0] lg:min-h-[40.8rem]',
        'md:max-lg:col-span-2 lg:col-span-3',
        'lg:row-span-2',
        'md:max-lg:row-start-1'
    ),
    payParkingImg: cn('w-auto', 'h-[32.4rem] md:h-[16rem] lg:h-[40.2rem]'),
    payParkingTitle: 'md:text-2xl',
    payParkingBody: cn('absolute', 'w-max', 'bottom-0', 'right-[-0.9rem] lg:right-[-1.3rem]'),

    troika: cn(
        'bg-troika',
        'overflow-hidden',
        'min-h-[17.2rem] md:min-h-[0] lg:min-h-[14.8rem]',
        'md:max-lg:col-span-2 lg:col-span-4',
        'md:max-lg:row-start-2 '
    ),
    troikaImg: cn('w-auto', 'h-[17.7rem] md:h-[16.5rem] lg:h-[23.7rem]'),
    troikaTitle: 'md:text-2xl',
    troikaBody: cn(
        'absolute',
        'w-max',
        'bottom-[-10%] lg:bottom-[-20%]',
        'right-[-5px] md:right-[10%] lg:bottom-[-20%]'
    ),

    bicycle: cn(
        'bg-carsharing-orange',
        'text-black',
        'min-h-[9.8rem] md:min-h-[0] lg:min-h-[14.8rem]',
        'lg:col-start-4',
        'lg:col-end-[span_4] xl:col-end-[span_2]',
        'lg:row-start-2',
        'md:max-lg:row-start-3',
        'md:max-lg:mr-[-2rem] xl:mr-[-2rem]',
        'gap-0'
    ),
    bicycleIcon: cn('text-[7.4rem] md:text-[10rem]', 'text-white'),
    bicycleTitle: 'md:text-xl',
    bicycleBody: cn('mt-auto', 'self-end md:self-center'),

    kickscooter: cn(
        'hidden md:flex lg:hidden xl:flex',
        'bg-carsharing-orange text-black',
        'min-h-[14.8rem] ',
        'xl:col-start-6',
        'xl:col-end-[span_2]',
        'md:max-lg:row-start-3 xl:row-start-2',
        'md:max-lg:ml-[-2rem] xl:ml-[-2rem]',
        'md:max-lg:rounded-[0_1rem_1rem_0] xl:rounded-[0_1rem_1rem_0]',
        'gap-0'
    ),
    kickscooterIcon: cn('text-[7.4rem] md:text-[10rem]', 'text-white'),
    kickscooterTitle: cn('md:text-xl'),
    kickscooterBody: cn('mt-auto', 'self-end md:self-center'),

    transportSchedule: cn(
        'bg-[#007dbd] ',
        'overflow-hidden',
        'min-h-[31.2rem] md:min-h-[40.8rem]',
        'md:max-lg:col-span-2 lg:col-span-5',
        'md:max-lg:row-span-3 lg:row-span-2'
    ),
    transportScheduleImg: cn('w-full', 'h-full', 'md:scale-[1.2]', 'object-cover', 'object-center'),
    transportScheduleTitle: cn('relative', 'z-[1]', 'md:text-2xl', 'pointer-events-none'),
    transportScheduleBody: cn('absolute', 'inset-x-0', 'bottom-0 md:bottom-[3rem]'),
}
