import { ComponentPropsWithoutRef, forwardRef } from 'react'

const BusHalfIcon = forwardRef<SVGSVGElement, ComponentPropsWithoutRef<'svg'>>((props, ref) => (
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
            d="m63.5 19.25 6.5 6.6v19.7h3.3v6.6H70v6.6H40.4c-1.2 3.4-3.9 6-7.7 6h-.5c-3.7 0-7-2.4-8.1-5.8-.3-.9-.5-1.8-.5-2.8 0-4.7 3.9-8.6 8.6-8.6v-3.1c-1.5 0-3.1.3-4.5.9-1.4.6-2.6 1.4-3.7 2.5s-1.9 2.3-2.5 3.7c-.6 1.4-.9 2.9-.9 4.5 0 1 .1 1.8.3 2.7H10.7v-39.5h52.8Zm-49.4 16.5h13.2v-9.9H14.1v9.9Zm22.389 23.275c.038-.057.075-.116.11-.175.5-.8.8-1.7.8-2.8a5.161 5.161 0 0 0-5.2-5.2A5.164 5.164 0 0 0 27 56.157a5.105 5.105 0 0 0 .8 2.693c.9 1.5 2.5 2.5 4.4 2.5a5.074 5.074 0 0 0 4.29-2.325Zm-5.99-23.275h13.2v-9.9H30.5v9.9ZM47 52.15h6.6v-26.3H47v26.3Zm9.9 0h6.6v-26.3h-6.6v26.3Z"
            clipRule="evenodd"
        />
    </svg>
))

BusHalfIcon.displayName = 'BusHalfIcon'

export default BusHalfIcon
