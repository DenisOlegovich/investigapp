import { Controller, Path } from 'react-hook-form'

import { CommonControlledProps } from '@/types'
import { RadioGroupOption, RadioGroupOptionWOIcon, RadioGroupProps } from '@/components/Forms/RadioGroup/types'
import RadioGroup from '@/components/Forms/RadioGroup'

type RadioGroupControlledProps<T extends Record<string, any>> = RadioGroupProps & CommonControlledProps<T>

export default function RadioGroupControlled<T extends Record<string, any>>({
    name,
    control,
    variant,
    options = [],
    // TODO: прикрутить на всякий случай работу с этим пропсом в компоненте
    isRequired,
    ...props
}: RadioGroupControlledProps<T>) {
    return (
        <Controller
            name={name as Path<T>}
            control={control}
            render={({ field }) => {
                return variant === 'button' ? (
                    <RadioGroup
                        variant={'button'}
                        options={options as RadioGroupOption[]}
                        {...props}
                        {...field}
                    />
                ) : (
                    <RadioGroup
                        variant={'default'}
                        options={options as RadioGroupOptionWOIcon[]}
                        {...props}
                        {...field}
                    />
                )
            }}
        />
    )
}
