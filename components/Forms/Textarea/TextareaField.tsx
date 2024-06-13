import { forwardRef } from 'react'

import { TextareaProps } from '.'
import { cn } from '@/utils'

const defaultCharacterLimit = 100
const defaultTextareaPlaceholder = 'Введите текст'

const TextareaField = forwardRef<HTMLTextAreaElement, Omit<TextareaProps, 'label' | 'view' | 'optionalText'>>(
    (
        {
            value = '',
            onChange,
            placeholder,
            characterLimit = defaultCharacterLimit,
            isDisabled,
            isRequired,
            isInvalid,
            anatomy: {
                fieldInputWrapper: fieldInputWrapperCustomProps = '',
                textarea: textareaCustomProps = '',
                counterWrapper: counterWrapperCustomProps = '',
                counter: counterCustomProps = '',
            } = {},
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div className={cn('w-full h-44 relative', className, fieldInputWrapperCustomProps)}>
                <textarea
                    className={cn(styles.textareaDefault, textareaCustomProps)}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder ?? defaultTextareaPlaceholder}
                    disabled={isDisabled}
                    aria-required={isRequired}
                    aria-invalid={isInvalid}
                    {...props}
                    ref={ref}
                />

                <div
                    className={cn(
                        styles.counterWrapperDefault,
                        isDisabled && 'opacity-60',
                        characterLimit - value.length < 0 && '!text-red-error',
                        counterWrapperCustomProps
                    )}
                >
                    <span className={cn('flex items-center', counterCustomProps)}>{characterLimit - value.length}</span>
                </div>
            </div>
        )
    }
)

TextareaField.displayName = 'TextareaField'

export default TextareaField

const styles = {
    textareaDefault: cn(
        'textarea-scrollbar',
        'input',
        'size-full resize-none appearance-none',
        'rounded-[.8rem] p-[1.2rem] outline-0',
        'bg-white border-solid border-[1px] border-[#828c9666] hover:border-[#828c96cc]',
        'read-only:shadow-none read-only:select-all',
        'focus-visible:border-midnight-light focus-visible:z-[1]',
        'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-[#828c9666]',
        'aria-[invalid=true]:border-red-error aria-[invalid=true]:placeholder:text-red-error/[.6] aria-[invalid=true]:text-red-error',
        'transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200'
    ),
    counterWrapperDefault: cn(
        'pointer-events-none',
        'signature absolute translate-x-[1px] bottom-[1px] z-[9]',
        'w-[99%] rounded-full h-[2.8rem] flex justify-end pr-[6px]',
        'bg-gradient-to-t from-white from-[21.55%] via-[rgba(255, 255, 0.70)] via-[44.13%] to-[rgba(255, 255, 0.00)] to-[100%]'
    ),
}
