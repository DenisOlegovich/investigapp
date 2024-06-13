import { cn } from '@/utils'

export const styles = {
    oplataProezda: cn('bg-midnight', 'min-h-[14.8rem] md:min-h-[24.5rem]'),
    oplataProezdaImg: cn('w-auto object-cover', 'h-[16rem] md:h-[20rem] xl:h-[26rem]'),
    oplataProezdaTitle: cn('md:text-2xl', 'mr-[25%]', 'z-10', 'pointer-events-none'),
    oplataProezdaBody: cn('absolute', 'bottom-0', 'right-0', 'overflow-hidden', 'rounded-br-[1rem]'),

    helping: cn('bg-[#2a3057]', 'overflow-hidden', 'min-h-[14.8rem] md:min-h-[24.5rem]'),
    helpingIcon: cn('w-[13.4rem] md:w-full', 'h-auto'),
    helpingTitle: 'md:text-2xl',
    helpingBody: cn('absolute', 'md:left-0', 'right-0', 'bottom-[-1.5rem] md:bottom-[-3rem]', 'h-full', 'justify-end'),

    priceParking: cn(
        'bg-white',
        'text-black',
        'overflow-hidden',
        'min-h-[14.8rem]',
        'row-start-4 md:row-start-2',
        'md:col-span-2',
        'lg:col-start-2'
    ),
    priceParkingImg: cn('h-full', 'w-auto'),
    priceParkingTitle: cn('md:text-2xl', 'mr-[50%]'),
    priceParkingSubtitle: cn('mr-[50%]', 'leading-[2.2rem]', 'hidden md:block'),
    priceParkingBody: cn('absolute', 'right-[-2rem] md:right-[-6rem] xl:right-0', 'bottom-0', 'h-full'),
}
