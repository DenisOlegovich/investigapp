import { cn } from '@/utils'

export const styles = {
    mapHeader: cn(
        'bg-white',
        'absolute top-0',
        'w-[100%] h-[6.5rem]',
        'after:content-[" "] after:bg-white after:absolute after:rounded-[50%] after:bottom-[-2rem] after:left-0 after:h-[4rem] after:w-full'
    ),
    mapImage: cn('w-full', 'h-full', 'object-cover', 'object-center'),
    mapWrapper: cn('min-h-[31.2rem]', 'md:col-span-3 lg:col-span-2', 'overflow-hidden'),
    mapTitle: cn('md:text-2x text-black', 'z-10'),
    mapBody: cn('absolute', 'bottom-0 top-0 right-0 left-0', 'overflow-hidden'),

    carImage: cn('w-[16.4rem] xl:w-[32.9rem]', 'h-auto'),
    carWrapper: cn('bg-red', 'min-h-[14.8rem]', 'md:col-span-3 lg:col-span-2'),
    carTitle: 'md:text-2xl',
    carBody: cn('absolute', 'bottom-[0.6rem] lg:bottom-[3.7rem]', 'right-0'),
}
