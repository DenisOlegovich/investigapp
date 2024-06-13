import { cn } from '@/utils'

export const variants = {
    primary: cn(
        'bg-grey/[0.3] peer-checked:data-[type=default]:bg-midnight-light',
        'before:data-[type=default]:bg-white'
    ),
    secondary: cn(
        'bg-white/[0.3] peer-checked:data-[type=default]:bg-white',
        'before:bg-white peer-checked:data-[type=default]:before:bg-black'
    ),
}

export const styles = {
    label: cn('relative', 'inline-flex', 'items-center', 'gap-[1rem]', 'select-none'),
    base: cn(
        'inline-flex',
        'justify-start',
        'p-[1px]',
        'bg-grey/[0.3]',
        'cursor-pointer',
        'rounded-[1rem]',
        'h-[1.4rem] w-[2.8rem]',
        'box-content',
        'transition-[color] duration-150',
        `before:content=[''] before:h-[1.4rem] before:w-[1.4rem] before:rounded-[50%] before:bg-midnight-light`,
        'before:transition-all before:ease-linear before:duration-200',
        'peer-checked:before:translate-x-[1.4rem]'
    ),
    text: 'cursor-pointer',
    input: cn('sr-only', 'peer'),
}
