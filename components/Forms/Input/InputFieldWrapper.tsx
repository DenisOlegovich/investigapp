import { forwardRef } from 'react'

import { InputProps } from '.'
import { cn } from '@/utils'
import If from '@/components/If'
import InputField from './InputField'

const InputFieldWrapper = forwardRef<HTMLInputElement, Omit<InputProps, 'label'>>(
    ({ optionalText, className, ...props }, ref) => {
        const {
            isRequired,
            isInvalid,
            anatomy: { fieldWrapper: fieldWrapperCustomProps = '', optionalText: optionalTextCustomProps = '' } = {},
        } = props

        return (
            <If
                condition={optionalText || isRequired}
                Else={
                    <InputField
                        className={className}
                        {...props}
                        ref={ref}
                    />
                }
            >
                <div className={cn('flex w-full flex-col gap-[.4rem]', className, fieldWrapperCustomProps)}>
                    <InputField
                        {...props}
                        ref={ref}
                    />

                    <div
                        className={cn(
                            'body-xs',
                            isInvalid ? 'text-red-error' : 'text-grey-dark',
                            optionalTextCustomProps
                        )}
                    >
                        {optionalText}
                    </div>
                </div>
            </If>
        )
    }
)

InputFieldWrapper.displayName = 'InputFieldWrapper'

export default InputFieldWrapper
