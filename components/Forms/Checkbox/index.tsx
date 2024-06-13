import { forwardRef, ReactNode, ComponentPropsWithoutRef } from 'react'

import { styles } from './styles'
import { cn } from '@/utils'
import If from '@/components/If'
import CheckboxField from './CheckboxField'

type CheckboxAnatomy = 'container' | 'label' | 'fieldWrapper' | 'input' | 'iconCheck' | 'iconIndeterminate'

export interface CheckboxProps
    extends Omit<ComponentPropsWithoutRef<'input'>, 'disabled' | 'required' | 'value' | 'checked' | 'prefix'> {
    colorScheme?: 'white' | 'grey'
    label?: ReactNode
    isChecked?: boolean
    /** флаг: true - показывать неопределенное состояние,
     * то есть, когда typeof isChecked === 'undefined')
     * false - игнорировать неопределенное состояние
     * */
    isIndeterminate?: boolean
    isRequired?: boolean
    isInvalid?: boolean
    isDisabled?: boolean
    anatomy?: Record<CheckboxAnatomy, string>
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ label, className = '', ...props }, ref) => {
    const {
        anatomy: { container: containerCustomProps = '', label: labelCustomProps = '' } = {},
        isDisabled,
        isRequired,
        isInvalid,
    } = props

    return (
        <If
            condition={label}
            Else={
                <CheckboxField
                    className={cn(styles.wrapperCommon, className)}
                    {...props}
                    ref={ref}
                />
            }
        >
            <label
                className={cn(
                    styles.wrapperCommon,
                    isDisabled ? 'cursor-not-allowed' : '[:hover&_div]:border-midnight-light',
                    isInvalid && '[:hover&_div]:border-red-error',
                    'inline-flex gap-[0.8rem]',
                    className,
                    containerCustomProps
                )}
            >
                <CheckboxField
                    {...props}
                    ref={ref}
                />

                <div
                    className={cn(
                        'body-s',
                        isDisabled && 'text-grey-dark/[.4]',
                        isRequired && 'after:content-["*"] after:text-red',
                        labelCustomProps
                    )}
                >
                    {label}
                </div>
            </label>
        </If>
    )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
