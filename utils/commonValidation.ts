import { FieldError } from 'react-hook-form'

/**
 * Утилита, возвращающая функцию валидации значения типа string или string[]:
 * @param паттерн RegExp для валидации значения, необязательный
 * @returns возвращает функцию валидации, которая принимает
 * строку или массив строк необязательным параметром
 * и возвращает в случае невалидного значения объект FieldError,
 * если значение валидно возвращает undefined (непустая несостоящая только из пробелов строка,
 * удовлетворяющая переданному паттерну (если таковой указан)
 * или непустой массив, не состоящий из пустых строк,
 * каждый элемент которого удовлетворяет паттерну (если таковой указан))
 */
export const getCommonValidation =
    (pattern?: RegExp) =>
    (value?: string | string[]): FieldError | undefined => {
        if (
            typeof value === 'undefined' ||
            (typeof value === 'string' && (!value.trim() || (pattern && !pattern.test(value)))) ||
            (Array.isArray(value) &&
                (!value.length ||
                    value.every((elem) => !elem.trim()) ||
                    (pattern && value.some((elem) => !pattern.test(elem)))))
        ) {
            return {
                type: 'required',
                message: pattern ? 'Введены некорректные данные или поле не заполнено' : 'Поле не может быть пустым',
            }
        }

        return undefined
    }
