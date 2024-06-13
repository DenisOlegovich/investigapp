import React, { forwardRef } from 'react'

import { RadioGroupProps } from './types'
import { cn } from '@/utils'
import If from '@/components/If'
import RadioGroupField from './RadioGroupField'

import { styles } from './styles'

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({ label, className = '', ...props }, ref) => {
    const { isDisabled, anatomy: { container: containerClassname = '', fieldLabel: fieldLabelClassname = '' } = {} } =
        props

    return (
        <If
            condition={label}
            Else={
                <RadioGroupField
                    className={className}
                    ref={ref}
                    {...props}
                />
            }
        >
            <div className={cn(styles.container, className, containerClassname)}>
                <div className={cn('table-s_bold', { 'opacity-30': isDisabled }, fieldLabelClassname)}>{label}</div>

                <RadioGroupField
                    ref={ref}
                    {...props}
                />
            </div>
        </If>
    )
})

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
