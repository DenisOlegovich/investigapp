import { cn } from '@/utils'

export const variants = {
    default: {
        radioGroupContainer: 'flex flex-col gap-2',
        radioItemContainer: 'items-center gap-[0.8rem]',
        itemLabel: '',
    },
    button: {
        radioGroupContainer: cn(
            'flex flex-row',
            'border-[1px] border-solid border-grey-light rounded-[0.7rem]',
            'w-fit',
            'bg-grey-light'
        ),
        radioItemContainer: cn('rounded-[0.7rem]', 'bg-grey-light'),
        itemLabel: cn(
            'py-4 px-6 md:py-[0.4rem]',
            'data-[type=icon]:py-[0.55rem] data-[type=icon]:px-[1.35rem] md:data-[type=icon]:py-3 md:px-[1.7rem]'
        ),
    },
}

export const colorSchemes = {
    white: 'peer-checked:bg-grey-light peer-checked:border-grey-light',
    grey: 'peer-disabled:bg-grey-light',
}

export const styles = {
    container: 'flex flex-col items-start gap-4',

    radioItemContainer: cn('flex', 'cursor-pointer'),

    checkmark: cn(
        'size-[2.4rem] rounded-full border-[1px] border-solid border-grey bg-white',
        'transition-[background-color,border-color,color,opacity,transform] duration-200',
        'flex justify-center items-center',
        'peer-checked:before:content-[""] peer-checked:before:size-[50%] peer-checked:before:rounded-full peer-checked:before:bg-midnight',
        'peer-disabled:opacity-30'
    ),

    itemLabel: cn('body-s', 'select-none', 'peer-disabled:opacity-30'),
}
