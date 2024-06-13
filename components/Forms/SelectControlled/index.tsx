import { Controller, Path } from 'react-hook-form'

import { CommonControlledProps } from '@/types'
import { SelectProps } from '@/components/Forms/Select/interfaces'
import Select from '@/components/Forms/Select'

type SelectControlledProps<T extends Record<string, any>> = Omit<
    SelectProps,
    'isInvalid' | 'optionalText' | 'onChange'
> &
    CommonControlledProps<T> & {
        helperText?: SelectProps['optionalText']
    }

export default function SelectControlled<T extends Record<string, any>>({
    name,
    control,
    helperText,
    ...props
}: SelectControlledProps<T>) {
    return (
        <Controller
            name={name as Path<T>}
            control={control}
            render={({ field, fieldState: { invalid, error } }) => {
                return (
                    <Select
                        instanceId={name}
                        isInvalid={invalid}
                        optionalText={error?.message || helperText}
                        {...props}
                        {...field}
                        // onChange={(newValues) =>
                        //     setValue &&
                        //     setValue(name as Path<T>, newValues as PathValue<T, Path<T>>, {
                        //         shouldDirty: true,
                        //         shouldTouch: true,
                        //         shouldValidate: true,
                        //     })
                        // }
                    />
                )
            }}
        />
    )
}
