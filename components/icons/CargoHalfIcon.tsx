import { ComponentPropsWithoutRef, forwardRef } from 'react'

const CargoHalfIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M10.648 17.1h27.8v22.3h-27.8V17.1Zm59.3 25v5.6h3.4v6.6h-3.3v6.6h-13.6c-1.2 3.4-3.9 6-7.7 6h-.5c-3.7 0-7-2.4-8.1-5.8-.3-.9-.5-1.8-.5-2.8 0-4.7 3.9-8.6 8.6-8.6v-3.1c-1.5 0-3.1.3-4.5.9-1.4.6-2.6 1.4-3.7 2.5s-1.9 2.3-2.5 3.7c-.6 1.4-.9 2.9-.9 4.5 0 1 .1 1.8.3 2.7h-26.3V42.6h30.7V25.7h20.4l8.2 16.4Zm-21.7 21.4c1.8 0 3.5-1 4.4-2.5.5-.8.8-1.8.8-2.8 0-2.9-2.3-5.2-5.2-5.2-2.9 0-5.2 2.3-5.2 5.2 0 1.1.3 2 .8 2.8.9 1.5 2.5 2.5 4.4 2.5Zm.2-21h17.8l-5-10.6h-12.8v10.6Z"
            clipRule="evenodd"
        />
    </svg>
))

CargoHalfIcon.displayName = 'CargoHalfIcon'

export default CargoHalfIcon
