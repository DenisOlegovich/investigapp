import { ResolverResult, FieldErrors } from 'react-hook-form'
import { groupBy, mapValues, get, set, unset } from 'lodash'

import { CommonFormData } from '@/types'
import { emptyFormValuesConfig } from './consts'

export const validateForm =
    <T extends Record<string, any>>(formData: CommonFormData<keyof T>[]) =>
    async (validateValues: T): Promise<ResolverResult<T>> => {
        const validateErrors: FieldErrors<T> = {}

        formData.forEach(({ name, validate }) => {
            const fieldValue = get(validateValues, name)

            if (validate && validate(fieldValue)?.message) {
                set(validateErrors, name, validate(fieldValue))
            }

            if (validate && !validate(fieldValue)?.message) {
                unset(validateErrors, name)
            }
        })

        return {
            values: Object.keys(validateErrors).length ? {} : validateValues,
            errors: validateErrors,
        }
    }

export const mapFormDataToMultiFormValues = <T extends Record<string, any>>(
    formData: CommonFormData<keyof T>[],
    mode: 'initial' | 'empty'
): Record<string, any> => {
    const groupedFormDataObject = groupBy(formData, ({ name }) => {
        const endIndex = (name as string).includes('.') ? (name as string).indexOf('.') : (name as string).length

        return (name as string).slice(0, endIndex)
    })

    return mapValues(groupedFormDataObject, (groupedFormData) => {
        const formDataWithSlicedName = groupedFormData.reduce((acc, { name, ...rest }) => {
            const startIndex = (name as string).includes('.') ? (name as string).indexOf('.') + 1 : 0

            return [...acc, { name: (name as string).slice(startIndex), ...rest }]
        }, [] as CommonFormData<keyof T>[])

        if (formDataWithSlicedName.some(({ name }) => (name as string).includes('.'))) {
            return mapFormDataToMultiFormValues(formDataWithSlicedName, mode)
        }

        if (formDataWithSlicedName.length === 1 && formDataWithSlicedName[0].name === groupedFormData[0].name) {
            return mode === 'empty'
                ? emptyFormValuesConfig[formDataWithSlicedName[0].type]
                : formDataWithSlicedName[0].initialValue ?? emptyFormValuesConfig[formDataWithSlicedName[0].type]
        }

        return formDataWithSlicedName.reduce(
            (acc, { name, type, initialValue }) => ({
                ...acc,
                [name]: mode === 'empty' ? emptyFormValuesConfig[type] : initialValue ?? emptyFormValuesConfig[type],
            }),
            {} as Record<string, any>
        )
    })
}
