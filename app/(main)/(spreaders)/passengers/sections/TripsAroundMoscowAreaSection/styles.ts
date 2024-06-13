import { cn } from '@/utils'

export const styles = {
    trainsRules: cn(
        'text-black',
        'md:col-span-2',
        'lg:row-span-2',
        'overflow-hidden',
        'min-h-[31.2rem] md:min-h-0',
        `before:content=[''] before:absolute before:top-0 before:inset-x-0`,
        'before:h-[16rem] before:bg-gradient-to-b before:from-[#D1F1FF] before:to-transparent'
    ),
    trainsRulesImg: cn('w-full', 'h-full', 'object-cover', 'object-center'),
    trainsRulesTitle: cn('relative', 'z-[1]', 'md:text-2xl', 'pointer-events-none'),
    trainsRulesSubtitle: cn('relative', 'z-[1]', 'pointer-events-none'),
    trainsRulesBody: cn('absolute', 'inset-0', 'z-[-1]'),

    trains: cn('bg-white', 'text-black', 'overflow-hidden', 'min-h-[14.8rem]'),
    // trainsIcon: cn('w-auto', 'h-full', 'text-[#015593]'),
    trainsImg: cn('w-auto', 'h-full'),
    trainsTitle: cn('md:text-xl', 'md:leading-[2.6rem]', 'pr-[50%]', 'relative z-[1]'),
    trainsBody: cn('absolute', 'bottom-0', 'items-end', 'right-0 md:right-[-2rem]', 'h-full'),
    trainsLink: 'z-[2]',

    troika: cn('bg-troika', 'overflow-hidden', 'min-h-[14.8rem]'),
    troikaImg: cn('w-auto', 'h-[13.6rem] md:h-[16.5rem] xl:h-[23.7rem]'),
    troikaTitle: 'md:text-2xl',
    troikaBody: cn(
        'absolute',
        'w-max',
        'bottom-[-10%] lg:bottom-[-20%]',
        'right-[-5px] md:right-[-10%] lg:bottom-[-20%]'
    ),

    rates: cn('text-black', 'overflow-hidden', 'min-h-[14.8rem]'),
    ratesImg: cn('w-auto', 'h-full', 'object-cover'),
    ratesTitle: cn('md:text-xl', 'md:leading-[2.6rem]'),
    ratesBody: cn('absolute', 'inset-y-0', 'right-[-3rem] z-[-1]'),

    bicycle: cn('bg-carsharing-orange', 'text-black', 'min-h-[14.8rem]'),
    bicycleIcon: cn('text-[99.2px]', 'h-auto', 'text-white'),
    bicycleTitle: 'md:text-xl',
    bicycleBody: cn('my-auto', 'self-end md:self-center'),
}
