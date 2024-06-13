import { cn } from '@/utils'

export const styles = {
    card: cn(
        'bg-grey-extra-light',
        'overflow-hidden',
        'w-full md:w-[42.1rem] md:min-h-[25rem]',
        'p-[1.6rem] md:p-[2rem]'
    ),
    cardTitle: cn('text-black', 'text-lg leading-base font-semibold md:text-2xl md:leading-lg'),
    cardSubtitle: cn('text-base leading-xl font-normal md:text-xl md:leading-lg md:font-normal', 'text-grey-dark'),
}
