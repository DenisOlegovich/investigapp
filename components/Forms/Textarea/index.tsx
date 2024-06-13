import { ReactNode, forwardRef, ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import TextareaFieldWrapper from './TextareaFieldWrapper'
import If from '@/components/If'

type TextareaAnatomy =
    | 'container'
    | 'label'
    | 'fieldWrapper'
    | 'optionalText'
    | 'fieldInputWrapper'
    | 'textarea'
    | 'counterWrapper'
    | 'counter'

export interface TextareaProps
    extends Omit<ComponentPropsWithoutRef<'textarea'>, 'title' | 'disabled' | 'required' | 'value'> {
    value?: string
    label?: ReactNode
    view?: 'top' | 'left'
    characterLimit?: number
    isRequired?: boolean
    isInvalid?: boolean
    isDisabled?: boolean
    optionalText?: string
    anatomy?: Partial<Record<TextareaAnatomy, string>>
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, view, className, ...props }, ref) => {
    const {
        isRequired,
        isInvalid,
        isDisabled,
        anatomy: { container: containerCustomProps = '', label: labelCustomProps = '' } = {},
    } = props

    return (
        <If
            condition={label}
            Else={
                <TextareaFieldWrapper
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

                <TextareaFieldWrapper
                    {...props}
                    ref={ref}
                />
            </div>
        </If>
    )
})

Textarea.displayName = 'Textarea'

export default Textarea
