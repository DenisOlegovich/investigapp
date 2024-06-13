import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ArrowLeftIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m13.059 3-6 6 6 6-1.06 1.06L4.936 9l7.061-7.06L13.058 3Z"
            clipRule="evenodd"
        />
    </svg>
))

ArrowLeftIcon.displayName = 'ArrowLeftIcon'

export default ArrowLeftIcon
