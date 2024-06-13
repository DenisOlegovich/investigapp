import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CheckIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        ref={ref}
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 14.5 9.5 19l10-14"
        />
    </svg>
))

CheckIcon.displayName = 'CheckIcon'

export default CheckIcon
