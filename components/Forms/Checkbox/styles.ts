import { cn } from '@/utils'

export const styles = {
    wrapperCommon: cn('appearance-none read-only:shadow-none read-only:select-none', 'cursor-pointer'),

    fieldWrapper: cn(
        'relative bg-white',
        'flex justify-center items-center size-[2.4rem]',
        'rounded-[.4rem] border-solid border-[1px] border-grey',
        'transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200',
        'hover:border-midnight-light'
    ),

    input: cn('absolute top-0 left-0 size-full cursor-pointer opacity-0', 'disabled:cursor-not-allowed'),
}
