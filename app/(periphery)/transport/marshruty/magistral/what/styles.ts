import { cn } from '@/utils'

export const styles = {
    title: cn('h3', 'mt-[3.2rem]', 'mb-md md:mb-lg'),
    text: cn('mt-xs md:mt-base first:mt-0'),
    wrapper: cn('text-base', 'xl:ml-base', 'mt-[3.2rem] md:mt-[4.8rem] xl:mt-0'),
    statistics: cn(
        'grid grid-cols-2 xl:flex lg:flex-col',
        'gap-[1.6rem] md:gap-[2.4rem] lg:gap-[6.5rem]',
        'justify-start',
        'mt-[3.2rem] md: mt-[2.4rem] xl:mt-[6.5rem]',
        'xl:ml-base'
    ),
}
