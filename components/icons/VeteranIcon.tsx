import { ComponentPropsWithoutRef, forwardRef } from 'react'

const VeteranIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="M37.349 5h-14l7.8 27 11.2-6-5-21Zm-19.7 20.9 11.3 6.1h.1l-7.4-25-4 18.9Zm12.5 8.2 2.7 7.9 8.3.1-6.7 5 2.5 7.9-6.8-4.8-6.8 4.8 2.5-7.9-6.7-5 8.4-.1 2.6-7.9Z"
            clipRule="evenodd"
        />
    </svg>
))

VeteranIcon.displayName = 'VeteranIcon'

export default VeteranIcon
