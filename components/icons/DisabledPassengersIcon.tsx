import { ComponentPropsWithoutRef, forwardRef } from 'react'

const DisabledPassengersIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1.22em"
        fill="none"
        viewBox="0 0 59 72"
        ref={ref}
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M21.997 0C18.93 0 16 2.68 16 6.124 16 9.448 18.931 12 21.997 12 25.324 12 28 9.448 28 6.124 28 2.68 25.324 0 21.997 0Zm4.54 15H19v29.627h22.747L52.1 65 59 62.905 46.601 37.71 30.76 36.274l-.9-5.09h9.076v-6.402H28.588L26.538 15Zm-11.36 11C6.934 29.627.873 37.27 1.002 47.899 1.26 62.149 12.215 72 24.838 72c8.12 0 15.72-4.534 19.842-11.011.644-1.431.258-3.115-.644-4.022-.554-.55-1.34-.797-2.125-.797-1.063 0-2.125.44-2.647 1.185-2.963 5.312-8.624 8.298-14.426 8.298-9.66 0-17.776-8.039-17.776-17.754 0-6.095 3.214-11.53 8.115-14.774V26Z"
            clipRule="evenodd"
        />
    </svg>
))

DisabledPassengersIcon.displayName = 'DisabledPassengersIcon'

export default DisabledPassengersIcon
