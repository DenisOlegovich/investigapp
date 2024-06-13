import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react'
import { Props as ReactInputMaskProps } from 'react-input-mask'

import { cn } from '@/utils'
import If from '@/components/If'
import InputFieldWrapper from './InputFieldWrapper'

type InputAnatomy =
    | 'container'
    | 'label'
    | 'fieldWrapper'
    | 'optionalText'
    | 'input'
    | 'inputGroup'
    | 'prefixWrapper'
    | 'postfixWrapper'

export interface InputProps
    extends Omit<ComponentPropsWithoutRef<'input'>, 'disabled' | 'required' | 'value' | 'prefix'> {
    value?: string
    label?: ReactNode
    view?: 'top' | 'left'
    mask?: ReactInputMaskProps['mask']
    maskOptions?: Omit<ReactInputMaskProps, 'mask'>
    prefix?: ReactNode
    postfix?: ReactNode
    isRequired?: boolean
    isInvalid?: boolean
    isDisabled?: boolean
    optionalText?: string
    anatomy?: Partial<Record<InputAnatomy, string>>
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, view = 'top', className, ...props }, ref) => {
    const {
        isInvalid,
        isDisabled,
        isRequired,
        anatomy: { container: containerCustomProps = '', label: labelCustomProps = '' } = {},
    } = props

    return (
        <If
            condition={label}
            Else={
                <InputFieldWrapper
                    className={className}
                    {...props}
                    ref={ref}
                />
            }
        >
            <div
                className={cn(
                    'w-full flex flex-col gap-4',
                    view === 'left' && 'md:flex-row md:gap-[6.7rem]',
                    className,
                    containerCustomProps
                )}
            >
                <div
                    className={cn(
                        'table-s_bold',
                        isInvalid && 'text-red-error',
                        isDisabled && 'text-grey-dark/[.4]',
                        isRequired && 'after:content-["*"] after:text-red',
                        view === 'left' && 'md:mt-[1.1rem]',
                        labelCustomProps
                    )}
                >
                    {label}
                </div>

                <InputFieldWrapper
                    {...props}
                    ref={ref}
                />
            </div>
        </If>
    )
})

Input.displayName = 'Input'

export default Input
