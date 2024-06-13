'use client'

import { CommonFormData } from '@/types'
import { getCommonValidation } from '@/utils'
import { useForm } from '@/hooks'
import InputControlled from '@/components/Forms/InputControlled'
import Button from '@/components/Forms/Button'
import SearchIcon from '@/components/icons/SearchIcon'
import { ComponentPropsWithoutRef } from 'react'

type ScheduleFormFieldsName = 'routeNumber'

const scheduleFormData: CommonFormData<ScheduleFormFieldsName>[] = [
    {
        name: 'routeNumber',
        type: 'input',
        isRequired: true,
        validate: getCommonValidation(),
    },
]

export default function ScheuduleSearchForm({ className, ...props }: ComponentPropsWithoutRef<'form'>) {
    const { formFieldsControl, submitForm } = useForm({
        formData: scheduleFormData,
        onOk: (values) => {
            console.log('values', values)
        },
    })

    return (
        <form
            className={className}
            onSubmit={submitForm}
            {...props}
        >
            <InputControlled
                {...formFieldsControl.routeNumber}
                placeholder="Номер маршрута"
                postfix={
                    <Button
                        iconBefore={<SearchIcon className="text-[2.4rem] text-grey" />}
                        type="submit"
                        variant="unstyled"
                    />
                }
            />
        </form>
    )
}
