import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ArrowIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 18 18"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m9.967 10.429 2.86-2.86-.969-.968-2.86 2.86-2.857-2.859-.97.97 2.859 2.857.968.969L9 11.4l.969-.97-.002-.001Z"
            clipRule="evenodd"
        />
    </svg>
))

ArrowIcon.displayName = 'ArrowIcon'

export default ArrowIcon
