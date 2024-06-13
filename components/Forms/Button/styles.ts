import { cn } from '@/utils'

export const variants = {
    primary: cn(
        '[&[type]]:bg-blue',
        'md:hover:[&[type]]:bg-gradient-to-b hover:[&[type]]:from-blue/[0.5] hover:[&[type]]:to-[#5A90D8]/[0.5]',
        'max-[48em]:[&[type]]:bg-gradient-to-t',
        'max-[48em]:active:[&[type]]:from-[#2D3A72]/[0.5] max-[48em]:[&[type]]:active:via-[#2D3A72]/[0.35]',
        'md:active:[&[type]]:bg-blue-dark',
        'aria-[disabled=true]:[&[type]]:bg-blue/[0.3] aria-[disabled=true]:[&[type]]:text-white/[0.5]'
    ),
    danger: cn(
        '[&[type]]:bg-red',
        'hover:[&[type]]:bg-[#EC4636] active:[&[type]]:bg-[#C70E27]',
        '[&[type]]:bg-gradient-to-r hover:[&[type]]:from-[#D1430F]/[0.34] hover:[&[type]]:to-[#D92032]/[0.34]',
        'aria-[disabled=true]:[&[type]]:bg-[#FF3B4E4D]/[0.3]'
    ),
    secondary: cn(
        '[&[type]]:bg-grey-dark/[0.1]',
        'text-grey-dark',
        'active:[&[type]]:bg-grey-dark/[0.3]',
        'active:[&[type]]:shadow-[0px_7px_10px_0px_#0000000F_inset]',
        'hover:[&[type]]:bg-grey-dark/[0.17]'
    ),
    'primary-light': cn(
        '[&[type]]:bg-[#0A51A1]/[0.2] hover:[&[type]]:bg-blue/[0.3] active:[&[type]]:bg-blue-dark/[0.3]',
        '[&[type]]:bg-gradient-to-b hover:[&[type]]:from-blue/[0.2] hover:[&[type]]:to-[#5A90D8]/[0.2]'
    ),
    'text': cn(
        'text-black underline underline-offset-[6px] decoration-dashed decoration-black/[.3] decoration-[1px]',
        'hover:text-[#1337AD] hover:decoration-[#1337AD]/[.3]'
    ),
}

export const sizes = {
    l: cn('h-[4.8rem] md:h-[5.6rem]', 'px-[4rem] md:px-[8.6rem]'),
    m: cn('h-[4.8rem]', 'px-[4rem] md:px-[4.6rem]'),
    s: cn('h-[4.8rem] md:h-[3.2rem]', 'px-[4rem] md:px-[2.7rem]'),
}

export const styles = {
    base: cn(
        'text-white text-[1.6rem]',
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-[0.8rem]',
        'select-none',
        'aria-[disabled=true]:pointer-events-none'
    ),
    icon: cn('inline-block', 'align-middle', 'text-[1em]', 'mx-[2px]'),
}
