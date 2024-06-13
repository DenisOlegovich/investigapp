import { cn } from '@/utils'

export const styles = {
    mapHeader: cn(
        'bg-white',
        'absolute top-0',
        'w-[100%] h-[6.5rem]',
        'after:content-[" "] after:bg-white after:absolute after:rounded-[50%] after:bottom-[-2rem] after:left-0 after:h-[4rem] after:w-full'
    ),
    mapImage: cn('w-full', 'h-full', 'object-cover', 'object-center'),
    mapWrapper: cn('min-h-[31.2rem]', 'md:col-span-6 lg:col-span-5', 'md:row-span-1 lg:row-span-3'),
    mapTitle: cn('md:text-2xl text-black', 'z-10'),
    mapBody: cn('absolute', 'bottom-0 top-0 right-0 left-0', 'overflow-hidden'),

    payImage: cn('w-[9.6rem] lg:w-[22.7rem]', 'h-auto'),
    payWrapper: cn('bg-[#5BA824]', 'min-h-[14.8rem]', 'md:col-span-6 lg:col-span-3', 'md:row-span-1 lg:row-span-3'),
    payTitle: cn('md:text-2xl'),
    payBody: cn('absolute', 'bottom-0', 'right-[-10px]'),

    permitCarImage: cn('w-[8.2rem] sm:w-[12.9rem]', 'h-auto'),
    permitWrapper: cn('bg-[#092360]', 'min-h-[10.6rem]', 'md:col-span-4', 'md:row-span-1', 'select-none'),
    permitTitle: cn('md:text-2xl text-white', 'mr-[50%]', 'z-10', 'pointer-events-none'),
    permitBody: cn(
        'absolute',
        'bottom-[50%] sm:bottom-[5%] lg:bottom-[50%]',
        'right-[10px] sm:right-0 lg:right-[20px]',
        'transform',
        'translate-y-[50%] sm:translate-y-0 lg:translate-y-[50%]'
    ),

    interceptionImage: cn('w-[7.5rem] sm:w-[12.7rem]', 'h-auto'),
    interceptionWrapper: cn('bg-white', 'min-h-[10.6rem]', 'md:col-span-4', 'md:row-span-1'),
    interceptionTitle: cn('md:text-2xl text-black', 'mr-[50%]', 'z-10', 'pointer-events-none'),
    interceptionBody: cn(
        'absolute',
        'bottom-[2rem] sm:bottom-[5%] xl:bottom-[50%]',
        'right-[2rem] sm:right-[10px] lg:right-[20px]',
        'transform translate-y-0 xl:translate-y-[50%]'
    ),

    balanceWrapper: cn('bg-white', 'min-h-[10.6rem]', 'md:col-span-4 md:row-span-1'),
    balanceTitle: cn('md:text-2xl text-black', 'mr-[50%]', 'z-10', 'pointer-events-none'),
    balanceBody: cn(
        'absolute',
        'bottom-[1.4rem] xl:bottom-[50%]',
        'left-[2rem] xl:left-[60%]',
        'transform translate-y-0 xl:translate-y-[50%]'
    ),
}
