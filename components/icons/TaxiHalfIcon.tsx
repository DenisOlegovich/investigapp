import { ComponentPropsWithoutRef, forwardRef } from 'react'

const TaxiHalfIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 84 84"
        {...props}
    >
        <path
            fill="#FD3"
            d="M39.55 49.85c.6-1.4 1.4-2.6 2.5-3.7s2.3-1.9 3.7-2.5c1.4-.6 2.9-.9 4.5-.9v3c-4.7 0-8.5 3.8-8.5 8.5 0 1 .2 1.9.5 2.7 1.1 3.4 4.3 5.8 8.1 5.8h.5c3.8 0 6.5-2.3 7.6-5.7h13v-13l-6.5-6.5h-18l-18-16.3h-16.4v36.1h26.3c-.3-1 .1-6.1.7-7.5Zm15.8 4.5c0 1-.3 1.9-.8 2.7-.9 1.5-2.5 2.5-4.4 2.5-1.9 0-3.5-1-4.4-2.4-.5-.8-.8-1.7-.8-2.7 0-2.9 2.3-5.2 5.2-5.2 2.9-.1 5.2 2.3 5.2 5.1Zm-39.5-29.9h11.4l14.7 13.1h-26.1v-13.1Zm19.6 22.8h-6.5v6.5h-6.6v-6.5h-6.5v-6.5h6.5v6.5h6.5v-6.5h6.5v6.5h.1Z"
        />
        <path
            fill="#000"
            d="M35.452 47.25h-6.5v6.5h-6.6v-6.5h-6.5v-6.5h6.5v6.5h6.5v-6.5h6.5v6.5h.1Z"
        />
    </svg>
))

TaxiHalfIcon.displayName = 'TaxiHalfIcon'

export default TaxiHalfIcon
