import { cn } from '@/utils'
import { RadioGroupItemProps } from './types'

export const computeRadioItemContainerStyles = ({
    variant,
    icon,
    isDisabled,
    isChecked,
}: Pick<RadioGroupItemProps, 'variant' | 'icon' | 'isChecked' | 'isDisabled'>) => ({
    'cursor-not-allowed': isDisabled,
    'bg-white': variant === 'button' && isChecked,
    '[:hover&_span]:border-midnight-light': variant === 'default' && !isChecked && !isDisabled,
    'hover:bg-white/[0.5]': variant === 'button' && !isChecked && !isDisabled,
    'text-grey-dark': variant === 'button' && !isChecked && !isDisabled && !icon,
    'border-solid [&:not(:first-child)]:border-l': icon,
    [cn(
        '[&:not(:first-child)]:rounded-l-none [&:not(:last-child)]:rounded-r-none',
        '[&:not(:first-child)]:border-l-grey/[0.4]'
    )]: icon && !isChecked,
    '[&:not(:first-child)]:border-l-transparent [&+*]:[&:not(:last-child)]:border-l-transparent': icon && isChecked,
})
