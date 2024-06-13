import { ChangeEvent, forwardRef, useCallback } from 'react'

import { SwitchBetweenProps, SwitchCommonProps } from './types'
import { cn } from '@/utils'

import { styles, variants } from './styles'

const SwitchBetween = forwardRef<HTMLInputElement, SwitchBetweenProps & SwitchCommonProps>(
    (
        {
            variant = 'primary',
            options,
            value,
            onChange,
            className,
            anatomy: { input: inputClassName, toggle: toggleClassName, text: textClassName } = {},
            ...props
        },
        ref
    ) => {
        const isChecked = value === options?.[1]?.value

        const changeHandler = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                const index = event.target.checked ? 1 : 0

                onChange?.(options?.[index].value)
            },
            [onChange, options]
        )

        return (
            <label
                className={cn(styles.label, className)}
                {...props}
            >
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={changeHandler}
                    className={cn(styles.input, inputClassName)}
                    ref={ref}
                />
                {options[0]?.label && <span className={cn(styles.text, textClassName)}>{options[0].label}</span>}
                <span
                    className={cn(styles.base, variants[variant], toggleClassName)}
                    data-type="between"
                />
                {options[1]?.label && <span className={cn(styles.text, textClassName)}>{options[1].label}</span>}
            </label>
        )
    }
)

SwitchBetween.displayName = 'SwitchBetween'

export default SwitchBetween
