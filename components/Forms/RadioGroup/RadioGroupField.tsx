import { forwardRef } from 'react'

import { RadioGroupItemProps, RadioGroupProps } from './types'
import { cn } from '@/utils'
import RadioGroupItem from './RadioGroupItem'

import { variants } from './styles'

const RadioGroupField = forwardRef<HTMLDivElement, Omit<RadioGroupProps, 'label'>>(
    ({ options = [], isDisabled, value, className, ...props }, ref) => {
        const {
            variant = 'default',
            colorScheme = 'white',
            anatomy: { radioGroupContainer: radioGroupContainerClassname = '' } = {},
        } = props

        return (
            <div
                className={cn(
                    variants[variant].radioGroupContainer,
                    {
                        'gap-[0.3rem]': variant === 'button' && options[0].label,
                        'bg-grey/[0.25] border-grey/[0.25]': colorScheme === 'grey' && variant === 'button',
                    },
                    className,
                    radioGroupContainerClassname
                )}
                ref={ref}
            >
                {options.map((option, indx) => {
                    const itemProps: RadioGroupItemProps = {
                        ...props,
                        ...option,
                        isDisabled: isDisabled || option.isDisabled,
                        isChecked: value === option.value,
                    }

                    return (
                        <RadioGroupItem
                            key={indx}
                            variant={variant}
                            {...itemProps}
                        />
                    )
                })}
            </div>
        )
    }
)

RadioGroupField.displayName = 'RadioGroupField'

export default RadioGroupField
