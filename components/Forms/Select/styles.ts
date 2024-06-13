import { CSSProperties } from 'react'
import { GroupBase, StylesConfig } from 'react-select'

import colors from '@/themes/tailwind/tokens/colors'
import { cn } from '@/utils'

import { SelectOption, SelectSize, SelectType } from './interfaces'

interface SelectStylesProps {
    type: SelectType
    size: SelectSize
    // isSearchable?: boolean
    isInvalid?: boolean
}

export const selectStyles = ({
    type,
    size,
    isInvalid,
}: SelectStylesProps): StylesConfig<SelectOption, boolean, GroupBase<SelectOption>> => ({
    container: (base, { isMulti }) => ({
        ...base,

        width: '100%',
        // height: isMulti ? '100%' : '90%',
    }),

    indicatorSeparator: () => ({
        display: 'none',
    }),

    option: (base, { isSelected, isDisabled }) => ({
        ...base,

        cursor: isDisabled ? 'not-allowed' : 'pointer',

        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',

        '@media (0 <= width < 48em)': {
            padding: '9px 12px',
        },
        '@media (width >= 48em)': {
            padding: size === 'm' ? '13px 12px' : '6px 12px',
        },

        backgroundColor: isSelected ? colors.midnight.DEFAULT : 'transparent',
        color: isDisabled ? colors.grey.dark : isSelected ? colors.white : colors.black,

        '&:hover': {
            backgroundColor: isSelected
                ? colors.midnight.DEFAULT
                : isDisabled
                ? 'transparent'
                : type === 'stroke'
                ? colors.grey['extra-light']
                : colors.white,
        },
    }),

    placeholder: (base) => ({
        ...base,

        margin: 0,

        color: isInvalid ? colors.red.error : colors.grey.dark,
        fontSize: '1.6rem',
    }),

    control: (base, { isDisabled, menuIsOpen }) => ({
        ...base,

        cursor: isDisabled ? 'not-allowed' : 'pointer',

        boxShadow: 'none',
        alignItems: 'center',
        minHeight: '18px',

        borderRadius: menuIsOpen ? '8px 8px 0px 0px' : '8px',

        border: isInvalid
            ? `1px solid ${colors.red.error}`
            : menuIsOpen
            ? `1px solid ${colors.midnight.light}`
            : type === 'stroke'
            ? '1px solid rgba(130, 140, 150, 0.40)'
            : '1px solid transparent',

        backgroundColor:
            type === 'fill'
                ? isDisabled
                    ? 'rgba(232, 235, 237, 0.40)'
                    : colors.grey.light
                : isDisabled
                ? 'rgba(255, 255, 255, 0.40)'
                : colors.white,

        '&:hover': {
            border: isInvalid
                ? '1px solid rgba(255, 0, 31, 0.30)'
                : menuIsOpen
                ? `1px solid  ${colors.midnight.light}`
                : type === 'stroke'
                ? '1px solid rgba(130, 140, 150, 0.80)'
                : '1px solid transparent',
            background:
                type === 'fill'
                    ? `linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), ${colors.grey.light}`
                    : 'transparent',
        },

        '@media (0 <= width < 48em)': {
            // width: '320px',
            padding: '8px 12px',
        },
        '@media (width >= 48em)': {
            // width: size === 'm' ? '288px' : '144px',
            padding: size === 'm' ? '12px' : '7px 12px',
        },
    }),
    menu: (base) => ({
        ...base,

        marginTop: '-1px',
        boxShadow: 'none',
        borderTop: `1px solid ${type === 'stroke' ? colors.grey.light : colors.grey.DEFAULT}`,
        borderRadius: '0px 0px 8px 8px',
        zIndex: 10,
    }),

    menuList: (base) => ({
        ...base,

        overflowY: 'auto',
        padding: 0,
        borderRadius: '0px 0px 8px 8px',

        backgroundColor: type === 'fill' ? colors.grey.light : colors.white,
    }),

    valueContainer: (base) => {
        const commonInputStyles: CSSProperties = {
            margin: 0,
            padding: 0,
        }

        // const inputStyles: CSSProperties = !isSearchable ? { ...commonInputStyles, display: 'none' } : commonInputStyles

        return {
            ...base,

            padding: 0,
            gap: '8px',
            lineHeight: '18px',

            '& a': {
                pointerEvents: 'none',
            },

            '& input': {
                // ...inputStyles,
                ...commonInputStyles,
            },

            '& [class*=Input]': {
                ...commonInputStyles,
            },
        }
    },

    multiValue: (base) => ({
        ...base,

        margin: 0,
        backgroundColor: 'transparent',
    }),

    multiValueLabel: (base, { isDisabled }) => ({
        ...base,

        padding: 0,
        paddingLeft: 0,
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',

        color: isInvalid ? colors.red.error : isDisabled ? colors.grey.dark : colors.black,
    }),

    multiValueRemove: (base) => ({
        ...base,

        height: '18px',

        '& svg': {
            height: '100%',
            width: '100%',
        },
    }),

    singleValue: (base, { isDisabled }) => ({
        ...base,

        margin: '0',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '18px',

        color: isInvalid ? colors.red.error : isDisabled ? colors.grey.dark : colors.black,
    }),

    indicatorsContainer: (base) => ({
        ...base,

        padding: 0,
        height: 'fit-content',

        '& :nth-of-type(n)': {
            padding: 0,
        },

        '& svg': {
            height: '18px',
            width: '18px',
        },
    }),
})

export const styles = {
    wrapper: 'w-full flex flex-col gap-4',
    label: cn(
        'body-s_bold',
        'md:mt-[1.1rem]',
        'aria-[invalid=true]:text-red-error',
        `after:aria-[required=true]:content-['*'] after:aria-[required=true]:text-red after:aria-[required=true]:flex-inline`
    ),
    fieldWrapper: cn('flex', 'flex-col', 'gap-[0.4rem]', 'w-full'),
    optionalText: cn('body-xs', 'text-grey-dark', 'aria-[invalid=true]:text-red-error'),
    prefix: 'mr-[1.2rem]',
    postfix: 'ml-[1.2rem]',
}
