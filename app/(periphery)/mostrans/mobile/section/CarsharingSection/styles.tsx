import { cn } from '@/utils'

export const styles = {
    app: cn(
        'grid grid-cols-[auto,1fr] grid-rows-auto gap-y-0 md:gap-y-5 gap-x-[2.4rem]',
        'p-0 md:p-0',
        'max-w-[644px] max-h-[116px] lg:max-h-[148px]',
        'shadow-none hover:shadow-none'
    ),
    appImg: cn('w-[48px] md:w-[72px]'),
    appTitle: cn('text-2xl leading-2xs font-medium md:font-medium md:text-2xl md:leading-lg text-black pt-0'),
    appLinksContainer: cn('flex flex-wrap gap-[1.2rem]'),
    appLinks: 'text-base lg:text-xl font-medium md:font-medium',
    appBody: 'col-start-2',
    appExtra: 'col-start-1 col-end-2 row-start-1 row-end-4',
}
