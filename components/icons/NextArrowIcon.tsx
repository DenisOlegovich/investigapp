import { ComponentPropsWithoutRef, forwardRef } from 'react'

const NextArrowIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m19.086 10.76 1.414 1.237-5.993 5.251-1.415-1.238 3.582-3.137H3.5v-1.75h13.166L13.08 7.989l1.414-1.237 4.59 4.01.002-.003Z"
            clipRule="evenodd"
        />
    </svg>
))

NextArrowIcon.displayName = 'NextArrowIcon'

export default NextArrowIcon
