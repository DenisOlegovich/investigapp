import { cn } from '@/utils'

export const styles = {
    oplataProezda: cn(
        'bg-grey',
        'min-h-[14.8rem] md:h-[21.0rem]',
        'row-start-3 md:row-start-2',
        'md:col-span-2',
        'md:col-start-2'
    ),
    oplataProezdaImg: cn('w-auto', 'h-[11.9rem] md:h-[23.5rem]'),
    oplataProezdaTitle: 'md:text-2xl',
    oplataProezdaSubtitle: 'mr-[50%]',
    oplataProezdaBody: cn('absolute', 'bottom-0', 'right-0'),

    liksutov: cn(
        'bg-[#87addf]',
        'overflow-hidden',
        'md:col-start-2',
        'row-start-4 md:row-start-3',
        'min-h-[19.2rem] md:min-h-[24.5rem]'
    ),
    liksutovImage: cn('w-[16.3rem] xl:w-[19.2rem]', 'h-[14.6rem] xl:h-[17.2rem]'),
    liksutovTitle: cn('md:text-2xl'),
    liksutovBody: cn('absolute', 'w-max', 'bottom-0', 'right-[2.7rem]'),

    specialPermitSubmit: cn(
        'md:row-span-1',
        'overflow-hidden',
        'min-h-[14.8rem]',
        'row-start-5 md:row-start-3',
        'md:col-start-3',
        'bg-red'
    ),
    specialPermitSubmitTitle: cn('lg:text-lg xl:text-2xl'),

    delivery: cn(
        'bg-carsharing-orange',
        'row-start-1 col-span-full lg:col-span-6',
        'mb-xs',
        'flex-row',
        'justify-between',
        'py-[1.2rem] md:py-[0.5rem]',
        'pl-[1.6rem] md:pl-[2.4rem]',
        'pr-[0.8rem] md:pr-[1.2rem]'
    ),
    deliveryIcon: cn('text-[4.4rem] md:text-[6rem]'),
    deliveryTitle: cn('body-s_bold md:text-2xl', 'my-auto'),
}
