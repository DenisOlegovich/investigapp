import { Controller, Path } from 'react-hook-form'

import { CommonControlledProps } from '@/types'
import Textarea, { TextareaProps } from '@/components/Forms/Textarea'

type TextareaControlledProps<T extends Record<string, any>> = Omit<TextareaProps, 'isInvalid' | 'optionalText'> &
    CommonControlledProps<T> & {
        helperText?: TextareaProps['optionalText']
    }

export default function TextareaControlled<T extends Record<string, any>>({
    name,
    control,
    helperText,
    ...props
}: TextareaControlledProps<T>) {
    return (
        <Controller
            name={name as Path<T>}
            control={control}
            render={({ field, fieldState: { invalid, error } }) => {
                return (
                    <Textarea
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
