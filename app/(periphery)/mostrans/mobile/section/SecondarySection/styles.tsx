import { cn } from '@/utils'

export const styles = {
    app: cn(
        'grid grid-cols-[auto,1fr] grid-rows-auto gap-y-0 lg:gap-y-3 gap-x-[2.4rem]',
        'p-0 md:p-0',
        'min-w-[250px] sm:max-w-[644px] max-h-[116px] lg:max-h-[148px]',
        'shadow-none hover:shadow-none'
    ),
    appImg: cn('w-[48px] md:w-[116px] lg:w-[148px]'),
    appTitle: cn('col-start-2 md:text-5xl lg:text-7xl lg:leading-base text-black'),
    appSubtitle: cn('col-start-2 hidden md:block text-base lg:text-xl font-medium md:font-medium text-black'),
    appLinksContainer: cn('flex flex-wrap gap-[1.2rem] max-w-[20rem] sm:max-w-full'),
    appLinks: 'text-base lg:text-xl font-medium md:font-medium',
    appBody: 'col-start-2 self-end',
    appExtra: 'col-start-1 col-end-2 row-start-1 row-end-4',
}
