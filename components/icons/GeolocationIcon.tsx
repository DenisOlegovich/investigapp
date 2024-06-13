import { ComponentPropsWithoutRef, forwardRef } from 'react'

const GeolocationIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 25 24"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="m3.345 10.616 7.297 2.914 2.927 7.282 7.266-17.479-17.49 7.283Z"
            clipRule="evenodd"
        />
    </svg>
))

GeolocationIcon.displayName = 'GeolocationIcon'

export default GeolocationIcon
