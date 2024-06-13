import { useCallback, useMemo } from 'react'
import {
    useForm as ReactHookUseForm,
    UseFormProps as ReactHookUseFormProps,
    DefaultValues,
    SubmitHandler,
} from 'react-hook-form'

import { CommonFormData, CommonControlledProps } from '@/types'
import { mapFormDataToMultiFormValues, validateForm } from './utils'

interface UseFormProps<T extends Record<string, any>> {
    formData: CommonFormData<keyof T>[]
    onOk?: SubmitHandler<T>
    initialValues?: T
    mode?: ReactHookUseFormProps['mode']
}

export const useForm = <T extends Record<string, any>>({
    formData,
    initialValues,
    onOk,
    mode = 'onChange',
}: UseFormProps<T>) => {
    const initialFormValues = useMemo<T>(
        () => initialValues ?? (mapFormDataToMultiFormValues(formData, 'initial') as T),
        [formData, initialValues]
    )

    const emptyFormValues = useMemo<T>(() => mapFormDataToMultiFormValues(formData, 'empty') as T, [formData])

    const {
        control,
        // setValue,
        watch,
        // formState: { isValid, errors },
        handleSubmit,
        reset,
    } = ReactHookUseForm({
        defaultValues: initialFormValues as DefaultValues<T>,
        resolver: validateForm(formData),
        mode,
    })

    const formFieldsControl = useMemo(
        () =>
            formData.reduce<Record<keyof T, CommonControlledProps<T>>>(
                (acc, { name, isRequired, isDisabled }) => ({
                    ...acc,
                    [name]: {
                        name,
                        control,
                        isRequired,
                        isDisabled,
                    },
                }),
                {} as Record<keyof T, CommonControlledProps<T>>
            ),
        [control, formData]
    )

    const resetForm = useCallback(() => {
        reset(initialFormValues)
    }, [initialFormValues, reset])

    const clearForm = useCallback(() => {
        reset(emptyFormValues)
    }, [emptyFormValues, reset])

    const submitForm = useMemo(() => onOk && handleSubmit(onOk), [handleSubmit, onOk])

    const values = watch()

    return { /* isValid, errors, */ formFieldsControl, values, resetForm, clearForm, submitForm }
}
