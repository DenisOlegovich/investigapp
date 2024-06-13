import { cn } from '@/utils'

export const styles = {
    mapCargoFrame: cn(
        'text-black',
        'min-h-[31.2rem] md:min-h-[47.9rem]',
        'md:col-span-2',
        'md:row-span-2',
        'md:row-start-1',
        'overflow-hidden'
    ),

    reka: cn(
        'bg-[#171F34]',
        'max-md:min-h-[9.8rem]',
        'md:col-start-3',
        'md:row-start-1',
        'md:max-lg:col-span-2',
        'overflow-hidden'
    ),
    rekaIcon: cn(
        'text-[6.9rem] md:text-[12rem] xl:text-[17.4rem]',
        'absolute ',
        'right-[-0.2rem] md:right-[-0.5rem]',
        'bottom-[1rem]'
    ),

    searchCarPound: cn(
        'bg-red',
        'max-md:min-h-[17.2rem]',
        'md:col-start-5 lg:col-start-4',
        'md:row-start-1',
        'md:max-lg:col-span-2',
        'overflow-hidden',
        'lg:p-[1rem]',
        'hyphens-auto',
        'whitespace-pre-line'
    ),
    searchCarPoundImage: cn(
        'text-[#991624]',
        ' text-[15.7rem] md:text-[12rem] xl:text-[15.7rem]',
        'absolute right-0 bottom-[1.7rem] '
    ),

    gruzovikiReestr: cn(
        'bg-white text-black',
        'max-md:min-h-[34.8rem]',
        'md:col-span-2',
        'md:row-start-2',
        'md:max-lg:col-span-4',
        'overflow-hidden'
    ),
    gruzovikiReestrBody: cn('absolute bottom-0 left-0 right-0'),
    gruzovikiReestrTitle: cn('z-10', 'pointer-events-none'),
    gruzovikiReestrImg: cn('w-full', 'h-[20rem] md:h-full', 'object-cover object-right'),

    electro: cn(
        'text-black',
        'min-h-[31.2rem]',
        'md:col-span-2',
        'md:row-span-2',
        'overflow-hidden',
        'flex md:hidden lg:flex'
    ),

    mapBody: cn('absolute', 'inset-0', 'z-[-1]'),
    mapHeader: cn(
        'flex justify-between gap-[1.2rem]',
        'bg-white',
        'absolute z-[0] top-0',
        'w-[100%] h-[7.5rem] p-[2rem] pb-[0]',
        'after:content-[" "] after:bg-white after:absolute after:rounded-[50%] after:bottom-[-2rem] after:left-0 after:h-[4rem] after:w-full'
    ),
    mapImg: cn('w-full', 'h-full', 'object-cover'),
}
