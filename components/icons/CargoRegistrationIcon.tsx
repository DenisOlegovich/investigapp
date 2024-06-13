import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CargoRegistrationIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 132 132"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            d="M112.301 71.2v-5.1l-7.5-14.9h-18.5v15.3h-2.7V43.4h-9.2L54.5 70.2h-4L39.8 55.1l4-2.9 8.8 12.2 15.6-21H19.7V71.2h-2.9v6h2.9v6h6.9c-.2-.8-.3-1.6-.3-2.4 0-1.4.3-2.8.8-4.1.5-1.3 1.3-2.4 2.3-3.4 1-1 2.1-1.7 3.4-2.3 1.3-.6 2.7-.8 4.1-.8V73c-4.3 0-7.8 3.5-7.8 7.8 0 .9.1 1.7.4 2.5 1 3.1 4 5.3 7.4 5.3h.4c3.4 0 5.9-2.3 7-5.4h37.9c-.2-.8-.3-1.6-.3-2.4 0-1.4.3-2.8.8-4.1.5-1.3 1.3-2.4 2.3-3.4 1-1 2.1-1.7 3.4-2.3 1.3-.6 2.7-.8 4.1-.8V73c-4.3 0-7.8 3.5-7.8 7.8 0 .9.1 1.7.4 2.5 1 3.1 4 5.3 7.4 5.3h.4c3.4 0 5.9-2.3 7-5.4h12.3v-6h3v-6h-2.9Zm-71.4 12c-.8 1.3-2.3 2.2-4 2.2-1.7 0-3.2-.9-4-2.2-.5-.7-.7-1.6-.7-2.5 0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7c0 .9-.3 1.8-.7 2.5Zm55.6 0c-.8 1.3-2.3 2.2-4 2.2-1.7 0-3.2-.9-4-2.2-.5-.7-.7-1.6-.7-2.5 0-2.6 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7c0 .9-.2 1.8-.7 2.5Zm12.4-16.7h-16.2v-9.7h11.6l4.6 9.7Z"
        />
    </svg>
))

CargoRegistrationIcon.displayName = 'CargoRegistrationIcon'

export default CargoRegistrationIcon
