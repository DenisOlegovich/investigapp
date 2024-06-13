import { ChangeEvent, forwardRef, useCallback } from 'react'

import { SwitchCommonProps, SwitchDefaultProps } from './types'
import { cn } from '@/utils'

import { styles, variants } from './styles'

const SwitchDefault = forwardRef<HTMLInputElement, SwitchDefaultProps & SwitchCommonProps>(
    (
        {
            variant = 'primary',
            label,
            value,
            onChange,
            className,
            anatomy: { input: inputClassName, toggle: toggleClassName, text: textClassName } = {},
            ...props
        },
        ref
    ) => {
        const changeHandler = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                const newVAlue = event.target.checked

                onChange?.(newVAlue)
            },
            [onChange]
        )

        return (
            <label
                className={cn(styles.label, className)}
                {...props}
            >
                <input
                    type="checkbox"
                    checked={value}
                    onChange={changeHandler}
                    className={cn(styles.input, inputClassName)}
                    ref={ref}
                />
                <span
                    className={cn(styles.base, variants[variant], toggleClassName)}
                    data-type="default"
                />

                {label && <span className={cn(styles.text, textClassName)}>{label}</span>}
            </label>
        )
    }
)

SwitchDefault.displayName = 'SwitchDefault'

export default SwitchDefault
