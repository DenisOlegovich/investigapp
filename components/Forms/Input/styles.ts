import { cn } from '@/utils'

export const styles = {
    inputCommonBase: cn(
        'bg-white w-full input px-[1.2rem] relative',
        'outline-0 appearance-none',
        'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-[#828c9666]',
        'transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200'
    ),
    singleInputOutline: cn(
        'h-[3.6rem] md:h-[4.4rem]',
        'rounded-[.8rem] bg-white border-solid border-[1px] border-[#828c9666] hover:border-[#828c96cc]',
        'read-only:shadow-none read-only:select-all',
        'focus-visible:border-midnight-light focus-visible:z-[1]',
        'aria-[invalid=true]:border-red-error aria-[invalid=true]:placeholder:text-red-error/[.6] aria-[invalid=true]:text-red-error'
    ),
    singleInputUnbordered: cn(
        'h-full px-0',
        'aria-[invalid=true]:placeholder:text-red-error/[.6] aria-[invalid=true]:text-red-error'
    ),
    groupInputOutline: cn(
        'flex items-center gap-[1.2rem]',
        'h-[3.6rem] md:h-[4.4rem]',
        'rounded-[.8rem] bg-white border-solid border-[1px] border-[#828c9666] hover:border-[#828c96cc]',
        'read-only:shadow-none read-only:select-all',
        'focus-visible:border-midnight-light focus-visible:z-[1]'
    ),
    prefixPostfixCommonBase: 'h-full flex items-center w-fit',
}
