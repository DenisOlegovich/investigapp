import { forwardRef } from 'react'

import { InputProps } from '.'
import If from '@/components/If'
import SingleInputField from './SingleInputField'
import { cn } from '@/utils'
import { styles } from './styles'

const InputField = forwardRef<HTMLInputElement, InputProps>(({ prefix, postfix, className, ...props }, ref) => {
    const {
        isInvalid,
        isDisabled,
        anatomy: {
            inputGroup: inputGroupCustomProps = '',
            prefixWrapper: prefixWrapperCustomProps = '',
            postfixWrapper: postfixWrapperCustomProps = '',
        } = {},
    } = props

    return (
        <If
            condition={prefix || postfix}
            Else={
                <SingleInputField
                    className={cn(styles.singleInputOutline, className)}
                    {...props}
                    ref={ref}
                />
            }
        >
            <div
                className={cn(
                    styles.inputCommonBase,
                    styles.groupInputOutline,
                    { 'border-red-error hover:border-red-error': isInvalid },
                    { 'hover:border-[#828c9666]': isDisabled },

                    className,
                    inputGroupCustomProps
                )}
            >
                {prefix && (
                    <span className={cn(styles.prefixPostfixCommonBase, prefixWrapperCustomProps)}>{prefix}</span>
                )}

                <SingleInputField
                    className={styles.singleInputUnbordered}
                    {...props}
                    ref={ref}
                />

                {postfix && (
                    <span className={cn(styles.prefixPostfixCommonBase, postfixWrapperCustomProps)}>{postfix}</span>
                )}
            </div>
        </If>
    )
})

InputField.displayName = 'InputField'

export default InputField
