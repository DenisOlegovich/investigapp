import { ComponentPropsWithoutRef, forwardRef } from 'react'

const BusStationIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 84 84"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M23.5 35.5v-16h51v45h-65v-4h5.7c-.1-.5-.2-1-.2-1.5 0-.8.2-1.7.5-2.5s.8-1.5 1.4-2.1c.6-.6 1.3-1.1 2.1-1.4.8-.3 1.6-.5 2.5-.5v1.7c-2.7 0-4.8 2.2-4.8 4.8 0 .5.1 1 .3 1.5.6 1.9 2.4 3.3 4.5 3.3h.2c2.1 0 3.7-1.4 4.3-3.3h16.5v-3.6h1.9v-3.7h-1.8v-11l-3.7-3.7H9.5v-3h14Zm8 0h5v-10h-5v10Zm10 0h5v-10h-5v10Zm10 0h5v-10h-5v10Zm10 0h5v-10h-5v10Zm-50.2 6.7h7.3v5.5h-7.3v-5.5Zm16.5 0h-7.3v5.5h7.3v-5.5Zm7.4 0h3.7v14.7h-3.7V42.2Zm-1.8 0h-3.7v14.7h3.7V42.2ZM18.9 60.5c-.2-.4-.4-.9-.4-1.5 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9 0 .5-.1 1.1-.4 1.5-.5.8-1.5 1.4-2.5 1.4-1.1 0-2-.6-2.5-1.4Z"
            clipRule="evenodd"
        />
    </svg>
))

BusStationIcon.displayName = 'BusStationIcon'

export default BusStationIcon
