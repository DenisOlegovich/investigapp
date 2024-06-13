import { Controller, Path } from 'react-hook-form'

import { CommonControlledProps } from '@/types'
import Checkbox, { CheckboxProps } from '@/components/Forms/Checkbox'

type CheckboxControlledProps<T extends Record<string, any>> = CheckboxProps & CommonControlledProps<T>

export default function CheckboxControlled<T extends Record<string, any>>({
    name,
    control,
    ...props
}: CheckboxControlledProps<T>) {
    return (
        <Controller
            name={name as Path<T>}
            control={control}
            render={({ field: { value, ...restFieldsProps }, fieldState: { invalid } }) => {
                return (
                    <Checkbox
                        id={name}
                        isInvalid={invalid}
                        isChecked={value}
                        {...props}
                        {...restFieldsProps}
                    />
                )
            }}
        />
    )
}
