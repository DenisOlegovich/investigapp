import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CloseIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m10.06 9 5.47-5.47-1.061-1.06-5.47 5.47-5.47-5.47-1.06 1.06L7.939 9l-5.47 5.47 1.06 1.06L9 10.06l5.47 5.47 1.06-1.06L10.06 9Z"
            clipRule="evenodd"
        />
    </svg>
))

CloseIcon.displayName = 'CloseIcon'

export default CloseIcon
