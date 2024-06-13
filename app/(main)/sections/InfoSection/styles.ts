import { cn } from '@/utils'

export const styles = {
    mobile: cn('bg-midnight', 'min-h-[34.8rem] md:min-h-[40.8rem]', 'overflow-hidden', 'md:row-span-2'),
    mobileImg: cn('w-full', 'h-[22.8rem] md:h-full', 'object-cover'),
    mobileBody: cn('absolute bottom-[-1.5rem] left-0 right-0'),

    payFine: cn(
        'bg-grey',
        'min-h-[17.2rem] md:min-h-[19.2rem]',
        'md:row-start-1',
        'md:col-start-2',
        'overflow-hidden',
        'whitespace-pre-line'
    ),
    payFineImg: cn('w-[15.2rem]', 'h-[19.2rem]', 'object-cover'),
    payFineBody: cn('absolute right-0'),

    lostAndFound: cn('bg-[#704330]', 'min-h-[17.2rem] md:min-h-[19.2rem]', 'md:row-start-2', 'md:col-start-2'),
    lostAndFoundImg: cn('w-full', 'h-[15rem] md:h-[21rem] lg:h-[15rem] xl:h-[21rem]', 'object-cover', 'rounded-[1rem]'),
    lostAndFoundBody: cn('absolute bottom-0 right-0'),
    lostAndFoundSubtitle: cn('z-10', 'max-w-[14rem]'),

    zIndex: cn('z-10', 'pointer-events-none'),
}
