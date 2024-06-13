'use client'

import { ComponentPropsWithoutRef } from 'react'

import { CommonFormData } from '@/types'
import { pictureTest } from '@/Images'
import { cn, getCommonValidation } from '@/utils'
import { useForm } from '@/hooks'
import InputControlled from '@/components/Forms/InputControlled'
import Button from '@/components/Forms/Button'
import Image from '@/components/Image'

type SearchFormFieldsName = 'certificate-number' | 'certificate-picture'

export const searchFormData: CommonFormData<SearchFormFieldsName>[] = [
    {
        type: 'input',
        name: 'certificate-number',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
    {
        type: 'input',
        name: 'certificate-picture',
        initialValue: '',
        validate: getCommonValidation(),
        isRequired: true,
    },
]

export default function Search(props: ComponentPropsWithoutRef<'div'>) {
    const { formFieldsControl, submitForm } = useForm({
        formData: searchFormData,
        onOk: (values) => {
            console.log('Search', values)
        },
    })

    return (
        <div {...props}>
            <h2 className={cn('h2', 'mb-xl')}>Поиск начислений по МСД</h2>
            <form
                onSubmit={submitForm}
                className={styles.container}
            >
                <InputControlled
                    {...formFieldsControl['certificate-number']}
                    type="text"
                    placeholder="123456789"
                    label="Номер свидетельства о регистрации ТС"
                />

                <InputControlled
                    {...formFieldsControl['certificate-picture']}
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
        </div>
    )
}

const styles = {
    container: cn('flex', 'flex-col', 'gap-lg'),
    button: cn('md:self-start', 'min-w-[25rem]'),
}
