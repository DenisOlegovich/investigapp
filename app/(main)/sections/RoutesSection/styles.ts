import { cn } from '@/utils'

export const styles = {
    map: cn('text-black min-h-[40.8rem] overflow-hidden', 'row-span-2', 'md:col-span-1 xl:col-span-2'),
    mapImg: cn('w-full', 'h-full', 'object-cover'),
    mapTitle: cn('md:text-2xl ', 'w-[14.3rem] md:w-full', 'mt-[0.7rem]'),
    mapIcon: cn('absolute top-[2rem] right-[2rem]', 'w-[4.6rem] h-[4.6rem]', 'text-[#EE2E24]'),
    mapBody: cn('absolute', 'inset-0', 'z-[-1]'),

    magistral: cn('bg-blue overflow-hidden', 'row-span-1'),
    magistralIcon: cn('absolute left-[-2.2rem] bottom-[-3.8rem] text-[17rem]'),
    magistralTitle: 'md:text-2xl',

    probki: cn('text-black overflow-hidden', 'row-span-1', 'min-h-[31.2rem] md:min-h-[19.2rem]'),
    probkiTitle: cn('h3 md:body_bold'),
    probkiBody: cn('absolute', 'inset-0', 'z-[-1]'),
    probkiImg: cn('w-full', 'h-full', 'object-cover'),
    probkiIcon: cn('w-auto h-[3.4rem] md:h-[5.4rem] z-10', 'text-[#65B32E]'),
    probkiHeader: cn(
        'flex justify-between gap-[1.2rem]',
        'bg-white',
        'absolute z-[0] top-0',
        'w-[100%] p-[2rem] pb-[0]',
        'after:content-[" "] after:bg-white after:absolute after:rounded-[50%] after:bottom-[-2rem] after:left-0 after:h-[4rem] after:w-full'
    ),
    probkiTraffic: cn('h-[3rem] w-[3rem] rounded-[50%] flex justify-center items-center relative'),
    probkiTrafficTopIcon: cn('absolute top-[-1px] w-[100%]'),
    probkiTitleWrapper: cn('flex gap-[1.2rem] z-10'),
}
