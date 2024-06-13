import { Controller, Path } from 'react-hook-form'

import { CommonControlledProps } from '@/types'
import { SwitchProps } from '@/components/Forms/Switch/types'
import Switch from '@/components/Forms/Switch'

type SwitchControlledProps<T extends Record<string, any>> = Omit<SwitchProps, 'value'> & CommonControlledProps<T>

export default function SwitchControlled<T extends Record<string, any>>({
    name,
    control,
    options = [],
    type,
    label,
    // TODO: прикрутить на всякий случай работу с этим пропсом в компоненте
    isRequired,
    // TODO: прикрутить на всякий случай работу с этим пропсом в компоненте
    isDisabled,
    ...props
}: SwitchControlledProps<T>) {
    return (
        <Controller
            name={name as Path<T>}
            control={control}
            render={({ field }) => {
                return type === 'between' ? (
                    <Switch
                        type="between"
                        options={options}
                        {...props}
                        {...field}
                    />
                ) : (
                    <Switch
                        type="default"
                        label={label}
                        {...props}
                        {...field}
                    />
                )
            }}
        />
    )
}
