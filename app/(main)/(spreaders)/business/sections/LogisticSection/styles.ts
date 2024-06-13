import { cn } from '@/utils'

export const styles = {
    gruzovikiReestr: cn(
        'bg-white',
        'text-black',
        'xl:row-span-2',
        'overflow-hidden',
        'min-h-[14.8rem] sm:min-h-[20rem]'
    ),
    gruzovikiReestrImg: cn('h-full', 'w-full', 'object-cover', 'object-right-bottom'),
    gruzovikiReestrTitle: cn('relative', 'z-[1]', 'md:text-2xl', 'mr-[10%] md:mr-0', 'pointer-events-none'),
    gruzovikiReestrBody: cn('absolute', 'inset-x-0', 'bottom-0', 'md:h-[60%] xl:h-[50%]'),

    mapGruzovikHeader: cn(
        'bg-white',
        'absolute top-0',
        'w-[100%] h-[6.5rem]',
        'after:content-[" "] after:bg-white after:absolute after:rounded-[50%] after:bottom-[-2rem] after:left-0 after:h-[4rem] after:w-full'
    ),
    mapGruzovikImage: cn('w-full', 'h-full', 'object-cover', 'object-center'),

    freightLogistic: cn('bg-cargo-dark'),
    freightLogisticTitle: 'md:text-2xl',
    freightLogisticBody: cn('text-white'),
    freightLogisticLink: cn(
        'text-[1.6rem] md:text-[1.6rem]',
        'text-white',
        'underline decoration-1',
        'underline-offset-[0.6rem]',
        'transition decoration-[#61837a] hover:decoration-white duration-150'
    ),
}
