import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ArrowSelectIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M5 7h7l-3.5 4L5 7Z"
            clipRule="evenodd"
        />
    </svg>
))

ArrowSelectIcon.displayName = 'ArrowSelectIcon'

export default ArrowSelectIcon
