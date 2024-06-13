import { ComponentPropsWithoutRef, forwardRef } from 'react'

const GeolocationIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 60 60"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M19.82 38a8 8 0 0 0 8-8v-2.91a2.182 2.182 0 0 1 4.363 0V30a8 8 0 1 0 16 0h2.909v-2.182h-3.21a8.003 8.003 0 0 0-14.008-2.739 4.363 4.363 0 0 0-7.746 0 8.003 8.003 0 0 0-14.007 2.739H8.91v2.181h2.908a8 8 0 0 0 8 8ZM46 30a5.818 5.818 0 1 0-11.636 0A5.818 5.818 0 0 0 46 30ZM19.82 24.18a5.818 5.818 0 1 0 0 11.637 5.818 5.818 0 0 0 0-11.637Z"
            clipRule="evenodd"
        />
    </svg>
))

GeolocationIcon.displayName = 'GeolocationIcon'

export default GeolocationIcon
