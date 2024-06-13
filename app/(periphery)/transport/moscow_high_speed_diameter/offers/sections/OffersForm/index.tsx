'use client'

import { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/utils'
import { useForm } from '@/hooks'
import { formData } from './constants'

import InputControlled from '@/components/Forms/InputControlled'
import Button from '@/components/Forms/Button'
import { pictureTest } from '@/Images'
import Image from '@/components/Image'
import TextareaControlled from '@/components/Forms/TextareaControlled'

export default function OffersForm({ className, ...props }: ComponentPropsWithoutRef<'form'>) {
    const { formFieldsControl, submitForm } = useForm({
        formData,
        onOk: (values) => {
            console.log('OffersForm', values)
        },
    })

    return (
        <form
            onSubmit={submitForm}
            className={cn(styles.wrapper, className)}
            {...props}
        >
            <InputControlled
                {...formFieldsControl.name}
                type="text"
                placeholder="Иванов Иван Иванович"
                label="ФИО"
            />

            <InputControlled
                {...formFieldsControl.mail}
                type="email"
                placeholder="ivanov@mail.ru"
                label="Электронная почта"
            />

            <InputControlled
                {...formFieldsControl.location}
                type="text"
                placeholder="Ленинградский пр-т 60 к2"
                label="Место жительства"
            />

            <InputControlled
                {...formFieldsControl.district}
                type="text"
                placeholder="Аэропорт"
                label="Район"
            />

            <TextareaControlled
                {...formFieldsControl.suggestions}
                label="Предложение"
                placeholder="Напишите Ваше предложение"
                characterLimit={150}
            />

            <InputControlled
                {...formFieldsControl.picture}
                type="text"
                placeholder=""
                label={
                    <Image
                        img={pictureTest}
                        alt="picture"
                        className={cn('rounded-[0.8rem]', 'w-full')}
                    />
                }
                anatomy={{
                    label: 'flex',
                    container: 'w-full sm:max-w-[25rem]',
                }}
            />

            <Button
                type="submit"
                variant="danger"
                className={styles.button}
            >
                Найти
            </Button>
        </form>
    )
}

const styles = {
    wrapper: cn('flex', 'flex-col', 'gap-sm sm:gap-lg'),
    button: cn('md:self-start', 'md:min-w-[25rem]'),
}
