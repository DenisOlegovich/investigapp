import { ComponentPropsWithoutRef, forwardRef } from 'react'

const BrickSignIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 25 24"
        ref={ref}
        {...props}
    >
        <circle
            cx={9.333}
            cy={9.333}
            r={9.333}
            fill="currentColor"
            fillOpacity={0.6}
            transform="matrix(1 0 .00117 1 2.668 2.667)"
        />
        <path
            fill="#fff"
            d="M5.344 10h13.333l.004 4H5.348z"
        />
    </svg>
))

BrickSignIcon.displayName = 'BrickSignIcon'

export default BrickSignIcon
