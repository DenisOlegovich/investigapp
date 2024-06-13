import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ScaleDownIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M22.523 3v10.5h10.5v3h-13.5V3h3Zm-19.5 19.5h10.5V33h3V19.5h-13.5v3Z"
            clipRule="evenodd"
        />
    </svg>
))

ScaleDownIcon.displayName = 'ScaleDownIcon'

export default ScaleDownIcon
