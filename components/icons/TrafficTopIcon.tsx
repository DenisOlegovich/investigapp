import { ComponentPropsWithoutRef, forwardRef } from 'react'

const TrafficTopIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 22 12"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            d="M5.342 7.6C3.568 9.67 1.066 11.156.168 11.156.168 6.889 3.05.889 10.811.889h5.634c3.13 0 4.28 2.177 5.008 4.044.832 2.134.15 5.156-.59 6.223 0-3.2-2.415-9.244-6.651-9.244-4.435 0-6.653 3.1-8.87 5.688Z"
        />
    </svg>
))

TrafficTopIcon.displayName = 'TrafficTopIcon'

export default TrafficTopIcon
