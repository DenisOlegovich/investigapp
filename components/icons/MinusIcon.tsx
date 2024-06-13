import { ComponentPropsWithoutRef, forwardRef } from 'react'

const MinusIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            strokeWidth={2.5}
            d="M6 12h12"
        />
    </svg>
))

MinusIcon.displayName = 'MinusIcon'

export default MinusIcon
