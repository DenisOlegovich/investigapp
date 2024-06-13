import { cn } from '@/utils'

export const styles = {
    mapHeader: cn(
        'bg-white',
        'absolute top-0',
        'w-[100%] h-[7.5rem]',
        'after:content-[" "] after:bg-white after:absolute after:rounded-[50%] after:bottom-[-2rem] after:left-0 after:h-[4rem] after:w-full'
    ),
    image: cn('w-full', 'h-full', 'object-cover', 'object-center'),
    coddDescImage: cn('hidden md:block', 'absolute', 'right-[2rem]', 'top-[2rem]'),
    coddMobileImage: cn('block md:hidden', 'w-[2rem] h-[3.4rem]', 'absolute', 'right-[2rem]', 'top-[2rem]'),
}
