import { cn } from '@/utils'

export const styles = {
    carsharingImage: cn('absolute', 'w-full', 'h-full', 'object-cover', 'object-left'),
    carsharingWrapper: cn('min-h-[31.3rem]', 'md:text-2xl text-black', 'overflow-hidden'),
    carsharingContainer: cn('text-white'),
    carsharingBody: cn('absolute', 'inset-0', 'z-[-1]', 'overflow-hidden'),

    energyImage: cn('w-full', 'h-full', 'object-cover', 'object-top'),
    energyWrapper: cn('min-h-[31.3rem]', 'md:text-2xl text-black', 'overflow-hidden'),
    energyTitle: cn('h4 text-black', 'z-10'),
    energyBody: cn('absolute', 'bottom-0 top-0 right-0 left-0', 'overflow-hidden'),

    meetingImage: cn('w-auto', 'h-[18.4rem] md:h-[19.2rem]'),
    meetingWrapper: cn(
        'min-h-[19.2rem]',
        'md:text-2xl text-black',
        'col-span-1 md:col-span-3 lg:col-span-2',
        'overflow-hidden'
    ),
    meetingTitle: cn('mr-[30%]'),
    meetingBody: cn('absolute', 'bottom-[-1rem] md:bottom-0', 'right-[-2rem] md:right-0'),

    cargoWrapper: cn('bg-cargo-dark', 'md:text-2xl text-white', 'col-span-1 md:col-span-3 lg:col-span-2'),
    cargoLink: cn(
        'text-[1.6rem] md:text-[1.6rem]',
        'text-white',
        'underline decoration-1',
        'underline-offset-[0.6rem]',
        'transition decoration-[#61837a] hover:decoration-white duration-150'
    ),
}
