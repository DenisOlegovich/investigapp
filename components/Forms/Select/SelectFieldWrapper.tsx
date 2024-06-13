import { forwardRef } from 'react'
import ReactSelect, {
    Props as ReactSelectProps,
    GroupBase,
    MultiValue,
    ControlProps,
    SelectInstance,
    SingleValue,
    components,
} from 'react-select'

import { SelectOption, SelectProps } from './interfaces'
import { cn } from '@/utils'
import If from '@/components/If'

import { selectStyles, styles } from './styles'

const defaultSelectPlaceholder = 'выберете опцию'
const defaultNoOptionsMessage = 'совпадений нет'

const SelectFieldWrapper = forwardRef<SelectInstance<SelectOption, boolean, GroupBase<SelectOption>>, SelectProps>(
    (
        {
            value,
            initialValue = '',
            options = [],
            isSearchable = false,
            noOptionsMessage,
            placeholder,
            isRequired = false,
            isInvalid = false,
            optionalText = '',
            type = 'stroke',
            size = 'm',
            onChange,
            className,
            prefix,
            postfix,
            anatomy: {
                fieldWrapper: fieldWrapperClassName = '',
                optionalText: optionalTextClassName = '',
                select: selectStylesProps = {},
                prefix: prefixClassName = '',
                postfix: postfixClassName = '',
            } = {},
            ...restProps
        },
        ref
    ) => {
        const isOptionInValue = (option: string) => {
            const inputValue = value ?? initialValue

            return Array.isArray(inputValue) ? inputValue.includes(option) : inputValue === option
        }

        const selected = options.filter((o) => isOptionInValue(o.value))

        const handleChange = (option: MultiValue<SelectOption> | SingleValue<SelectOption>) => {
            const selectedValues = Array.isArray(option)
                ? option.map((o: SelectOption) => o.value)
                : (option as SelectOption)?.value ?? ''

            onChange(selectedValues)
        }

        const reactSelectProps: ReactSelectProps<SelectOption, boolean, GroupBase<SelectOption>> = {
            ...restProps,
            openMenuOnClick: true,
            isSearchable,
            value: selected,
            isOptionDisabled: (v: SelectOption) => options.some((o) => o.value === v.value && o.isDisabled),
            options,
            onChange: handleChange,
            noOptionsMessage: () => noOptionsMessage ?? defaultNoOptionsMessage,
            placeholder: placeholder ?? defaultSelectPlaceholder,
            required: isRequired,
            'aria-invalid': isInvalid,
            styles: { ...selectStyles({ type, size, isInvalid }), ...selectStylesProps },
            components:
                prefix || postfix
                    ? {
                          Control: ({
                              children,
                              ...props
                          }: ControlProps<SelectOption, boolean, GroupBase<SelectOption>>) => {
                              return (
                                  <components.Control {...props}>
                                      {prefix && <span className={cn(styles.prefix, prefixClassName)}>{prefix}</span>}

                                      {children}

                                      {postfix && (
                                          <span className={cn(styles.postfix, postfixClassName)}>{postfix}</span>
                                      )}
                                  </components.Control>
                              )
                          },
                      }
                    : {},
        }

        return (
            <If
                condition={optionalText || isRequired}
                Else={
                    <ReactSelect
                        className={className}
                        {...reactSelectProps}
                        ref={ref}
                    />
                }
            >
                <div className={cn(styles.fieldWrapper, className, fieldWrapperClassName)}>
                    <ReactSelect
                        {...reactSelectProps}
                        ref={ref}
                    />

                    <p
                        aria-invalid={isInvalid}
                        className={cn(styles.optionalText, optionalTextClassName)}
                    >
                        {optionalText}
                    </p>
                </div>
            </If>
        )
    }
)

SelectFieldWrapper.displayName = 'SelectFieldWrapper'

export default SelectFieldWrapper
