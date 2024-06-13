import { cn } from '@/utils'

export const styles = {
    oplataProezda: cn('bg-grey', 'min-h-[14.8rem]', 'row-start-2 md:row-start-1', 'md:col-span-2', 'md:col-start-2'),
    oplataProezdaImg: cn('w-auto', 'h-[11.9rem] md:h-[16.5rem] lg:h-[23.5rem]'),
    oplataProezdaSubtitle: 'mr-[50%]',
    oplataProezdaBody: cn('absolute', 'bottom-0', 'right-0'),

    troika: cn('bg-troika', 'overflow-hidden', 'md:col-start-2', 'row-start-3 md:row-start-2', 'min-h-[14.8rem]'),
    troikaImg: cn('w-auto', 'h-[13.6rem] md:h-[16.5rem] lg:h-[20rem] xl:h-[26.3rem]'),
    troikaBody: cn(
        'absolute',
        'w-max',
        'bottom-[-10%] lg:bottom-[-20%]',
        'right-[-5px] md:right-[-10%] lg::right-[-10%]'
    ),

    aboutMCD: cn('md:row-span-1', 'overflow-hidden', 'min-h-[14.8rem]', 'row-start-4 md:row-start-2', 'md:col-start-3'),
    aboutMCDImg: cn('h-full', 'w-full', 'object-cover', 'object-[left_0_bottom_-2rem] sm:object-center'),
    aboutMCDBody: cn('absolute', 'inset-0', 'z-[-1]'),

    cardTitle: 'md:text-2xl',
}
