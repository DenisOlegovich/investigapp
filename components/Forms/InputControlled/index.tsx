import { Controller, Path } from 'react-hook-form'

import { CommonControlledProps } from '@/types'
import Input, { InputProps } from '@/components/Forms/Input'

type InputControlledProps<T extends Record<string, any>> = Omit<InputProps, 'isInvalid' | 'optionalText'> &
    CommonControlledProps<T> & {
        helperText?: InputProps['optionalText']
    }

export default function InputControlled<T extends Record<string, any>>({
    name,
    control,
    helperText,
    ...props
}: InputControlledProps<T>) {
    return (
        <Controller
            name={name as Path<T>}
            control={control}
            render={({ field, fieldState: { invalid, error } }) => {
                return (
                    <Input
                        id={name}
                        isInvalid={invalid}
                        optionalText={error?.message || helperText}
                        {...props}
                        {...field}
                    />
                )
            }}
        />
    )
}
