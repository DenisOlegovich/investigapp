'use client'

import { forwardRef } from 'react'
import { GroupBase, SelectInstance } from 'react-select'

import { SelectOption, SelectProps } from './interfaces'
import { cn } from '@/utils'
import If from '@/components/If'
import SelectFieldWrapper from './SelectFieldWrapper'

import { styles } from './styles'

const Select = forwardRef<SelectInstance<SelectOption, boolean, GroupBase<SelectOption>>, SelectProps>(
    ({ label, view = 'top', className, ...props }, ref) => {
        const {
            isInvalid,
            isRequired,
            anatomy: { container: containerClassName = '', label: labelClassName = '' } = {},
        } = props

        return (
            <If
                condition={label}
                Else={
                    <SelectFieldWrapper
                        className={className}
                        {...props}
                        ref={ref}
                    />
                }
            >
                <div
                    className={cn(
                        styles.wrapper,
                        view === 'left' && 'md:flex-row md:gap-[6.7rem]',
                        className,
                        containerClassName
                    )}
                >
                    <p
                        aria-invalid={isInvalid}
                        aria-required={isRequired}
                        className={cn(styles.label, labelClassName)}
                    >
                        {label}
                    </p>

                    <SelectFieldWrapper
                        {...props}
                        ref={ref}
                    />
                </div>
            </If>
        )
    }
)

Select.displayName = 'Select'

export default Select
