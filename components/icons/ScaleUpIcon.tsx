import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ScaleUpIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 37 36"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M25.4 8.5h-8.378v-3h13.5V19h-3v-8.38L10.643 27.5h8.379v3h-13.5V17h3v8.378L25.4 8.5Z"
            clipRule="evenodd"
        />
    </svg>
))

ScaleUpIcon.displayName = 'ScaleUpIcon'

export default ScaleUpIcon
