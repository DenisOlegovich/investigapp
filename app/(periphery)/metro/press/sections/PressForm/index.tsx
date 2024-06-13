'use client'

import { ComponentPropsWithoutRef } from 'react'

import { pressFormData, selectOptions } from './constants'
import { cn } from '@/utils'
import { useForm } from '@/hooks'
import InputControlled from '@/components/Forms/InputControlled'
import CheckboxControlled from '@/components/Forms/CheckboxControlled'
import SelectControlled from '@/components/Forms/SelectControlled'
import Button from '@/components/Forms/Button'

export default function PressForm({ className, ...props }: ComponentPropsWithoutRef<'form'>) {
    const { formFieldsControl, values, submitForm } = useForm({
        formData: pressFormData,
        onOk: (values) => {
            console.log('PressForm values', values)
        },
    })

    return (
        <form
            onSubmit={submitForm}
            className={cn('flex', 'flex-col', 'justify-stretch', 'gap-xs', 'md:max-w-[310px]', className)}
            {...props}
        >
            <h5 className="h5">Подписка на новости</h5>

            <CheckboxControlled
                {...formFieldsControl['get-all-news']}
                label="Все новости"
            />

            {!values['get-all-news'] && (
                <SelectControlled
                    {...formFieldsControl['news-subscribe-tag']}
                    options={selectOptions}
                    placeholder=""
                    size="s"
                    isMulti
                    closeMenuOnSelect={false}
                    isSearchable
                />
            )}

            <InputControlled
                {...formFieldsControl['personal-email']}
                type="email"
                placeholder="Электронная почта"
            />

            <Button
                type="submit"
                variant="danger"
            >
                Подписаться
            </Button>
        </form>
    )
}
