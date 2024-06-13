import { ComponentPropsWithoutRef, forwardRef } from 'react'

const DeliveryIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 60 61"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M30.418 16.939c1.666 0 2.833-1.167 3-2.834 0-1.666-1.167-2.833-2.834-3-1.666 0-2.833 1.167-3 2.834-.166 1.666 1.167 3 2.834 3Zm2.499 16.833 5.166 3.833 2.167 11.667-3.167.667-2.333-10.167-6.833-4.833c-1.167-.667-1.667-1.834-1.667-3.167v-9.933a2.4 2.4 0 0 1 2.4-2.4h2.1c1.167 0 2.167 1 2.167 2.166v3.944l5.25 4.34-2 2.5-3.25-2.675v4.058Zm-10 15.333-2.5-2 7.833-9.333 2.333 2-7.666 9.333ZM19 31.722a2.4 2.4 0 0 1-2.4-2.4v-3.396a1.6 1.6 0 0 1-1.6-1.6V20.13c0-1.22.989-2.208 2.208-2.208h5.184c1.22 0 2.208.988 2.208 2.208V31.722H19Zm1.6-10.672v7.072h1.6V21.05h-1.6Z"
            clipRule="evenodd"
        />
    </svg>
))

DeliveryIcon.displayName = 'DeliveryIcon'

export default DeliveryIcon
