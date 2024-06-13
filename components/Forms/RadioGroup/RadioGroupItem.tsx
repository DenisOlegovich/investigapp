import { FC, useCallback, ChangeEvent } from 'react'

import { RadioGroupItemProps } from './types'
import { cn } from '@/utils'
import { computeRadioItemContainerStyles } from './utils'

import { styles, colorSchemes, variants } from './styles'

const RadioGroupItem: FC<RadioGroupItemProps> = ({
    variant = 'default',
    label,
    icon,
    isDisabled,
    isChecked,
    colorScheme = 'white',
    onChange,
    anatomy: {
        radioItemContainer: radioItemContainerClassName = '',
        input: inputClassName = '',
        checkmark: checkmarkClassName = '',
        itemLabel: itemLabelClassName = '',
    } = {},
    ...props
}) => {
    const changeHandler = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value

            onChange && onChange(newValue)
        },
        [onChange]
    )

    return (
        <label
            className={cn(
                styles.radioItemContainer,
                variants[variant].radioItemContainer,
                { ...computeRadioItemContainerStyles({ variant, icon, isChecked, isDisabled }) },
                radioItemContainerClassName
            )}
        >
            <input
                type="radio"
                className={cn('peer sr-only', inputClassName)}
                checked={isChecked}
                onChange={changeHandler}
                disabled={isDisabled}
                {...props}
            />

            {variant === 'default' && (
                <span className={cn(styles.checkmark, colorSchemes[colorScheme], checkmarkClassName)} />
            )}

            <div
                className={cn(styles.itemLabel, variants[variant].itemLabel, itemLabelClassName)}
                data-type={icon && 'icon'}
            >
                {label ?? icon}
            </div>
        </label>
    )
}

export default RadioGroupItem
