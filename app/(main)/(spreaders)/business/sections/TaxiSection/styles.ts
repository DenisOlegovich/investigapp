import { cn } from '@/utils'

export const styles = {
    taxiHeader: cn(
        'bg-white',
        'absolute top-0',
        'w-[100%] h-[6.5rem]',
        'after:content-[" "] after:bg-white after:absolute after:rounded-[50%] after:bottom-[-2rem] after:left-0 after:h-[4rem] after:w-full'
    ),
    taxiImage: cn('w-full', 'h-full', 'object-cover', 'object-center'),
}
