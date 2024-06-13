import { forwardRef } from 'react'
import ReactInputMask from 'react-input-mask'

import { InputProps } from '.'
import { cn } from '@/utils'
import { styles } from './styles'

const defaultPlaceholder = 'Введите текст'

const SingleInputField = forwardRef<HTMLInputElement, Omit<InputProps, 'label' | 'view' | 'optionalText'>>(
    (
        {
            mask = '',
            maskOptions = {},
            type = 'text',
            placeholder = defaultPlaceholder,
            isDisabled,
            isInvalid,
            isRequired,
            anatomy: { input: inputCustomProps = '' } = {},
            className = '',
            ...restProps
        },
        ref
    ) => {
        return (
            <ReactInputMask
                className={cn(styles.inputCommonBase, className, inputCustomProps)}
                type={type}
                placeholder={placeholder}
                disabled={isDisabled}
                aria-invalid={isInvalid}
                aria-required={isRequired}
                {...restProps}
                mask={mask}
                {...maskOptions}
            >
                {/* @ts-ignore */}
                {(inputProps: any) => {
                    return (
                        <input
                            ref={ref}
                            disabled={isDisabled}
                            {...inputProps}
                            {...restProps}
                        />
                    )
                }}
            </ReactInputMask>
        )
    }
)

SingleInputField.displayName = 'InputField'

export default SingleInputField
