import { ComponentPropsWithoutRef, forwardRef } from 'react'

const ColoredGooglePlayIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 18 18"
        ref={ref}
        {...props}
    >
        <path
            fill="#00D3FF"
            d="M.788.376a.733.733 0 0 0-.01.129V17.61c0 .2.09.338.231.389l9.112-8.684L.788.376Z"
        />
        <path
            fill="#00F076"
            d="M1.125.01a.73.73 0 0 1 .493.1l7.58 4.199 3.906 2.164-2.623 2.5L1.125.011Z"
        />
        <path
            fill="#F63449"
            d="m12.64 11.73-3.442 1.906-7.057 3.91 8.33-7.895 2.17 2.078Z"
        />
        <path
            fill="#FFC900"
            d="m13.096 11.477.031-.017 3.777-2.092c.443-.246.4-.583.027-.776-.292-.151-2.44-1.347-3.373-1.867L10.832 9.31l2.264 2.168Z"
        />
    </svg>
))

ColoredGooglePlayIcon.displayName = 'ColoredGooglePlayIcon'

export default ColoredGooglePlayIcon
