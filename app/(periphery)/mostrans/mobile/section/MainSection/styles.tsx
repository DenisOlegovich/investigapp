import { cn } from '@/utils'

export const styles = {
    mtApp: cn(
        'bg-red',
        'md:min-h-[35rem]',
        'xl:row-span-2',
        'xl:col-start-1',
        'gap-0',
        'p-[1.6rem] md:p-[2rem]',
        'active:shadow-lg'
    ),
    mtAppImg: cn(
        'w-auto',
        'h-[20rem] md:h-[25rem] xl:h-[37rem]',
        'absolute',
        'bottom-0',
        'right-[-10px]',
        'hidden sm:block'
    ),
    mtAppTitle: cn(
        'text-base md:text-base leading-xl md:leading-xl font-medium md:font-medium',
        'mb-[1rem] md:mr-[25%]'
    ),
    mtAppSubtitle: cn(
        'sm:mr-[20%] md:mr-[60%] mb-[4.2rem]',
        'text-xl md:text-xl leading-[3rem] md:leading-[4rem] font-medium md:font-medium'
    ),
    mtAppBody: cn('bottom-0', 'right-0', 'overflow-hidden', 'w-[100%]'),
    mtAppMal: cn(
        'mx-auto sm:mx-0 md:absolute',
        'md:bottom-[20px]',
        'md:left-[20px]',
        'gap-[12px]',
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-2',
        'text-base',
        'z-[3]',
        'w-full sm:w-max'
    ),

    metroApp: cn(
        'bg-white sm:bg-[#fafafa] z-[1]',
        'overflow-hidden',
        'md:min-h-[19.8rem]',
        'text-black',
        'xl:row-start-1',
        'xl:col-start-2',
        'p-[1.6rem] md:p-[2rem]',
        'active:shadow-lg'
    ),
    metroAppTitle: 'text-base md:text-base leading-xl md:leading-xl font-medium md:font-medium',
    metroAppSubtitle: cn(
        'md:mr-[50%] mb-[3rem] md:mb-0',
        'text-xl md:text-xl leading-[3rem] md:leading-[4rem] font-medium md:font-medium'
    ),
    metroAppBody: cn('bottom-0', 'right-0', 'overflow-hidden', 'w-[100%]'),
    metroAppExtra: cn('absolute', 'w-full', 'h-[70%] sm:h-full', 'bottom-0 right-0', 'z-[-1]'),
    metroAppImg: cn('w-full', 'h-full', 'object-cover', 'object-top sm:object-center', 'z-[-1]'),
    metroAppMal: cn(
        'mx-auto sm:mx-0 md:absolute',
        'md:bottom-[20px]',
        'md:left-[20px]',
        'gap-[12px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-3',
        'text-base',
        'w-full sm:w-max'
    ),

    parkingApp: cn(
        'bg-codd-parking',
        'z-[1]',
        'text-white',
        'overflow-hidden',
        'md:min-h-[19.8rem]',
        'xl:row-start-2',
        'xl:col-start-2',
        'p-[1.6rem] md:p-[2rem]',
        'active:shadow-lg'
    ),
    parkingAppImg: cn('absolute md:top-[-11rem] right-0 z-[-1]', 'h-auto', 'w-auto md:w-[30rem]'),
    parkingAppTitle: 'text-base md:text-base leading-xl md:leading-xl font-medium md:font-medium',
    parkingAppSubtitle: cn(
        'sm:mr-[20%] mb-[3rem] md:mb-0',
        'text-xl md:text-xl leading-[3rem] md:leading-[4rem] font-medium md:font-medium'
    ),
    parkingAppBody: cn('bottom-0', 'right-0', 'overflow-hidden', 'w-[100%]'),
    parkingAppExtra: cn('absolute', 'w-full', 'h-full', 'object-cover', 'object-center', 'bottom-0', 'right-0'),
    parkingAppMal: cn(
        'mx-auto sm:mx-0 md:absolute xl:static',
        'md:bottom-[20px]',
        'md:left-[20px]',
        'gap-[12px]',
        'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:flex xl:flex-wrap xl:justify-start',
        'text-base',
        'w-full sm:w-max xl:w-full',
        'z-[2]'
    ),
}
