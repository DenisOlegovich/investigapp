import { forwardRef } from 'react'
import { cn } from '@/utils'

import { CheckboxProps } from '.'
import theme from '@/themes/tailwind/index'
import { styles } from './styles'
import CheckIcon from '@/components/icons/CheckIcon'
import MinusIcon from '@/components/icons/MinusIcon'

const CheckboxField = forwardRef<HTMLInputElement, Omit<CheckboxProps, 'label'>>(
    (
        {
            isChecked,
            isIndeterminate = false,
            isDisabled,
            isRequired,
            isInvalid,
            colorScheme = 'white',
            className,
            anatomy: {
                fieldWrapper: fieldWrapperCustomProps = '',
                input: inputCustomProps = '',
                iconCheck: iconCheckCustomProps = '',
                iconIndeterminate: iconIndeterminateCustomProps = '',
            } = {},
            ...props
        },
        ref
    ) => {
        return (
            <div
                className={cn(
                    styles.fieldWrapper,
                    isDisabled && 'opacity-30 bg-[#ffffff59] hover:border-grey',
                    isInvalid && 'border-red-error hover:border-red-error',
                    isChecked && colorScheme === 'grey' && 'bg-grey-light',
                    isInvalid && colorScheme === 'grey' && 'bg-[#ffffff59]',
                    className,
                    fieldWrapperCustomProps
                )}
            >
                <input
                    className={cn(styles.input, inputCustomProps)}
                    type="checkbox"
                    checked={Boolean(isChecked)}
                    disabled={isDisabled}
                    aria-required={isRequired}
                    aria-invalid={isInvalid}
                    {...props}
                    ref={ref}
                />

                <CheckIcon
                    className={cn('hidden', { 'block': isChecked }, iconCheckCustomProps)}
                    color={theme.colors.midnight.DEFAULT}
                />

                <MinusIcon
                    className={cn(
                        'hidden',
                        { 'block': isIndeterminate && typeof isChecked === 'undefined' },
                        iconIndeterminateCustomProps
                    )}
                    color={theme.colors.midnight.DEFAULT}
                />
            </div>
        )
    }
)

CheckboxField.displayName = 'CheckboxField'

export default CheckboxField
