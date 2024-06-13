import { forwardRef } from 'react'

import { TextareaProps } from '.'
import { cn } from '@/utils'
import If from '@/components/If'
import TextareaField from './TextareaField'

const TextareaFieldWrapper = forwardRef<HTMLTextAreaElement, Omit<TextareaProps, 'label' | 'view'>>(
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
                    <TextareaField
                        {...props}
                        className={className}
                        ref={ref}
                    />
                }
            >
                <div className={cn('flex w-full flex-col gap-[.4rem]', className, fieldWrapperCustomProps)}>
                    <TextareaField
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

TextareaFieldWrapper.displayName = 'TextareaFieldWrapper'

export default TextareaFieldWrapper
